export interface Hobby {
  name: string;
  description?: string;
  /** Material Symbols icon name. */
  icon?: string;
  /** `personal` shows on /life, `professional` on /about. Default `professional`. */
  kind?: 'professional' | 'personal';
}

export const isPersonalHobby = (hobby: Hobby) => hobby.kind === 'personal';

export const hobbies: Hobby[] = [];
