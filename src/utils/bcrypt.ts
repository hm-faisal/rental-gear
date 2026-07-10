import bcrypt from 'bcryptjs';
import { env } from '../config/index.js';

export const hashPassword = async (password: string): Promise<string> => {
	const saltRound = Number(env.bcrypt_salt_round) || 12;
	return await bcrypt.hash(password, saltRound);
};

export const comparePassword = async (
	password: string,
	hash: string,
): Promise<boolean> => {
	return await bcrypt.compare(password, hash);
};
