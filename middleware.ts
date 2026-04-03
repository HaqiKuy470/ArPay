import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  let hostname = req.headers.get('host') || '';
  hostname = hostname.replace(/:\d+$/, ''); 

  const mainDomain = 'arpay.my.id';

  // Tangkap request untuk subdomain "docs"
  if (hostname === `docs.${mainDomain}` || hostname === 'docs.localhost') {
    // Karena foldermu ada di app/(subdomains)/docs/..., rewrite ke /docs
    return NextResponse.rewrite(new URL(`/docs${url.pathname}`, req.url));
  }
  
  if (hostname === `hello.${mainDomain}` || hostname === 'hello.localhost') {
    return NextResponse.rewrite(new URL(`/hello${url.pathname}`, req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};