import React from "react";
import Script from "next/script";

const GoogleAnalyticsScript = () => {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-RCEHPK1B5F"
      />
      <Script strategy="afterInteractive" id="google-tag">
        {`window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

    gtag('config', 'G-RCEHPK1B5F');`}
      </Script>
    </>
  );
};

export default GoogleAnalyticsScript;
