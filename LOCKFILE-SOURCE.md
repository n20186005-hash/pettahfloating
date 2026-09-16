# Lockfile status

A lockfile is intentionally **not fabricated** in this archive.

The dependency versions in `package.json` were cross-checked against a current public pnpm lock resolution that contains Astro 7.3.2, `@astrojs/sitemap` 3.7.4, `@tailwindcss/vite` 4.3.3, Tailwind CSS 4.3.3, `@astrojs/check` 0.9.10, TypeScript 6.0.3, and Wrangler 4.131.1. However, copying a third-party superset lockfile and pretending it was generated for this exact importer would not meet the requested frozen-lockfile guarantee.

Generate the project lock in a network-enabled clean environment with the pinned package manager, then run:

```bash
corepack enable
corepack prepare pnpm@12.4.1 --activate
pnpm install --lockfile-only
./scripts/verify-clean.sh
```

Commit the resulting `pnpm-lock.yaml` only if all checks pass.
