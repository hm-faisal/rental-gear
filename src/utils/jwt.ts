import jwt, { SignOptions } from 'jsonwebtoken';

export const generateToken = (
	payload: { id: string; email: string; role: string },
	secret: string,
	expiresIn: string,
): string => {
	return jwt.sign(payload, secret, { expiresIn: expiresIn as SignOptions['expiresIn'] });
};

export const verifyToken = (token: string, secret: string) => {
	return jwt.verify(token, secret);
};
