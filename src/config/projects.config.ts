export type ProjectStatus = 'DEPLOYED' | 'BETA' | 'ONLINE' | 'AUDITING' | 'DEVELOPMENT' | 'COMPLETED' | 'DOCUMENTED';

export interface Project {
  /** Public representative image; no unrelated placeholders. */
  cover?: { src: string; caption: string; width: number; height: number };
  context?: string;
  problem?: string;
  contributions?: string[];
  workflow?: string[];
  materials?: string[];
  designNotes?: string[];
  gallery?: { src: string; caption: string; width: number; height: number }[];
  /** Unique. Used in the page address: /projects/<id>. */
  id: string;
  name: string;
  description: string;
  /** Shorter text for the CV. Falls back to `description`. */
  cvDescription?: string;
  status: ProjectStatus | ProjectStatus[];
  /** One colour per status when `status` is a list. */
  statusColor: 'green' | 'yellow' | 'blue' | 'orange' | 'red' | Array<'green' | 'yellow' | 'blue' | 'orange' | 'red'>;
  /** Label shown on the card, e.g. `MASTER_THESIS`. */
  type: string;
  /** Stack chips on the card. */
  tags: string[];
  /** Material Symbols icon name. */
  icon: string;
  /** `private` projects are listed but get no page and are left off the CV. */
  visibility: 'public' | 'private';
  category: 'internship' | 'lab' | 'production' | 'thesis' | 'personal' | 'open-source' | 'commercial' | 'academic';
  /** `contribution` projects are listed under "Contributions" with merged PR counts. */
  projectType: 'personal' | 'contribution';
  /** Live site. A github.com link makes the button say VIEW_SOURCE. */
  link?: string;
  /** Source repository. Gets its own button when it differs from `link`. */
  repository?: string;
  /** Default true. */
  includeInCV?: boolean;
}

