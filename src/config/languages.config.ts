export interface Language {
  id: string;
  name: string;
  /** ISO 3166-1 alpha-2 code, picks the flag. */
  countryCode: string;
  /** Overall level, e.g. "Native (C2)". */
  proficiency?: string;
  spoken?: string;
  written?: string;
  listening?: string;
  /** Default true. */
  includeInCV?: boolean;
}

export const languages: Language[] = [
  {
    "id": "ar",
    "name": "Arabic",
    "countryCode": "tn",
    "proficiency": "Native"
  },
  {
    "id": "en",
    "name": "English",
    "countryCode": "gb",
    "proficiency": "TOEIC 865/990"
  },
  {
    "id": "fr",
    "name": "French",
    "countryCode": "fr",
    "proficiency": "B2"
  }
];
