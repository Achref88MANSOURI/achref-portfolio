export interface Certification {
  id: string;
  name: string;
  /** Shorter name for the CV. An empty string leaves the certificate out of a merged line. */
  cvName?: string;
  issuer: string;
  /** Free text, shown as written. */
  issueDate: string;
  /** Omit for a certificate that does not expire. */
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  description?: string;
  /** Material Symbols icon name. */
  icon?: string;
}

export const certifications: Certification[] = [
  {
    "id": "ccna",
    "name": "CCNA 1, 2 and 3 course certificates",
    "issuer": "Cisco Networking Academy",
    "issueDate": "",
    "description": "Course certificates; not a claim of CCNA professional exam certification."
  },
  {
    "id": "cyberops",
    "name": "CyberOps Associate",
    "issuer": "Cisco Networking Academy",
    "issueDate": ""
  }
];
