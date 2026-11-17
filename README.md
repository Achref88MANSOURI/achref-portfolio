# Achref Mansouri — Cybersecurity Portfolio

Personalised from [Cyberfolio by iamxorum](https://github.com/iamxorum/cyberfolio). The original terminal aesthetic and MIT licence are retained. This is an English portfolio for a final-year cybersecurity internship, with four documented case studies, education, experience, community activities and contact details.

Requires Node >=24. Existing Next.js, React, TypeScript and Tailwind architecture is preserved.

```powershell
npm.cmd ci # fresh clone only
npm.cmd run dev
```

Open the local URL printed by Next.js, normally http://localhost:3000.

```powershell
npm.cmd run typecheck
npm.cmd run lint
npm.cmd test
npm.cmd run build
```

Public configuration in `src/config` and selected media in `public/assets` are versionable. Raw `rsources` and its archive are preserved locally and ignored. No environment variables are required for local use. Set `NEXT_PUBLIC_SITE_URL` before a production build when the real domain is known.

The original CV PDF was absent. `/cv` offers one clearly labelled portfolio-generated CV using the existing PDF renderer. Optional external integrations and demonstration telemetry are disabled. No connection to operational SOC systems is made.

See [maintenance instructions](docs/PERSONALIZATION.md), [content provenance](docs/CONTENT_SOURCES.md) and [media mapping](docs/media-manifest.json). The upstream `config.example` and non-overwriting setup script remain available as examples; do not copy them over personalised content.

Validation: typecheck, lint, tests, build and HTTP checks are available. Browser automation was blocked in this environment; responsive layout, interactive keyboard behaviour and browser PDF download still need manual review.

MIT — see [LICENSE](LICENSE). Original Cyberfolio design by iamxorum; personal content and adaptation for Achref Mansouri.
