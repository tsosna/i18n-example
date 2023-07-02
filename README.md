# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

# Getting Started

```bash
pnpm add -D @inlang/sdk-js
```

# Add plugin to vite.config.ts

```bash
import inlangPlugin from "@inlang/sdk-js/adapter-sveltekit"

export default defineConfig({
	plugins: [inlangPlugin(), sveltekit()]
});
```

# Add tailwindcss

```bash
pnpx svelte-add@latest tailwindcss
pnpm i
```
# Add shadcn-svelte

[shadcn-svelte](https://www.shadcn-svelte.com/)

> *💡Note: before this addition, you need to check if by chance there is an import { vitePreprocess } from '@sveltejs/kit/vite' in svelte.config.js; 
If so, it's best to comment.*
> 

```bash
pnpx shadcn-svelte init
```

# Install svelte-preprocess

```bash
pnpm install -D svelte-preprocess
```

# Add shadcn-svelte components (e.g. button)

> *💡Note: when you leave the pnpx shadcn-svelte add alone, it shows the list of elements*.
> 

```bash
pnpx shadcn-svelte add button
```

# Add Lucide Icon

[Lucide Icons](https://lucide.dev/guide/packages/lucide-svelte)

```bash
pnpm install lucide-svelte/h
```

# Add Open Props CSS

[Open Props: sub-atomic styles](https://open-props.style/)

```bash
pnpm i open-props 
```

# Add fonts

[Fontsource](https://fontsource.org/)

```bash
pnpm i @fontsource/manrope
```

# .prettierrc - removal of semicolon

```bash
.prettierrc
{
	"semi": false,
	"useTabs": true,
	"singleQuote": true,
	"trailingComma": "none",
	"printWidth": 100,
	"plugins": ["prettier-plugin-svelte"],
	"pluginSearchDirs": ["."],
	"overrides": [{ "files": "*.svelte", "options": { "parser": "svelte" } }]
}
```

```bash
pnpm run format
```

# Install Prisma

```bash
pnpm i @prisma/client
pnpx prisma init
```

## Prisma Migrate

```bash
pnpx prisma migrate dev --name "Add Lang"
```