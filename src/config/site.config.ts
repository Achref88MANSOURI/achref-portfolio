export interface SocialLink {
  name: string;
  url: string;
  /** Material Symbols icon name. */
  icon?: string;
  /** Also listed in the footer. */
  showInFooter?: boolean;
}

/** Contact email and phone are not here: they live in CONTACT_EMAIL / CONTACT_PHONE in `.env`. */
export interface SiteConfig {
  /** Main domain, no protocol. Used for canonical URLs, the sitemap and origin checks. */
  domain: string;
  /** Other domains that redirect to the main one. Turnstile tokens issued on them are accepted too. */
  alternateDomains?: string[];
  /** Handle shown in the header and the terminal prompt. */
  username: string;
  fullName: string;
  /** Site name: the home page title, social cards and the web app manifest. */
  title: string;
  /** Default meta description. */
  description: string;
  /** Path under `public/`, e.g. /assets/favicon.png. */
  favicon?: string;
  /** Optional app icons, paths under `public/`: iOS home screen (180x180) and the web app manifest (192, 512). */
  appIcons?: {
    apple?: string;
    pwa192?: string;
    pwa512?: string;
  };
  /** Shown as a live age on /about. `month` is 1-12. */
  birthDate?: {
    day: number;
    month: number;
    year: number;
  };
  location: string;
  role: string;
  /** Availability line in the hero and on the profile card. */
  status: string;
  /** Path under `public/`, e.g. /assets/profile.jpg. */
  profileImage: string;
  social: {
    professional?: SocialLink[];
    gaming?: SocialLink[];
    other?: SocialLink[];
  };
  /** Version label in the footer. */
  systemVersion: string;
  /** Hosts allowed by the Content-Security-Policy and next/image. Add a host here when you embed something new. */
  security: {
    scripts: string[];
    styles: string[];
    images: string[];
    fonts: string[];
    frames: string[];
    connects: string[];
  };
}

export const siteConfig: SiteConfig = {
  "domain": new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').host,
  "username": "Achref88MANSOURI",
  "fullName": "Achref Mansouri",
  "title": "Achref Mansouri | Cybersecurity Portfolio",
  "description": "Final-year ICT engineering student at SUP’COM seeking a cybersecurity internship. Network infrastructure, detection and SOC automation.",
  "location": "Tunis, Tunisia",
  "role": "Final-Year ICT Engineering Student",
  "status": "Seeking a final-year cybersecurity internship",
  "profileImage": "/assets/profile.jpg",
  "social": {
    "professional": [
      {
        "name": "GitHub",
        "url": "https://github.com/Achref88MANSOURI",
        "icon": "code",
        "showInFooter": true
      },
      {
        "name": "LinkedIn",
        "url": "https://www.linkedin.com/in/achref-mansouri-84a012244",
        "icon": "work",
        "showInFooter": true
      }
    ],
    "gaming": [],
    "other": []
  },
  "systemVersion": "v1.7.4",
  "favicon": "/assets/favicon.png",
  "appIcons": {
    "apple": "/assets/icons/apple-touch-icon.png",
    "pwa192": "/assets/icons/icon-192.png",
    "pwa512": "/assets/icons/icon-512.png"
  },
  "security": {
    "scripts": [],
    "styles": [],
    "images": [],
    "fonts": [],
    "frames": [],
    "connects": []
  }
};
