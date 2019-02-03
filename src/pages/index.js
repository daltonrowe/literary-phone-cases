import React from "react";
import { Helmet } from "react-helmet";

import SiteHeader from "../components/SiteHeader";
import ContactForm from "../components/ContactForm";

export default () => (
  <div id="Page">
    <Helmet>
      <meta charSet="utf-8" />
      <title>Literary Phone Cases - Shakespeare, Jane Austen, Books</title>
      <link rel="canonical" href="http://mysite.com/example" />
      <script
        src="https://identity.netlify.com/v1/netlify-identity-widget.js"
        defer
      />
    </Helmet>
    <SiteHeader />
    <ContactForm />
  </div>
);