export const projects: Project[] = [
  {
    "id": "soc-automation",
    "name": "AI-Assisted SOC Automation — 3S Internship",
    "type": "INTERNSHIP",
    "category": "internship",
    "description": "An open-source SOC workflow that brings alert enrichment, AI-assisted triage and analyst-approved response into a traceable investigation process.",
    "tags": [
      "Security Onion",
      "Suricata",
      "Sigma",
      "YARA / Strelka",
      "n8n",
      "TheHive",
      "Cortex",
      "MISP",
      "OpenCTI",
      "Qdrant",
      "Velociraptor"
    ],
    "context": "Cybersecurity engineering internship · 3S · Jul–Aug 2026",
    "problem": "Security alerts need context before an analyst can decide what to investigate. This project connects detection, observable enrichment and case management to present the evidence and priorities in one workflow.",
    "contributions": [
      "Deployed and integrated the open-source detection and case-management components during my 3S internship.",
      "Built n8n workflows to normalise alerts and coordinate observable enrichment through Cortex and threat intelligence integrations.",
      "Developed RAG-assisted triage with MITRE ATT&CK context, structured verdicts and priority recommendations.",
      "Connected Cortex responders and Velociraptor artifacts to support endpoint response after analyst approval."
    ],
    "workflow": [
      "Security Onion: network and file detections",
      "n8n: alert normalisation and workflow orchestration",
      "TheHive alert + Cortex observable enrichment",
      "Threat intelligence and Qdrant retrieval of ATT&CK context",
      "Deterministic triage pipeline with a structured LLM assessment",
      "TheHive case handling and recorded analysis",
      "Analyst approval → Cortex responder → Velociraptor endpoint action"
    ],
    "gallery": [
      {
        "src": "/assets/soc-pipeline.webp",
        "caption": "Architecture overview — detection, enrichment, AI-assisted triage and analyst-approved response.",
        "width": 1672,
        "height": 941
      },
      {
        "src": "/assets/soc-triage.webp",
        "caption": "Evidence enrichment and ATT&CK retrieval for structured alert assessment.",
        "width": 1672,
        "height": 941
      },
      {
        "src": "/assets/soc-response.webp",
        "caption": "Response workflow — analyst approval followed by Cortex and Velociraptor execution.",
        "width": 1672,
        "height": 941
      },
      {
        "src": "/assets/soc-n8n.webp",
        "caption": "n8n workflow — alert orchestration and observable enrichment.",
        "width": 1780,
        "height": 700
      },
      {
        "src": "/assets/soc-case.webp",
        "caption": "TheHive case — triage summary, evidence and investigation context.",
        "width": 1110,
        "height": 810
      }
    ],
    "status": "DOCUMENTED",
    "statusColor": "blue",
    "icon": "terminal",
    "visibility": "public",
    "projectType": "personal",
    "link": "https://github.com/Achref88MANSOURI/SOC-Monitoring-Automation-",
    "repository": "https://github.com/Achref88MANSOURI/SOC-Monitoring-Automation-",
    "cover": {
      "src": "/assets/soc-pipeline.webp",
      "caption": "SOC architecture — from detection to analyst-approved response.",
      "width": 1672,
      "height": 941
    },
    "materials": [
      "Python triage service with staged orchestration, structured data models and TheHive integration.",
      "Architecture diagrams covering detection, evidence enrichment and the response workflow.",
      "n8n workflow and TheHive case screenshots showing how alerts and analysis are organised."
    ],
    "designNotes": [
      "A deterministic sequence gathers evidence and retrieves ATT&CK context before a single structured LLM assessment.",
      "TheHive records the triage outcome and case context for analyst review.",
      "Endpoint response follows an explicit analyst approval step, with Cortex and Velociraptor handling execution."
    ]
  },
  {
    "id": "smart-ids",
    "name": "Smart-IDS — Cloud-Based Intrusion Detection",
    "type": "CLOUD_LAB",
    "category": "lab",
    "description": "A cloud-based intrusion detection lab combining Suricata, Elastic and ML enrichment with a FastAPI service and React dashboard.",
    "tags": [
      "GCP",
      "Suricata",
      "Filebeat",
      "Elasticsearch",
      "Kibana",
      "Python",
      "FastAPI",
      "React",
      "ML",
      "LLM reporting"
    ],
    "context": "Cloud-based intrusion detection laboratory",
    "problem": "Investigating network activity requires a clear path from sensor alerts to usable context. Smart-IDS brings collection, enrichment and visualisation together in a GCP laboratory.",
    "contributions": [
      "Worked on the GCP lab infrastructure and Suricata / Filebeat alert collection.",
      "Connected Elasticsearch and Kibana with hybrid ML enrichment to support alert analysis.",
      "Developed FastAPI and React features for inspecting alerts and producing LLM-assisted reports."
    ],
    "workflow": [
      "GCP laboratory traffic → Suricata sensor",
      "Filebeat → Elasticsearch",
      "ML enrichment and threat intelligence context",
      "Kibana and FastAPI → React analyst dashboard",
      "LLM-assisted analysis and reporting"
    ],
    "gallery": [
      {
        "src": "/assets/ids-dashboard.webp",
        "caption": "Smart-IDS dashboard — alert overview and MITRE ATT&CK context from a lab session.",
        "width": 1280,
        "height": 616
      },
      {
        "src": "/assets/ids-architecture.webp",
        "caption": "Cloud lab architecture — Suricata, Elastic, enrichment and analyst interfaces.",
        "width": 982,
        "height": 808
      },
      {
        "src": "/assets/ids-kibana.webp",
        "caption": "Kibana — exploring network alerts in the GCP laboratory.",
        "width": 1280,
        "height": 616
      }
    ],
    "status": "DOCUMENTED",
    "statusColor": "blue",
    "icon": "terminal",
    "visibility": "public",
    "projectType": "personal",
    "link": "https://github.com/Achref88MANSOURI/smart-ids",
    "repository": "https://github.com/Achref88MANSOURI/smart-ids",
    "cover": {
      "src": "/assets/ids-dashboard.webp",
      "caption": "Smart-IDS dashboard — network alerts and investigation context.",
      "width": 1280,
      "height": 616
    },
    "materials": [
      "FastAPI backend, React frontend and Python enrichment scripts in the public repository.",
      "Architecture diagram showing the GCP sensor, Elastic services and enrichment components.",
      "React dashboard and Kibana screenshots illustrating alert exploration."
    ],
    "designNotes": [
      "The GCP laboratory brings network sensing, alert storage and analysis into a single project environment.",
      "Suricata detections and ML enrichment provide complementary context for investigation.",
      "FastAPI connects the stored alerts to the dashboard and assisted reporting features."
    ]
  },
  {
    "id": "cisco-audit",
    "name": "Cisco IOS/IOS-XE Security Audit Platform",
    "type": "ACADEMIC_PROJECT",
    "category": "academic",
    "description": "A Cisco configuration audit platform that turns running-config files into structured facts, traceable security findings and actionable recommendations.",
    "tags": [
      "Python",
      "TTP",
      "Pydantic",
      "JSON Schema",
      "Cisco IOS / IOS-XE",
      "CIS",
      "HTML / CSS / JavaScript"
    ],
    "context": "SUP’COM academic project · with Mohamed Amine Ouni",
    "problem": "Cisco configurations are difficult to review consistently when commands depend on their surrounding context. This platform organises configuration facts and applies CIS-inspired checks to make findings easier to inspect and explain.",
    "contributions": [
      "Co-developed the SUP’COM academic platform with Mohamed Amine Ouni.",
      "Contributed to contextual parsing, configuration normalisation and the CIS-inspired audit workflow.",
      "Worked on the web interface for reviewing findings, inspecting evidence and exporting reports."
    ],
    "workflow": [
      "Import Cisco IOS / IOS-XE configuration",
      "Context-aware TTP parsing",
      "Normalisation → Pydantic RouterContractV1 validation",
      "CIS Cisco IOS 15 Benchmark v4.1.1 inspired checks",
      "PASS / FAIL / NEEDS_REVIEW / NOT_APPLICABLE with evidence",
      "Web results, normalised JSON and report exports"
    ],
    "gallery": [],
    "status": "DOCUMENTED",
    "statusColor": "blue",
    "icon": "terminal",
    "visibility": "public",
    "projectType": "personal",
    "link": "https://github.com/Achref88MANSOURI/Projet_Tutore_moteur_d-audit_cisco",
    "repository": "https://github.com/Achref88MANSOURI/Projet_Tutore_moteur_d-audit_cisco",
    "materials": [
      "Python implementation with TTP parsing and the Pydantic RouterContractV1 data model.",
      "CIS-inspired checks with finding explanations and configuration provenance.",
      "Web interface for configuration import, normalised JSON review and report exports."
    ],
    "designNotes": [
      "The analysis works from an uploaded Cisco IOS or IOS-XE configuration file.",
      "Missing or ambiguous configuration facts are flagged for review so each finding stays linked to its evidence.",
      "Remediation recommendations support manual review and change planning."
    ]
  },
  {
    "id": "llm-soar",
    "name": "LLM-Enhanced SOAR Pipeline",
    "type": "DOCUMENTED_LAB",
    "category": "lab",
    "description": "A Wazuh and Shuffle integration project connecting observable enrichment, local LLM-assisted qualification and incident reporting in TheHive.",
    "tags": [
      "Wazuh",
      "Shuffle",
      "Cortex",
      "Ollama",
      "TheHive",
      "Local LLM"
    ],
    "context": "Wazuh and Shuffle integration lab",
    "problem": "Manual IP and hash enrichment interrupts the investigation process. This workflow brings enrichment, assisted qualification and reporting into a shared case-management path.",
    "contributions": [
      "Designed and documented the Wazuh, Shuffle, Cortex, Ollama and TheHive integration.",
      "Organised separate enrichment branches for IP addresses and file hashes.",
      "Integrated local LLM-assisted qualification and report generation into an analyst-led investigation workflow."
    ],
    "workflow": [
      "Wazuh alert → Shuffle webhook",
      "IP / hash observables → Cortex analyzers",
      "Enriched evidence → local LLM via Ollama",
      "Assisted qualification → TheHive case and observables",
      "Report recorded in the case → analyst review"
    ],
    "gallery": [
      {
        "src": "/assets/soar-workflow.webp",
        "caption": "Shuffle workflow — coordinated enrichment for IP addresses and file hashes.",
        "width": 1254,
        "height": 712
      },
      {
        "src": "/assets/soar-case.webp",
        "caption": "TheHive case — observable enrichment and incident report.",
        "width": 1914,
        "height": 850
      },
      {
        "src": "/assets/soar-wazuh.webp",
        "caption": "Wazuh dashboard — alert monitoring within the SOAR lab.",
        "width": 1914,
        "height": 911
      }
    ],
    "status": "DOCUMENTED",
    "statusColor": "blue",
    "icon": "terminal",
    "visibility": "public",
    "projectType": "personal",
    "link": "https://github.com/Achref88MANSOURI/LLM-Enhanced-SOAR-Pipeline-Intelligent-SOC-Automation",
    "repository": "https://github.com/Achref88MANSOURI/LLM-Enhanced-SOAR-Pipeline-Intelligent-SOC-Automation",
    "cover": {
      "src": "/assets/soar-workflow.webp",
      "caption": "Shuffle workflow — observable enrichment and case creation.",
      "width": 1254,
      "height": 712
    },
    "materials": [
      "Architecture and workflow documentation in the public repository.",
      "Shuffle workflow screenshots showing IP and hash enrichment branches.",
      "TheHive and Wazuh captures illustrating case documentation and alert monitoring."
    ],
    "designNotes": [
      "Shuffle coordinates the enrichment steps and passes the collected context to local inference through Ollama.",
      "Cortex analyzers provide external threat intelligence for observables.",
      "TheHive keeps the case, observables and generated report together for analyst review."
    ]
  }
];
