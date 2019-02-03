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
    </Helmet>
    <SiteHeader />
    <ContactForm />
  </div>
);
