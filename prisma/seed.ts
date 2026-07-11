import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import bcrypt from 'bcryptjs';
import { PrismaClient } from '../generated/prisma/client';

const connectionString = `${process.env.DATABASE_URL}`;

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

async function main() {
	const adminEmail = 'admin@example.com';

	const existingAdmin = await prisma.user.findUnique({
		where: { email: adminEmail },
	});

	if (existingAdmin) {
		console.log('Admin user already exists, skipping seed.');
		return;
	}

	const hashedPassword = await bcrypt.hash('admin123', 12);

	await prisma.user.create({
		data: {
			name: 'Admin',
			email: adminEmail,
			passwordHash: hashedPassword,
			role: 'ADMIN',
		},
	});

	console.log('Admin user seeded successfully.');
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
