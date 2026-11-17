export interface Education {
  id: string;
  institution: string;
  degree: string;
  field?: string;
  /** Free text, shown as written. */
  startDate: string;
  endDate?: string;
  description?: string;
  grade?: string;
  location?: string;
  /** Material Symbols icon name. */
  icon?: string;
  /** Public link to the thesis, also printed on the CV. */
  thesisUrl?: string;
  thesisLabel?: string;
  /** PDF in the `private/` folder, streamed through `/api/docs/[id]`. */
  thesisFileName?: string;
  /** Default true. */
  includeInCV?: boolean;
}

export const education: Education[] = [
  {
    "id": "supcom",
    "institution": "SUP’COM — Higher School of Communications of Tunis, University of Carthage",
    "degree": "Engineering Degree in ICT",
    "startDate": "2024",
    "endDate": "2027",
    "description": "Final year — graduation expected in 2027."
  },
  {
    "id": "ipei",
    "institution": "IPEI Monastir",
    "degree": "Preparatory Cycle for Engineering Studies",
    "startDate": "2022",
    "endDate": "2024"
  }
];
