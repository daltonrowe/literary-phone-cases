import React from "react";
import { StaticQuery, graphql } from "gatsby";
import DesignItem from "./DesignItem";

const DesignsList = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___title] }
          ) {
            edges {
              node {
                id
                frontmatter {
                  title
                  image
                  alt
                  link
                  description
                }
              }
            }
          }
        }
      `}
      render={data => {
        const DesignItems = data.allMarkdownRemark.edges.map(edge => {
          return (
            <>
              <DesignItem key={edge.node.id} design={edge.node} />
            </>
          );
        });

        return <ul className="DesignsList">{DesignItems}</ul>;
      }}
    />
  );
};

export default DesignsList;
