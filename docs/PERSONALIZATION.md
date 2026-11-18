# Maintaining Achref's portfolio

Public content is English. `src/config/site.config.ts` holds identity and social links; `content.config.ts` holds the domains and bio. Education, experience, languages and course certificates have separate typed configurations. `skills.config.ts` groups practical tools and foundations; Profile deliberately uses no radar or proficiency percentages.

## Current page structure

- `/`: `HomeProfile.tsx` renders only the terminal-framed portrait, requested introduction and clear navigation buttons to Profile, Projects and Community. No detailed timeline, skills, project cards or community preview appears here.
- `/profile`: `ProfileDetails.tsx` renders academic background, internships, technical skills, certifications/training and languages from the existing configuration. It contains no project or community preview.
- `/community`: two source-backed roles and four captioned photos, configured in `profile.config.ts`. Originals remain untouched.
- `/projects`: the existing vertical project cards, covers and detail links are preserved.
- `/about`: permanent HTTP 308 redirect to `/profile` for older profile links. Navigation, search palette, sitemap and llms.txt now distinguish Home and Profile.

The global reveal styles now default to visible and `TypedText` renders its entire text in server HTML. Optional observers and decorative animation cannot be required to read the content. Existing reduced-motion handling is retained. Detailed project pages and the CV generator are preserved. Project data uses the truthful `DOCUMENTED` label in place of unverified `COMPLETED` states; the 3S category is `internship`, cloud/SOAR work is `lab`.

Use `http://localhost:3000` for preview. The explicit `127.0.0.1` development alias is also permitted; no wildcard or LAN host was added. If changing compiled configuration in an already running server, restart it before reviewing the result.

### Earlier layout revision verification

Home, Community and Projects were checked in that order using their real server responses. Assertions checked the full profile sections after the hero, four selected projects, two community roles and four captioned photographs, then four vertical project cards with matched covers and valid internal detail links. Shared navigation, the 308 `/about` redirect, sitemap, image responses and footer order were checked as well. Typecheck, lint, 32 existing tests and production build passed. No dependencies were installed.

Browser access inventory returned `The browser access host is unavailable`. Consequently desktop/mobile visual layout, horizontal overflow measured in a browser, keyboard interactions and browser console inspection remain unverified. The responsive CSS and HTML assertions are not a substitute for those checks. A transient development error while replacing configuration disappeared after the repository's Next.js server was restarted; Community and all final route checks then passed.

`projects.config.ts` contains four structured case studies in display order. Update context, problem, contributions, workflow, materials, designNotes and gallery together. `CaseStudy.tsx` renders these fields on the full page and embedded project view. Do not label a documentary repository as a deployed application.

Selected public images live in `public/assets`. `docs/media-manifest.json` maps each copy to its untouched original in `rsources`, records crops and actual output dimensions. Galleries use contained images, native dialog enlargement, Escape, previous/next controls and an original-image link. Home retains the cropped copy of IMG_0765.JPG. The Profile page uses the user-supplied wide image from `rsources/profile`, optimised as `profile-banner.webp` and configured by `profileConfig.portrait`. It fills the frame with `object-fit: cover` and `object-position: 50% 60%`; the original is untouched. Raw resources and ZIP remain untouched and ignored.

## CV and contact

No original CV PDF was found at the repository root or recursively in `rsources`. `/cv` uses the existing React PDF generator and the public verified profile, with one internship style. It explicitly labels the result as portfolio-generated. Its download name is `Achref_Mansouri_CV.pdf`. The professional email is public by intent. No contact form claims to send a message.

To supply the original, copy the approved PDF to `public/assets/Achref_Mansouri_CV.pdf`, then change `src/app/cv/CVClient.tsx` to offer a download link to that exact path and describe it as the original. Check the response and open the PDF. Keep the site and PDF facts aligned. Phone may remain only in the original; it is not shown in the hero.

## URL and environment

No environment variables or paid services are required locally. Set `NEXT_PUBLIC_SITE_URL=https://your-actual-domain` in an ignored `.env.local` before a production build. It must be an origin, without a path. This is the single source for metadata, sitemap, CV website, origin validation and CSP reporting. Default: `http://localhost:3000`. If using another local port, set the matching origin. Do not set secrets in `NEXT_PUBLIC_*` variables.

Optional `CONTACT_EMAIL` overrides the public professional email on server contact paths. Other upstream integration variables are unnecessary: Turnstile, analytics, Steam, Strava, music, signatures, contribution counts, blog, life, release history, boot screen, system statistics and threat globe are disabled in `features.config.ts`. No SOC environment is contacted. Fonts are served locally from the template's included files.

## Windows

Node >=24 is required (verification used Node 26.13.0). Existing dependencies were reused.

```powershell
npm.cmd ci # only on a fresh clone / when dependencies are missing
npm.cmd run dev
# open the URL printed by Next.js (normally http://localhost:3000)
npm.cmd run typecheck
npm.cmd run lint
npm.cmd test
npm.cmd run build
npm.cmd run icons # only after icon changes; requires Google Fonts access
```

`npm.cmd run setup` remains a non-overwriting upstream bootstrap. On this personalised checkout it skips existing config and assets. It can copy ignored example blog and threat data, but disabled feature flags prevent displaying them. Do not overwrite personalised files from `config.example`.

Public `src/config` and `public/assets` are no longer ignored and can be committed normally by the owner. Secrets (`.env`, `.env.*`, except example files), private files, raw resources, generated build output and `tmp` remain ignored. No `git add -f` is needed. This task made no commit, push, remote change or deployment.

## Verification limits

See `CONTENT_SOURCES.md` for evidence limits. Browser automation stopped because it could not determine Opera's current URL. Mobile/tablet/desktop layout, console, interactive keyboard behaviour and actual browser PDF download require manual review. HTTP checks and a successful build do not replace those checks.

Original visual design: [Cyberfolio by iamxorum](https://github.com/iamxorum/cyberfolio). MIT licence retained.

## Local verification (2026-11-16)

Node 26.13.0; dependencies already installed. `typecheck`, `lint`, `test` (32 tests), `build` and `icons` completed successfully. The initial changelog check failed on CRLF bytes; regeneration and a targeted `.gitattributes` LF rule preserve the generated format. Icons initially needed network approval; the final page font uses the already bundled local JetBrains Mono files.

Production HTTP checks returned 200 for home, About, project listing, four details and CV, plus all 18 selected public assets. Hidden pages produced Next.js not-found responses, disabled optional APIs returned 404, public contact returned the verified email, CSP retained object restrictions, and sitemap used the local configured origin without template domain references. Observed URL: http://127.0.0.1:3000. Preview servers were stopped after checks. Interactive browser checks and actual generated PDF download remain unverified.

### Home / Profile separation

The latest revision restores a dedicated Profile page. HTTP checks confirm Home contains the requested introduction and destination buttons only; Profile contains the full academic background, internships, skills, training and languages. Neither page renders project cards or community galleries/previews. `/about` redirects to `/profile`. Projects, Community and CV continue responding successfully. Typecheck, lint, all 32 existing tests and production build passed. No browser visual verification was performed for this separation. An existing development server was reused without terminating it.
