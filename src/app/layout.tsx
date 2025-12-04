import './globals.css';
import { Providers } from './providers';
import Script from 'next/script';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Azolla | Your Decarbonization Partner',
  description:
    'We are an engineering company providing end to end services from making a business case to project management to installation of ESDs and monitoring of performance.',
  metadataBase: new URL('https://azolla.sg'),
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'Azolla | Your Decarbonization Partner',
    description:
      'We are an engineering company providing end to end services from making a business case to project management to installation of ESDs and monitoring of performance.',
    images: [{ url: 'https://azolla.sg/icon.png' }],
    url: 'https://azolla.sg',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Azolla | Your Decarbonization Partner',
    description:
      'We are an engineering company providing end to end services from making a business case to project management to installation of ESDs and monitoring of performance.',
    images: [{ url: 'https://azolla.sg/icon.png' }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <link
          href='https://assets.calendly.com/assets/external/widget.css'
          rel='stylesheet'
          media='screen'
        ></link>
        <script
          src='https://assets.calendly.com/assets/external/widget.js'
          type='text/javascript'
          async
        ></script>

        <Script
          async
          id='google-tag-manager'
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id=GTM-PP5BK7CS'+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PP5BK7CS');`,
          }}
        ></Script>

        {/* <Script
          async
          src='https://www.googletagmanager.com/gtag/js?id=G-14MEG1W0VY'
        ></Script>
        <script
          async
          id='google-analytics'
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];   function gtag(){dataLayer.push(arguments);}   gtag('js', new Date());   gtag('config', 'G-14MEG1W0VY');`,
          }}
        ></script> */}

        {/* <Script
          async
          src='https://www.googletagmanager.com/gtag/js?id=G-75E00SFMDD'
        ></Script>
        <script
          async
          id='gtag-stage'
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];   function gtag(){dataLayer.push(arguments);}   gtag('js', new Date());   gtag('config', 'G-75E00SFMDD');`,
          }}
        ></script> */}
        <script
          async
          type='text/javascript'
          id='linked-in'
          dangerouslySetInnerHTML={{
            __html: `
        _linkedin_partner_id = "5468964";
        window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
        window._linkedin_data_partner_ids.push(_linkedin_partner_id);
        `,
          }}
        ></script>

        <script
          async
          type='text/javascript'
          id='linkedin'
          dangerouslySetInnerHTML={{
            __html: `
          (function(l) {
          if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
          window.lintrk.q=[]}
          var s = document.getElementsByTagName("script")[0];
          var b = document.createElement("script");
          b.type = "text/javascript";b.async = true;
          b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
          s.parentNode.insertBefore(b, s);})(window.lintrk);
        `,
          }}
        ></script>
        <noscript>
          <img
            height='1'
            width='1'
            style={{ display: 'none' }}
            alt=''
            src='https://px.ads.linkedin.com/collect/?pid=5468964&fmt=gif'
          />
        </noscript>

        <script
          async
          id='facebook'
          dangerouslySetInnerHTML={{
            __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '316105917693590');
          fbq('track', 'PageView');
          `,
          }}
        ></script>
        <noscript>
          <img
            height='1'
            width='1'
            style={{ display: 'none' }}
            alt=''
            src='https://www.facebook.com/tr?id=316105917693590&ev=PageView&noscript=1'
          />
        </noscript>
      </head>
      <body>
        <noscript>
          <iframe
            src='https://www.googletagmanager.com/ns.html?id=GTM-PP5BK7CS'
            height='0'
            width='0'
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
