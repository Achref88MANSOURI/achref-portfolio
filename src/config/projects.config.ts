export type ProjectStatus = 'DEPLOYED' | 'BETA' | 'ONLINE' | 'AUDITING' | 'DEVELOPMENT' | 'COMPLETED' | 'DOCUMENTED';

export interface Project {
  /** Public representative image; no unrelated placeholders. */
  cover?: { src: string; caption: string; width: number; height: number };
  context?: string;
  problem?: string;
  contributions?: string[];
  workflow?: string[];
  validation?: string[];
  limitations?: string[];
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
    "description": "Connecting detection, enrichment and structured AI-assisted triage while keeping endpoint response under analyst control.",
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
    "problem": "Alerts arrive with different formats and incomplete context. Analysts need evidence, a reasoned priority and a traceable case before deciding how to respond.",
    "contributions": [
      "Deployed and connected the open-source detection and case-management components during my internship.",
      "Built n8n workflows to normalise alerts and orchestrate observable enrichment with Cortex and threat intelligence integrations.",
      "Developed RAG-assisted triage using ATT&CK context and a structured LLM verdict and priority.",
      "Integrated Cortex and Velociraptor response capabilities, with analyst validation before an endpoint action."
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
    "validation": [
      "Repository review confirms staged Python orchestration and TheHive integration in the deterministic implementation.",
      "Local n8n and TheHive screenshots illustrate workflow configuration and case documentation; explanatory diagrams describe the intended flow."
    ],
    "limitations": [
      "No end-to-end deployment was rerun for this portfolio. Screenshots are evidence of interfaces, not a performance benchmark.",
      "Automatic case handling in TheHive is separate from authorisation to act on endpoints. The LLM does not independently authorise response.",
      "SOC-3s contains a separate LangGraph perception / investigation / analysis variant. It is related work, not an additional project or a component silently merged into this architecture."
    ],
    "gallery": [
      {
        "src": "/assets/soc-pipeline.webp",
        "caption": "Explanatory diagram — detection, enrichment, triage and analyst-approved response. The case-closure feedback arrow is illustrative, not independently verified.",
        "width": 1672,
        "height": 941
      },
      {
        "src": "/assets/soc-triage.webp",
        "caption": "Explanatory diagram — evidence enrichment and ATT&CK retrieval for structured triage.",
        "width": 1672,
        "height": 941
      },
      {
        "src": "/assets/soc-response.webp",
        "caption": "Explanatory diagram — explicit human approval before Cortex / Velociraptor endpoint response.",
        "width": 1672,
        "height": 941
      },
      {
        "src": "/assets/soc-n8n.webp",
        "caption": "n8n screenshot — orchestration overview from the internship resources.",
        "width": 1780,
        "height": 700
      },
      {
        "src": "/assets/soc-case.webp",
        "caption": "TheHive screenshot — recorded analysis in a case. No throughput or accuracy is inferred.",
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
      "caption": "Explanatory SOC pipeline — analyst approval before endpoint response.",
      "width": 1672,
      "height": 941
    }
  },
  {
    "id": "smart-ids",
    "name": "Smart-IDS — Cloud-Based Intrusion Detection",
    "type": "CLOUD_LAB",
    "category": "lab",
    "description": "A GCP network detection lab connecting Suricata alerts, Elastic visualisation, hybrid ML enrichment and an analyst dashboard.",
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
    "problem": "Network detections need to be collected, enriched and presented in a form that supports investigation across a cloud lab.",
    "contributions": [
      "Worked on the GCP detection environment and Suricata / Filebeat alert collection.",
      "Connected Elastic storage and Kibana visualisation to hybrid ML enrichment.",
      "Developed API and dashboard functionality with FastAPI and React to inspect alerts and support LLM-assisted reporting."
    ],
    "workflow": [
      "GCP laboratory traffic → Suricata sensor",
      "Filebeat → Elasticsearch",
      "ML enrichment and threat intelligence context",
      "Kibana and FastAPI → React analyst dashboard",
      "LLM-assisted analysis and reporting"
    ],
    "validation": [
      "Public source includes a FastAPI backend, enrichment scripts and a React frontend.",
      "Local images show a dashboard, a lab architecture and Kibana visualisations."
    ],
    "limitations": [
      "Laboratory project; no current public demonstration is advertised.",
      "Code presence does not establish complete reproducibility. Infrastructure, datasets and external services were not revalidated here.",
      "AUC, recall, false-positive rates, alert volumes and latency claims are intentionally omitted. Figures visible in historical screenshots describe their own snapshots only."
    ],
    "gallery": [
      {
        "src": "/assets/ids-dashboard.webp",
        "caption": "Screenshot — Smart-IDS React dashboard. Visible counters are a historical lab snapshot, not validated performance.",
        "width": 1280,
        "height": 616
      },
      {
        "src": "/assets/ids-architecture.webp",
        "caption": "Historical architecture diagram — GCP sensor, Elastic and enrichment. Embedded model scores and volumes have not been independently validated.",
        "width": 982,
        "height": 808
      },
      {
        "src": "/assets/ids-kibana.webp",
        "caption": "Screenshot — Kibana alert exploration in the cloud laboratory.",
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
      "caption": "Historical cloud lab dashboard; visible counters are not benchmark results.",
      "width": 1280,
      "height": 616
    }
  },
  {
    "id": "cisco-audit",
    "name": "Cisco IOS/IOS-XE Security Audit Platform",
    "type": "ACADEMIC_PROJECT",
    "category": "academic",
    "description": "Static configuration analysis with contextual parsing, a validated router contract and traceable CIS-inspired findings.",
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
    "problem": "Cisco configurations vary in structure and context. A useful audit needs normalised facts, evidence and explicit uncertainty rather than unsupported pass/fail conclusions.",
    "contributions": [
      "Co-developed the academic platform with Mohamed Amine Ouni; this portfolio does not claim exclusive authorship.",
      "Contributed to the configuration parsing, normalisation and CIS-inspired audit workflow.",
      "Worked on making findings, evidence, proposed remediations and exports available through a web interface."
    ],
    "workflow": [
      "Import Cisco IOS / IOS-XE configuration",
      "Context-aware TTP parsing",
      "Normalisation → Pydantic RouterContractV1 validation",
      "CIS Cisco IOS 15 Benchmark v4.1.1 inspired checks",
      "PASS / FAIL / NEEDS_REVIEW / NOT_APPLICABLE with evidence",
      "Web results, normalised JSON and report exports"
    ],
    "validation": [
      "README and representative RouterContractV1 and web analysis source inspected.",
      "The implementation distinguishes missing or ambiguous facts and provides provenance for findings."
    ],
    "limitations": [
      "Static analysis of a supplied configuration only; no SSH session or automatic router modification.",
      "Findings are not a global compliance certification or an assurance of operational security.",
      "Juniper, Fortinet, proxy and SD-WAN support is not claimed.",
      "No local screenshot was provided for this project. The workflow above is a source-based explanation."
    ],
    "gallery": [],
    "status": "DOCUMENTED",
    "statusColor": "blue",
    "icon": "terminal",
    "visibility": "public",
    "projectType": "personal",
    "link": "https://github.com/Achref88MANSOURI/Projet_Tutore_moteur_d-audit_cisco",
    "repository": "https://github.com/Achref88MANSOURI/Projet_Tutore_moteur_d-audit_cisco"
  },
  {
    "id": "llm-soar",
    "name": "LLM-Enhanced SOAR Pipeline",
    "type": "DOCUMENTED_LAB",
    "category": "lab",
    "description": "A Wazuh and Shuffle workflow for observable enrichment, local LLM-assisted qualification and documented TheHive cases.",
    "tags": [
      "Wazuh",
      "Shuffle",
      "Cortex",
      "Ollama",
      "TheHive",
      "Local LLM"
    ],
    "context": "Documented SOC automation project",
    "problem": "Manual IP and hash enrichment fragments investigation. The workflow brings enrichment and assisted reporting into the same case-management path.",
    "contributions": [
      "Designed and documented the Wazuh → Shuffle → Cortex / local LLM → TheHive integration.",
      "Orchestrated separate IP and hash enrichment branches.",
      "Integrated local LLM-assisted qualification and incident report generation while retaining analyst decision-making."
    ],
    "workflow": [
      "Wazuh alert → Shuffle webhook",
      "IP / hash observables → Cortex analyzers",
      "Enriched evidence → local LLM via Ollama",
      "Assisted qualification → TheHive case and observables",
      "Report recorded in the case → analyst review"
    ],
    "validation": [
      "Public repository inspected: README and three screenshots; the repository is primarily documentary.",
      "Local Shuffle, Wazuh and TheHive captures illustrate the workflow and analyst interfaces."
    ],
    "limitations": [
      "No complete application or executable test suite was found in the public repository.",
      "Screenshots do not validate performance or reproduce the whole environment.",
      "Local LLM inference does not imply that enrichment services make no external requests.",
      "This Wazuh / Shuffle project is separate from the Security Onion / n8n internship architecture."
    ],
    "gallery": [
      {
        "src": "/assets/soar-workflow.webp",
        "caption": "Screenshot — Shuffle workflow with separate IP and hash enrichment branches.",
        "width": 1254,
        "height": 712
      },
      {
        "src": "/assets/soar-case.webp",
        "caption": "Screenshot — TheHive case detail for the Wazuh / Shuffle project.",
        "width": 1914,
        "height": 850
      },
      {
        "src": "/assets/soar-wazuh.webp",
        "caption": "Screenshot — Wazuh dashboard from the SOAR laboratory.",
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
      "caption": "Shuffle workflow — IP and hash enrichment for the Wazuh-based lab.",
      "width": 1254,
      "height": 712
    }
  }
];
