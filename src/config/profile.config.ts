/** Public recruitment information. Never put credentials in this file. */
export const profileConfig = {
  portrait: {"src":"/assets/profile-banner.webp","width":2000,"height":1125},
  email: 'achref.mansouri@supcom.tn',
  summary: 'Final-year engineering student at SUP’COM, focused on network security, Linux infrastructure and SOC automation.',
  skillUsage: {
    'Network & Access Security': 'Foundations for understanding network segmentation, access restrictions and configuration auditing.',
    'Systems & Infrastructure': 'Linux services, containerised SOC components and virtualised or GCP laboratory environments.',
    'Security Operations': 'Detection, alert collection, enrichment and case-management workflows in the documented SOC projects.',
    'Development & Automation': 'Python services, REST APIs, dashboards and n8n workflow orchestration.',
    'Threat Intelligence & AI-Assisted Triage': 'Threat context and retrieval for structured LLM-assisted assessment, with analyst oversight.',
    'Security Foundations': 'Conceptual foundations for identity and access control; no claim of advanced implementation expertise.',
  } as Record<string, string>,
  community: [
  {
    "id": "gdg",
    "title": "Media Manager — GDG On Campus SUP’COM",
    "organisation": "GDG On Campus SUP’COM",
    "role": "Media Manager",
    "period": "",
    "description": "A student community role alongside my engineering studies at SUP’COM, with involvement in its media activities. This is an associative role within the campus group.",
    "image": "/assets/community-gdg.webp",
    "alt": "GDG On Campus SUP’COM — community gathering at Vectors in Orbit",
    "width": 1200,
    "height": 675,
    "photos": [
      {
        "src": "/assets/community-gdg.webp",
        "alt": "GDG On Campus SUP’COM — community gathering at Vectors in Orbit",
        "width": 1200,
        "height": 675
      },
      {
        "src": "/assets/community-gdg-team.webp",
        "alt": "GDG On Campus SUP’COM — group photograph from the supplied event resources",
        "width": 1400,
        "height": 787
      }
    ]
  },
  {
    "id": "indabax",
    "title": "Organising committee — IndabaX 2025",
    "organisation": "IndabaX",
    "role": "Organising committee participant",
    "period": "2025",
    "description": "Participation in the organisation of IndabaX 2025. The supplied photographs document the event and its organising community at SUP’COM.",
    "image": "/assets/community-indabax.webp",
    "alt": "IndabaX 2025 — organising community at SUP’COM",
    "width": 1200,
    "height": 800,
    "photos": [
      {
        "src": "/assets/community-indabax.webp",
        "alt": "IndabaX 2025 — organising community at SUP’COM",
        "width": 1200,
        "height": 800
      },
      {
        "src": "/assets/community-indabax-event.webp",
        "alt": "IndabaX 2025 — a moment from the event at SUP’COM",
        "width": 1400,
        "height": 935
      }
    ]
  }
],
};
