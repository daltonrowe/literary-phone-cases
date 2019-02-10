import React from "react";
import Img from "gatsby-image";

const DesignItem = ({ design, imgData }) => {
  return (
    <li className="DesignItem">
      <div className="DesignItemInner">
        <a
          className="ImageWrapper"
          target="_blank"
          rel="noopener noreferrer"
          href={design.frontmatter.link}
        >
          <Img
            title={design.frontmatter.title}
            alt={design.frontmatter.alt}
            fluid={imgData.childImageSharp.fluid}
          />
          <img src={design.frontmatter.image} alt={design.frontmatter.alt} />
        </a>
        <h2>{design.frontmatter.title}</h2>
        <span>{design.frontmatter.description}</span>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="PurchaseLink"
          href={design.frontmatter.link}
        >
          Click for sizes and styles
        </a>
      </div>
    </li>
  );
};

export default DesignItem;
