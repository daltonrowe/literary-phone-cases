import React from "react";
import { navigateTo } from "gatsby-link";

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}
/* eslint-disable */

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigateTo(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  render() {
    return (
      <div id="ContactForm">
        <h2>Want Something Special?</h2>
        <a id="ContactButton" href="#contact">
          Let me know!
        </a>
        <div id="contact" className="">
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="mmm"
            onSubmit={this.handleSubmit}
          >
            <div id="hmu">
              <h2>Get in Touch</h2>
              <p className="Introduction">
                Want a different color than what if offered, or just want
                something special for a loved one? I'll let you know if I can
                help.
              </p>
              <p className="hidden">
                <label>
                  Don’t fill this out if you're human:{" "}
                  <input name="mmm" onChange={this.handleChange} />
                </label>
              </p>
              <p>
                <label>
                  Name:{" "}
                  <input type="text" name="name" onChange={this.handleChange} />
                </label>
              </p>
              <p>
                <label>
                  Email:{" "}
                  <input
                    type="email"
                    name="email"
                    onChange={this.handleChange}
                  />
                </label>
              </p>
              <p className="hidden">
                <label>
                  Subject:{" "}
                  <input
                    type="text"
                    name="subject"
                    defaultValue="[Phone Case Idea]"
                    onChange={this.handleChange}
                  />
                </label>
              </p>
              <p>
                <label>
                  What's your idea?:{" "}
                  <textarea name="message" onChange={this.handleChange} />
                </label>
              </p>
              <div data-netlify-recaptcha="true" />
            </div>
            <div id="submit">
              <button type="submit">Send</button>
            </div>
            <div id="close">
              <a href="#">Close</a>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
