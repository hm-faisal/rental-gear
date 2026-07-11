import path from 'node:path';
import dotenv from 'dotenv';

dotenv.config({
	path: path.join(process.cwd(), '.env'),
});

export default {
	port: process.env.PORT || 3000,
	database_url: process.env.DATABASE_URL,
	app_url: process.env.APP_URL,
	client_url: process.env.CLIENT_URL ?? 'http://localhost:3000',
	bcrypt_salt_round: process.env.BCRYPT_SALT_ROUND,
	jwt_access_secret: process.env.JWT_ACCESS_SECRET,
	jwt_refresh_secret: process.env.JWT_REFRESH_SECRET,
	jwt_access_expires_in: process.env.JWT_ACCESS_EXPIRES_IN,
	jwt_refresh_expires_in: process.env.JWT_REFRESH_EXPIRES_IN,
	stripe_secret_key: process.env.STRIPE_SECRET_KEY,
	stripe_webhook_secret: process.env.STRIPE_WEBHOOK_SECRET,
};
