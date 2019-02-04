import React from "react";
import { Link } from "gatsby";

const DesignItem = ({ design }) => (
  <li className="DesignItem">
    <a className="ImageWrapper" target="_blank" href={design.frontmatter.link}>
      <img src={design.frontmatter.image} alt={design.frontmatter.alt} />
    </a>
    <h2>{design.frontmatter.title}</h2>
    <span>{design.frontmatter.description}</span>
    <a target="_blank" className="PurchaseLink" href={design.frontmatter.link}>
      Purchase on Redbubble
    </a>
  </li>
);

export default DesignItem;
