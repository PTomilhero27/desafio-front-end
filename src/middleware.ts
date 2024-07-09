import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import i18nConfig from "../next-i18next.config";

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request: NextRequest) {
  const { nextUrl } = request;
  const { pathname } = nextUrl;

  if (PUBLIC_FILE.test(nextUrl.pathname) || nextUrl.pathname.includes("/api")) {
    return NextResponse.next();
  }

  const defaultLocale = i18nConfig.i18n.defaultLocale;
  const locales = i18nConfig.i18n.locales;
  const cookieLocale =
    request.cookies.get("NEXT_LOCALE")?.value || defaultLocale;

  const currentLocale = locales.find((locale) =>
    pathname.startsWith(`/${locale}`)
  );
  const validRoutes = ["dashboard", "leaderboard", "profile", "login"];

  const route = currentLocale
    ? pathname.split("/").slice(2, 3)[0]
    : pathname.split("/").slice(1, 2)[0];

  if (!validRoutes.includes(route)) {
    nextUrl.pathname = `/${cookieLocale}/login`;
    return NextResponse.redirect(nextUrl);
  }

  if (!currentLocale) {
    nextUrl.pathname = `/${cookieLocale}${pathname}`;
    return NextResponse.redirect(nextUrl);
  }

  if (currentLocale !== cookieLocale) {
    const newPathname = pathname.replace(
      `/${currentLocale}`,
      `/${cookieLocale}`
    );
    nextUrl.pathname = newPathname;
    return NextResponse.redirect(nextUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
