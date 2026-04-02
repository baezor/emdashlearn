# EmDash—Learn

> Open learning, on the edge.

Open source LMS plugin for [EmDash CMS](https://github.com/emdash-cms/emdash) — bringing courses, progress tracking, and structured learning to the Cloudflare Workers ecosystem.

## Status

🚧 **Coming soon.** This repository is in early planning. [Join the waitlist](https://emdashlearn.pages.dev) to be notified when it enters beta.

## What it is

EmDash Learn extends EmDash CMS with a complete learning management layer: courses, modules, lessons, enrollment, progress tracking, and certificate generation — all running on Cloudflare's edge network via the EmDash plugin API.

Built TypeScript-first, deployable to the edge, and designed to extend rather than replace your existing EmDash site.

## Planned Features

- [ ] Course content types (courses, modules, lessons)
- [ ] Student enrollment & progress tracking
- [ ] Quiz and assessment blocks
- [ ] Certificate generation
- [ ] Admin UI via emdash plugin API
- [ ] Portable Text lesson content
- [ ] x402 payment integration for paid courses
- [ ] D1 database bindings for progress state

## Plugin Architecture (Preview)

```typescript
import { emDashLearnPlugin } from "emdashlearn";

// astro.config.mjs
export default defineConfig({
  integrations: [
    emdash({
      plugins: [emDashLearnPlugin()],
    }),
  ],
});
```

## Development (Coming Soon page)

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # ./dist
npm run preview   # preview built static site
npm run typecheck # TypeScript check
```

## Tech Stack

- [Astro 6](https://astro.build) — static site framework
- [Tailwind CSS v4](https://tailwindcss.com) — styling
- [Cloudflare Pages](https://pages.cloudflare.com) — deployment
- [emdash CMS](https://github.com/emdash-cms/emdash) — plugin target

## License

MIT — see [LICENSE](./LICENSE)

---

Built for [EmDash CMS](https://github.com/emdash-cms/emdash) — the TypeScript-first, Cloudflare-native CMS.
