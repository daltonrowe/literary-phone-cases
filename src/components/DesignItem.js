import React from "react";

const DesignItem = ({ design }) => (
  <li className="DesignItem">
    <div className="DesignItemInner">
      <a
        className="ImageWrapper"
        target="_blank"
        rel="noopener noreferrer"
        href={design.frontmatter.link}
      >
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
        Click for sizes and styles.
      </a>
    </div>
  </li>
);

export default DesignItem;
