/** Keep headings readable in server HTML. The cursor is decoration only. */
export default function TypedText({ text }: { text: string }) {
  return <span>{text}<span aria-hidden="true" className="blinking-cursor text-primary" /></span>;
}
