import { createServer } from 'node:http';
import app from './app';
import { env } from './config';
import { prisma } from './lib/prisma';

const PORT = env.port;

async function main(): Promise<void> {
	try {
		const server = createServer(app);

		await prisma.$connect();
		console.log('Database connected successfully');

		server.listen(PORT, () => {
			console.log(`server is running on ${PORT}`);
		});
	} catch (error) {
		console.error(error);
		await prisma.$disconnect();
		process.exit(1);
	}
}
main();
