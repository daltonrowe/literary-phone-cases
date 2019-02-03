import React from "react";
import { Helmet } from "react-helmet";

import SiteHeader from "../components/SiteHeader";
import ContactForm from "../components/ContactForm";
import DesignsList from "../components/DesignsList";

export default ({
  data: {
    allMarkdownRemark: { edges }
  }
}) => {
  const Posts = edges.map(edge => (
    <li key={edge.node.id} post={edge.node}>
      post
    </li>
  ));

  return (
    <div id="Page">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Literary Phone Cases - Shakespeare, Jane Austen, Books</title>
        <link rel="canonical" href="http://literaryphonescases.com" />
        <script
          src="https://identity.netlify.com/v1/netlify-identity-widget.js"
          defer
        />
      </Helmet>
      <SiteHeader />
      <ContactForm />
      <DesignsList />
      {Posts}
    </div>
  );
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___title] }) {
      edges {
        node {
          id
          frontmatter {
            image
            title
          }
        }
      }
    }
  }
`;
