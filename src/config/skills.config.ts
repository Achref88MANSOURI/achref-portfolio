/**
 * beginner (used it), working (comfortable day to day), proficient (go-to tool), advanced (could teach it).
 * Rate honestly: proficient and advanced are there to grow into.
 */
export type SkillLevel = 'beginner' | 'working' | 'proficient' | 'advanced';

export interface Skill {
  name: string;
  level: SkillLevel;
  /** Groups the skill on the About page and the CV. */
  category: string;
}

const skillLevelRanges: Record<SkillLevel, { min: number; max: number; mid: number }> = {
  beginner: { min: 10, max: 30, mid: 20 },
  working: { min: 30, max: 50, mid: 40 },
  proficient: { min: 50, max: 70, mid: 60 },
  advanced: { min: 70, max: 85, mid: 77 },
};

export const getScoreFromLevel = (level: SkillLevel): number => {
  return skillLevelRanges[level].mid;
};

export const skills: Skill[] = [
  {
    "name": "TCP/IP",
    "category": "Network & Access Security",
    "level": "beginner"
  },
  {
    "name": "Routing and switching",
    "category": "Network & Access Security",
    "level": "beginner"
  },
  {
    "name": "VLANs",
    "category": "Network & Access Security",
    "level": "beginner"
  },
  {
    "name": "ACLs",
    "category": "Network & Access Security",
    "level": "beginner"
  },
  {
    "name": "SSH",
    "category": "Network & Access Security",
    "level": "beginner"
  },
  {
    "name": "VPN fundamentals",
    "category": "Network & Access Security",
    "level": "beginner"
  },
  {
    "name": "Linux",
    "category": "Systems & Infrastructure",
    "level": "working"
  },
  {
    "name": "Docker",
    "category": "Systems & Infrastructure",
    "level": "working"
  },
  {
    "name": "Virtualized environments",
    "category": "Systems & Infrastructure",
    "level": "working"
  },
  {
    "name": "Google Cloud Platform",
    "category": "Systems & Infrastructure",
    "level": "working"
  },
  {
    "name": "Security Onion",
    "category": "Security Operations",
    "level": "working"
  },
  {
    "name": "Wazuh",
    "category": "Security Operations",
    "level": "working"
  },
  {
    "name": "Suricata",
    "category": "Security Operations",
    "level": "working"
  },
  {
    "name": "Elastic Stack",
    "category": "Security Operations",
    "level": "working"
  },
  {
    "name": "Kibana",
    "category": "Security Operations",
    "level": "working"
  },
  {
    "name": "Syslog",
    "category": "Security Operations",
    "level": "working"
  },
  {
    "name": "TheHive",
    "category": "Security Operations",
    "level": "working"
  },
  {
    "name": "Cortex",
    "category": "Security Operations",
    "level": "working"
  },
  {
    "name": "Python",
    "category": "Development & Automation",
    "level": "working"
  },
  {
    "name": "JavaScript/TypeScript",
    "category": "Development & Automation",
    "level": "working"
  },
  {
    "name": "FastAPI",
    "category": "Development & Automation",
    "level": "working"
  },
  {
    "name": "React",
    "category": "Development & Automation",
    "level": "working"
  },
  {
    "name": "REST APIs",
    "category": "Development & Automation",
    "level": "working"
  },
  {
    "name": "n8n",
    "category": "Development & Automation",
    "level": "working"
  },
  {
    "name": "Git/GitHub",
    "category": "Development & Automation",
    "level": "working"
  },
  {
    "name": "MISP",
    "category": "Threat Intelligence & AI-Assisted Triage",
    "level": "working"
  },
  {
    "name": "OpenCTI",
    "category": "Threat Intelligence & AI-Assisted Triage",
    "level": "working"
  },
  {
    "name": "Qdrant",
    "category": "Threat Intelligence & AI-Assisted Triage",
    "level": "working"
  },
  {
    "name": "RAG",
    "category": "Threat Intelligence & AI-Assisted Triage",
    "level": "working"
  },
  {
    "name": "LLM integration",
    "category": "Threat Intelligence & AI-Assisted Triage",
    "level": "working"
  },
  {
    "name": "AAA",
    "category": "Security Foundations",
    "level": "beginner"
  },
  {
    "name": "RBAC",
    "category": "Security Foundations",
    "level": "beginner"
  },
  {
    "name": "MFA",
    "category": "Security Foundations",
    "level": "beginner"
  },
  {
    "name": "SSO",
    "category": "Security Foundations",
    "level": "beginner"
  },
  {
    "name": "Zero Trust principles",
    "category": "Security Foundations",
    "level": "beginner"
  }
];


/** Shown first among skills with the same level (the radar and the top-skills list). */
const featuredSkills = ['Linux', 'Bash', 'Python', 'Docker', 'Zabbix', 'PostgreSQL'];
const featuredRank = (skill: Skill) => {
  const i = featuredSkills.indexOf(skill.name);
  return i === -1 ? featuredSkills.length : i;
};

export const getTopSkills = (count: number = 6): Skill[] => {
  return [...skills]
    .sort((a, b) => getScoreFromLevel(b.level) - getScoreFromLevel(a.level) || featuredRank(a) - featuredRank(b))
    .slice(0, count);
};


export const getCategories = (): string[] => {
  const categories = new Set(skills.map(skill => skill.category));
  return Array.from(categories).sort();
};


export const getSkillsByCategory = (category: string): Skill[] => {
  return skills.filter(skill => skill.category === category);
};


export const getSkillsGroupedByCategory = (): Record<string, Skill[]> => {
  return skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);
};
