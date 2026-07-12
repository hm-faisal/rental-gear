import { defineConfig } from 'tsup';

export default defineConfig({
	entry: ['src/index.ts', 'src/vercel.ts'],
	format: ['esm'],
	target: 'esnext',
	outDir: 'dist',
	clean: true,
	bundle: true,
	splitting: false,
	sourcemap: true,
	noExternal: ['@prisma/client-runtime-utils'],
	banner: {
		js: `
   import { createRequire } from 'module';
   const require = createRequire(import.meta.url);
  `,
	},
});
