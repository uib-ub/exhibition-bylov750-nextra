import type { Metadata } from "next";
import { LastUpdated, Layout, Navbar } from 'nextra-theme-docs';
import { Banner, Head, Search } from 'nextra/components';
import Footer from "@/components/footer";
import { getPageMap } from 'nextra/page-map'
import { Crimson_Pro, IM_Fell_Great_Primer } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const crimsonPro = Crimson_Pro({
  variable: "--font-crimson-pro",
  subsets: ["latin"],
});

const imFellGreatPrimer = IM_Fell_Great_Primer({
  variable: "--font-marcus",
  subsets: ["latin"],
  weight: ['400']
});

export const metadata: Metadata = {
  title: {
    default: "Byloven i 750 år",
    template: "%s | Byloven i 750 år",
  },
  keywords: ["Universitetet i Bergen", "Magnus Lagabøte", "Byloven", "750 år", "nettutstilling"],
  description: "Nettutstilling rundt 750-årsdagen for Magnus Lagabøtes Bylov 2026",
};

const banner = (
  <Banner storageKey="some-key2">🛠️ Første utkast 🛠️</Banner>);

const navbar = (
  <Navbar
    logo={<Image src='/logos/svg/UiB_Bylovjubileet_2026_Initial_Linje.svg' alt='' height={50} width={140} className="-ml-3 md:ml-5 mb-3"/>}
  // ... Your additional navbar options
  />
)

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      // Not required, but good for SEO
      lang="no"
      // Required to be set
      dir="ltr"
      className={`${crimsonPro.variable} ${imFellGreatPrimer.variable} antialiased`}
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head>
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="notranslate" />
        <meta name="google" content="notranslate" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/uib-ub/exhibition-um200-nextra"
          toc={{
            title: "Innhold",
            backToTop: "Til toppen",
          }}
          feedback={{
            content: null,
          }}
          editLink={null}
          lastUpdated={<LastUpdated locale="nb">Sist oppdatert</LastUpdated>}
          darkMode={false}
          nextThemes={{
            forcedTheme: "light",
          }}
          search={<Search placeholder="Søk ..." emptyResult="Ingen resultater" loading="Søker..." errorText="Feil ved søk" />}
        >
          {children}
          <Footer/>
        </Layout>
      </body>
    </html>
  )
}