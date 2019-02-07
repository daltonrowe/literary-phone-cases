import React from "react";

export default () => (
  <div id="SiteFooter">
    <div id="FooterTech">
      <p>This website is built with GatsbyJS and Netlify CMS</p>
    </div>
    <div id="FooterGit">
      <p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/daltonrowe/literary-phone-cases"
        >
          View on Github
        </a>
      </p>
    </div>
    <div id="FooterCopyright">
      <p>
        All designs &copy;{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://daltonrowe.com"
        >
          Dalton Rowe
        </a>
      </p>
    </div>
  </div>
);
