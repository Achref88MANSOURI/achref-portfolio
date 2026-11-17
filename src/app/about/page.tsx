import { permanentRedirect } from 'next/navigation';

/** Keep existing profile links working using the dedicated Profile route. */
export default function About() {
  permanentRedirect('/profile');
}
