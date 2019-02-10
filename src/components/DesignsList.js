import React from "react";
import { StaticQuery, graphql } from "gatsby";
import DesignItem from "./DesignItem";

const DesignsList = () => {
  const designQuery = graphql`
    query AllDesignsQuery {
      DesignImages: allFile(
        sort: { order: ASC, fields: [absolutePath] }
        filter: { relativePath: { regex: "assets/.*.jpg/" } }
      ) {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              fluid(
                maxWidth: 380
                quality: 70
                traceSVG: { background: "#fbfafc", color: "#dbd4e2" }
              ) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___title] }) {
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
  `;
  return (
    <StaticQuery
      query={designQuery}
      render={data => {
        const DesignItems = data.allMarkdownRemark.edges.map(edge => {
          const SharpImage = data.DesignImages.edges.find(img => {
            const mdImage = edge.node.frontmatter.image.split("/").pop();

            if (img.node.relativePath === mdImage) {
              return img.node;
            }
            return false;
          });

          return (
            <DesignItem
              key={edge.node.id}
              design={edge.node}
              imgData={SharpImage.node}
            />
          );
        });

        return <ul className="DesignsList">{DesignItems}</ul>;
      }}
    />
  );
};

export default DesignsList;
