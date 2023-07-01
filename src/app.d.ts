// See https://kit.svelte.dev/docs/types#app

import { PrismaClient } from '@prisma/client'

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
	let db: PrismaClient | undefined
}

export {}

