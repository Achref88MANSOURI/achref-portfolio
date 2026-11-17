export interface CVStyle {
  /** Unique. A cover letter with the same id is paired with this style. */
  id: string;
  name: string;
  description: string;
  /** Groups styles by role; see `getCVStylesByDomain`. */
  domain: string;
  /** Material Symbols icon name. */
  icon: string;
  /** Replaces `CVConfig.summary` for this style. */
  summary?: string;
  /** Skill categories to show. Omit to show all. */
  skillCategories?: string[];
  /** Skill names to leave out of this style. */
  excludeSkills?: string[];
  /** Designed CV: skills pulled out into a "Core stack" row at the top of the sidebar, in this order. */
  coreSkills?: string[];
  /** Project ids to leave out of this style. */
  excludeProjects?: string[];
  /** Per-project CV text for this style, by project id. Replaces `cvDescription`. */
  projectDescriptions?: Record<string, string>;
  /** Per-project link for this style, by project id. Replaces the project's link and repository on the CV. */
  projectUrls?: Record<string, string>;
  /** Default true. */
  showProjects?: boolean;
  /** Default true. */
  showHobbies?: boolean;
}

export interface CVConfig {
  /** Round photo for the designed CV (not ATS). "/api/cv-photo" serves private/cv-photo.jpg. Omit for none. */
  photo?: string;
  /** Summary used when a style has none of its own. */
  summary?: string;
  styles: CVStyle[];
}

export const cvConfig: CVConfig = {
  "summary": "I am a final-year ICT engineering student at SUP’COM, focused on network security, Linux infrastructure and security automation. I have practical experience deploying monitoring services, building cloud-hosted detection labs and connecting incident response workflows.",
  "styles": [
    {
      "id": "cybersecurity",
      "name": "Cybersecurity Internship",
      "domain": "Cybersecurity",
      "description": "Portfolio-generated CV using verified profile information.",
      "icon": "description",
      "showHobbies": false
    }
  ]
};
