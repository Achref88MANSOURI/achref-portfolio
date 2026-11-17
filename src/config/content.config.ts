
export interface ContentConfig {
  
  home: {
    hero: {
      title: string;
      subtitle: string;
      ctaPrimary: {
        text: string;
        link: string;
      };
      ctaSecondary: {
        text: string;
        link?: string;
      };
    };
    stats: {
      uptime: {
        label: string;
        icon: string;
      };
      sessionId: {
        label: string;
        icon: string;
      };
      viewport: {
        label: string;
        icon: string;
      };
      responseTime: {
        label: string;
        icon: string;
      };
    };
  };
  
  
  about: {
    bio: {
      title: string;
      paragraphs: string[];
    };
    buildNote?: string[];
  };
  
  
  projects: {
    title: string;
    subtitle: string;
  };

  blog: {
    title: string;
    subtitle: string;
  };
}

export const contentConfig: ContentConfig = {
  home: {
    hero: {
      title: 'Achref Mansouri',
      subtitle: 'Cybersecurity · Network Infrastructure · SOC Automation',
      ctaPrimary: {
        text: '> VIEW_PROJECTS',
        link: '/projects',
      },
      ctaSecondary: {
        text: '> VIEW_CV',
        link: '/cv',
      },
    },
    stats: {
      uptime: {
        label: 'UPTIME',
        icon: 'timer',
      },
      sessionId: {
        label: 'SESSION_ID',
        icon: 'fingerprint',
      },
      viewport: {
        label: 'VIEWPORT',
        icon: 'desktop_windows',
      },
      responseTime: {
        label: 'RESPONSE_TIME',
        icon: 'speed',
      },
    },
  },
  about: {
    bio: {
      title: 'achref@portfolio:~$ cat /var/log/user_bio.txt',
      paragraphs: [
        'I am a final-year ICT engineering student at SUP’COM, focused on network security, Linux infrastructure and security automation.',
        'My practical work includes deploying monitoring services, building cloud-hosted detection labs and connecting incident response workflows. I am seeking a final-year cybersecurity internship and enjoy applied projects that connect infrastructure, detection and automation.',
      ],
    },
    buildNote: [
      'Adapted from Cyberfolio by iamxorum (MIT). Project content and selected evidence describe my engineering work.',
    ],
  },
  projects: {
    title: '>> PROJECT_CASE_STUDIES',
    subtitle: 'Four projects connecting infrastructure, detection, auditing and analyst-controlled automation.',
  },
  blog: {
    title: '>> BLOG',
    subtitle: 'Notes, write-ups, analyses and things worth remembering.',
  },
};
