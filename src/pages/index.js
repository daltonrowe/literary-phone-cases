import React from "react";
import { Helmet } from "react-helmet";

import SiteHeader from "../components/SiteHeader";
import ContactForm from "../components/ContactForm";
import DesignsList from "../components/DesignsList";

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
      </Helmet>
      <div id="Masthead">
        <SiteHeader />
        <ContactForm />
      </div>
      <DesignsList />
    </div>
  );
};
