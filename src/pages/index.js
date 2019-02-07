import React from "react";
import { Helmet } from "react-helmet";

import SiteHeader from "../components/SiteHeader";
import ContactForm from "../components/ContactForm";
import DesignsList from "../components/DesignsList";
import SiteFooter from "../components/SiteFooter";

export default () => {
  return (
    <div id="Page">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Literary Phone Cases - Shakespeare, Jane Austen, Books</title>
        <link rel="canonical" href="https://literaryphonescases.com" />
        <script
          src="https://identity.netlify.com/v1/netlify-identity-widget.js"
          defer
        />
        <link
          href="https://fonts.googleapis.com/css?family=Libre+Baskerville"
          rel="stylesheet"
        />
        <meta property="og:title" content="Literary Phone Cases" />
        <meta property="og:image" content="/assets/opengraph.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Literary Phone Cases" />
        <meta
          property="og:description"
          content="Phone cases and other accessories based on literature's greatest."
        />
      </Helmet>
      <div id="Masthead">
        <SiteHeader />
        <ContactForm />
      </div>
      <DesignsList />
      <SiteFooter />
    </div>
  );
};
