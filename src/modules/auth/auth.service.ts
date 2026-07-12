import { env } from '../../config/index.js';
import { BadRequestError, ForbiddenError, NotFoundError } from '../../errors';
import { Role } from '../../generated/prisma/client';
import { prisma } from '../../lib/prisma.js';
import { comparePassword, hashPassword } from '../../utils/bcrypt.js';
import { generateToken } from '../../utils/jwt.js';

export interface RegisterPayload {
	name: string;
	email: string;
	password: string;
	role?: Role;
	phone?: string | null;
	address?: string | null;
}

export interface LoginPayload {
	email: string;
	password: string;
}

const register = async (payload: RegisterPayload) => {
	const {
		name,
		email,
		password,
		role = Role.CUSTOMER,
		phone,
		address,
	} = payload;

	// Check if user already exists
	const existingUser = await prisma.user.findFirst({
		where: { email },
	});
	if (existingUser) {
		throw new BadRequestError('A user with this email already exists');
	}

	// Hash password
	const hashedPassword = await hashPassword(password);

	// Create user
	const user = await prisma.user.create({
		data: {
			name,
			email,
			passwordHash: hashedPassword,
			role,
			phone: phone || null,
			address: address || null,
		},
		omit: { passwordHash: true },
	});

	return user;
};

const login = async (payload: LoginPayload) => {
	const { email, password } = payload;

	// Check if user exists
	const user = await prisma.user.findFirst({
		where: { email },
	});
	if (!user) {
		throw new NotFoundError('User not found');
	}

	// Verify password
	const isPasswordMatched = await comparePassword(password, user.passwordHash);
	if (!isPasswordMatched) {
		throw new ForbiddenError('Invalid password');
	}

	// Check if user is suspended
	if (user.status === 'SUSPENDED') {
		throw new ForbiddenError('Your account has been suspended');
	}

	// Generate tokens
	const accessToken = generateToken(
		{ id: user.id, email: user.email, role: user.role },
		env.jwt_access_secret || 'fallback_access_secret',
		env.jwt_access_expires_in || '1d',
	);

	return {
		accessToken,
	};
};

const getProfile = async (id: string) => {
	const user = await prisma.user.findUnique({
		where: { id },
		omit: { passwordHash: true },
	});
	if (!user) {
		throw new NotFoundError('User not found');
	}
	return user;
};

const updateProfile = async (
	id: string,
	payload: { name?: string; phone?: string | null; address?: string | null },
) => {
	const user = await prisma.user.findUnique({
		where: { id },
	});
	if (!user) {
		throw new NotFoundError('User not found');
	}

	const updatedUser = await prisma.user.update({
		where: { id },
		data: {
			name: payload.name !== undefined ? payload.name : undefined,
			phone: payload.phone !== undefined ? payload.phone : undefined,
			address: payload.address !== undefined ? payload.address : undefined,
		},
		omit: { passwordHash: true },
	});

	return updatedUser;
};

export const authService = {
	register,
	login,
	getProfile,
	updateProfile,
};
