# Content and evidence provenance

Profile, internship contributions, education, languages and Cisco training: user-supplied verified CV facts in the task. No local original CV PDF was found. No age, project dates, team sizes, internship start availability or performance scores were invented. Cisco audit is expressly co-authored with Mohamed Amine Ouni; detailed ownership of individual modules was not available.

Repository content was read through the GitHub connector on 2026-11-16. No external code, workflow, scanner, responder or endpoint action was executed, and no external repository was modified.

| Case study | Source and inspected material | Evidence limit |
| --- | --- | --- |
| AI-Assisted SOC Automation | [SOC-Monitoring-Automation-](https://github.com/Achref88MANSOURI/SOC-Monitoring-Automation-): `Readme.md` (case-sensitive; `README.md` returns 404), root listing, `main.py` | Repository implements the triage/response layer, not every upstream platform. Main architecture is deterministic ingest → gather → RAG → one LLM assessment → TheHive case action. Upstream deployment contributions come from the supplied CV. No full infrastructure validation was run. |
| Related SOC variant | [SOC-3s](https://github.com/Achref88MANSOURI/SOC-3s): root listing and `graph.py` | No README at the checked path. LangGraph perception / investigation / analysis variant, explicitly separate from the main deterministic workflow; not counted as another project. `agents` was unnecessary to resolve this distinction and was not examined. |
| Smart-IDS | [smart-ids](https://github.com/Achref88MANSOURI/smart-ids): README, root and frontend source listings, `dashboard/backend.py`, `scripts/enrichment.py` | FastAPI, ML enrichment and React source are present. Cloud deployment and end-to-end reproducibility were not verified. Backend has machine-specific configuration and imports; code presence is not a reproducibility claim. No live demo advertised. |
| Cisco security audit | [Projet_Tutore_moteur_d-audit_cisco](https://github.com/Achref88MANSOURI/Projet_Tutore_moteur_d-audit_cisco): README, root listing, `schemas/router_contract_v1.py`, `web_analysis.py` | Pydantic contract and web orchestration inspected. Static configuration analysis, no SSH or router changes. CIS-inspired findings are not global compliance or operational security certification. Historical broader academic repository was unnecessary. |
| LLM SOAR | [LLM-Enhanced-SOAR-Pipeline-Intelligent-SOC-Automation](https://github.com/Achref88MANSOURI/LLM-Enhanced-SOAR-Pipeline-Intelligent-SOC-Automation): README and complete root listing | Root contains README and three screenshots, despite the illustrative application tree in the README. No complete application or executable tests found. Wazuh → Shuffle → Cortex / local Ollama inference → TheHive. External enrichment still makes network calls. |

## Selected media

All 21 local images were inventoried recursively and visually surveyed in a contact sheet. Selected detailed SOC screenshots were inspected at full size. Public copies are mapped exactly in `media-manifest.json`; no originals were changed. No visible password or access token was found in selected copies. Browser/system chrome was cropped from the n8n and 3S case images. Internal lab hostnames, case text and historical counters are not operational telemetry from this website.

| Public media | Local source | Interpretation |
| --- | --- | --- |
| `soc-pipeline.webp` | `3s/Automatisation intelligente du SOC-1.png` | Explanatory diagram, not proof of execution. Case-closure feedback into MISP is not independently verified. |
| `soc-triage.webp` | `3s/Enrichissement des preuves et triage IA-3.png` | Explanatory evidence/RAG diagram. |
| `soc-response.webp` | `3s/Réponse aux incidents avec validation humaine-2.png` | Explanatory human-approved response diagram. Endpoint actions require analyst approval. |
| `soc-n8n.webp` | `3s/impl_n8n_overview.png.png` | Workflow screenshot; browser and desktop chrome removed. |
| `soc-case.webp` | `3s/case true.png` | Cropped TheHive analysis detail. Resource dates may postdate the CV internship; it is not used to change the internship dates or claim July/August execution. |
| `ids-dashboard.webp`, `ids-architecture.webp`, `ids-kibana.webp` | Three `NIDS` JPEGs, respectively 1777409342025, 1777409342146, 1777409342750 | Dashboard screenshot, historical architecture diagram and Kibana screenshot. Embedded metrics are unverified snapshots; none are promoted as measured achievements in the page text. |
| `soar-workflow.webp`, `soar-case.webp`, `soar-wazuh.webp` | `soar/shuffle_workflow.png`, `thehive_case.png`, `wazuh_dashboard.png` | Wazuh/Shuffle workflow and interfaces only. Never used as 3S deployment evidence. |
| `profile.jpg` | GDG `IMG_0765.JPG` | Individual photograph, cropped and resized; no generated face or identity replacement. |
| `community-gdg.webp` | GDG `IMG_0876.JPG` | Community photo supporting Media Manager context, not employment at Google. |
| `community-indabax.webp` | IndabaX `499703004_723595060060151_3903114194802102188_n.jpg` | Organising community photo; no invented duties, participant counts or budgets. |
| `community-gdg-team.webp` | GDG `IMG_0870.JPG` | Additional group photograph from the supplied event resources. Optimised copy for the dedicated Community gallery. |
| `community-indabax-event.webp` | IndabaX `501313093_17955396377953350_7960500306543390616_n.jpg` | Additional event photograph. Only the documented 2025 event year is displayed; no precise date or additional responsibility inferred. |

Cisco has no supplied screenshot; the structured typographic workflow on Home and Projects is a source-based explanation, not a fabricated capture. The selected SOC cover remains an explanatory diagram. Smart-IDS uses the historical dashboard with a caption excluding benchmark claims; SOAR uses the Shuffle workflow. `cover` metadata in `projects.config.ts` preserves this mapping separately from the full detail gallery. Unselected photographs, redundant SOC diagram, n8n close-up and SOAR alert image remain in the untouched raw directory.

## Deliberate exclusions and remaining checks

No AUC/recall/false-positive/latency/alert-volume figures, SOC attack statistics, fake infrastructure nodes, testimonials, awards or unsupported technologies. No public demonstration claimed. No conflation of CCNA course certificates with the professional CCNA exam. TOEIC remains 865/990 without an inferred CEFR conversion. No invented CyberOps credential ID/date/link.

The original CV, production domain and fine-grained ownership of collective work remain unavailable. External project tests, infrastructure and performance protocols were not rerun. Mock service tests in related SOC work would not establish real infrastructure validation. Browser automation was unavailable; interactive and responsive visual checks and the generated PDF download were not observed in a browser.

Profile banner update: `profile-banner.webp` is an optimised copy of the user-supplied `rsources/profile/Image ChatGPT 16 nov. 2026, 22_30_08.jpg` (2000 × 1125 output). Source visually inspected; no generated replacement or identity alteration was performed by this task. CSS covers the Profile frame without stretching and positions the crop at 50% / 60%. Representative desktop/mobile image crops were inspected as static previews, not as browser screenshots. Home keeps its previous photo. Exact source mapping is recorded in `media-manifest.json`.

## Public copy revision — 2026-11-18

Public pages now describe project focus, personal contribution, architecture, project materials and design choices. Review-process statements (repository inspection, unperformed reruns, benchmark verification and architecture-variant reconciliation) remain in this source document instead of appearing as recruitment copy. Public wording retains the actual scope: a GCP lab, file-based Cisco analysis, analyst-approved endpoint response and SOAR architecture/workflow documentation. Co-authorship, course certificate wording and the portfolio-generated CV label are preserved. No performance results or deployment assurances were added.

`Project.materials` and `Project.designNotes` replace the old public `validation` and `limitations` fields. Gallery captions identify the interface or workflow shown without repeating internal verification notes. The LangGraph variant remains documented here; the public 3S case study consistently presents the deterministic pipeline.

Editorial checks (2026-11-18): typecheck, lint, 32 existing tests and production build passed. HTTP checks returned 200 for Home, Profile, Community, Projects, CV and all four case studies. Rendered responses contain the revised project sections and exclude the replaced audit-style statements. No project infrastructure or performance validation was performed as part of this copy revision.
