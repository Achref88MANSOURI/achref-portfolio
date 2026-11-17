export interface Experience {
  id: string;
  company: string;
  role: string;
  /** Free text, shown as written (e.g. "Jan 2023"). */
  startDate: string;
  /** Omit, or use "Present", for a current role. */
  endDate?: string;
  /** One line under the role: what the job was. */
  intro?: string;
  /** One entry per bullet. */
  bullets?: string[];
  location?: string;
  type?: 'full-time' | 'part-time' | 'contract' | 'freelance' | 'internship';
  /** Second label next to `type` (e.g. "Employment"). */
  type2?: string;
  /** Material Symbols icon name. */
  icon?: string;
  /** Square logo path under /public (e.g. "/assets/logos/acme.png"), shown next to the company name (24px). */
  logo?: string;
  skills?: string[];
  /** Shorter stack for the CV (about 10 items). Falls back to `skills`. */
  cvSkills?: string[];
  /** One big number for the designed CV's header strip (e.g. { value: 'Days to hours', label: 'Build time' }). */
  cvHighlight?: { value: string; label: string };
}

export const experience: Experience[] = [
  {
    "id": "3s",
    "company": "3S — Standard Sharing Software",
    "role": "Cybersecurity Engineering Intern",
    "startDate": "Jul 2026",
    "endDate": "Aug 2026",
    "type": "internship",
    "intro": "Open-source SOC deployment and analyst-assisted incident workflows.",
    "bullets": [
      "Deployed and integrated Security Onion, Suricata, Sigma and YARA detection components.",
      "Orchestrated alert workflows with n8n and integrated MISP, OpenCTI and TheHive.",
      "Developed LLM/RAG-assisted triage and prioritisation with MITRE ATT&CK context.",
      "Integrated Cortex responders and Velociraptor artifacts for analyst-approved endpoint response."
    ],
    "skills": [
      "Security Onion",
      "n8n",
      "TheHive",
      "Cortex",
      "Qdrant",
      "Velociraptor"
    ]
  },
  {
    "id": "tt",
    "company": "Tunisie Telecom",
    "role": "Telecommunications Intern",
    "startDate": "Jul 2025",
    "endDate": "Aug 2025",
    "type": "internship",
    "intro": "Observation placement in the radio network unit.",
    "bullets": [
      "Discovered the operational environment of a telecommunications operator and the work of its radio network unit."
    ]
  }
];
