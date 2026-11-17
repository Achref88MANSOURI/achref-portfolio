function parseOrigin(value: string | null): string | null {
  if (!value) return null;
  try {
    return new URL(value).origin;
  } catch {
    return null;
  }
}

export function isAllowedOrigin(request: Request, domain: string, extraAllowed: string[] = []): boolean {
  const localOrigin = /^(localhost|127\.0\.0\.1)(:\d+)?$/.test(domain) ? `http://${domain}` : `https://${domain}`;
  const allowed = [localOrigin,`https://${domain}`, `https://www.${domain}`, ...extraAllowed];
  const origin = parseOrigin(request.headers.get('origin'));
  const referer = parseOrigin(request.headers.get('referer'));

  return (origin !== null && allowed.includes(origin)) || (referer !== null && allowed.includes(referer));
}
