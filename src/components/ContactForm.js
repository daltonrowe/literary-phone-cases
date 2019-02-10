import React from "react";

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: "[Phone Case Idea]",
      formClassName: "closed",
      thanksClassName: "closed",
      errorClassName: "hidden"
    };
  }

  showForm = e => {
    this.setState({ formClassName: "open" });
  };

  closeForm = e => {
    this.setState({ formClassName: "closed" });
  };

  showThanks = e => {
    this.setState({ thanksClassName: "open" });
  };

  closeThanks = e => {
    this.setState({ thanksClassName: "closed" });
  };

  validateForm = () => {
    if (
      this.state.name &&
      this.state.name !== "" &&
      this.state.email &&
      this.state.email !== "" &&
      this.state.message &&
      this.state.message !== ""
    ) {
      return true;
    }
    return false;
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;

    if (this.validateForm()) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": form.getAttribute("name"),
          ...this.state
        })
      })
        .then(() => {
          this.closeForm();
          this.showThanks();
          window.location = "/#ThankYou";
        })
        .catch(error => alert(error));
    } else {
      this.setState({ errorClassName: "show-error" });
    }
  };

  render() {
    return (
      <div id="ContactForm">
        <h2>Want Something Special?</h2>
        <button id="ContactButton" onClick={this.showForm}>
          Let me know!
        </button>
        <div id="ThankYou" className={this.state.thanksClassName}>
          <div id="ThankYouInner">
            <h3>Thank You!</h3>
            <p>
              Your message has been recieved, I will respond as soon as
              possible. Hopefully I can help you out!
            </p>
            <button onClick={this.closeThanks}>Close</button>
          </div>
        </div>
        <div id="contact" className={this.state.formClassName}>
          <form
            name="literary-contact"
            method="POST"
            action="/#ThankYou"
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
              <div id="FormError" className={this.state.errorClassName}>
                Please complete all form fields.
              </div>
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
                    value="[Phone Case Idea]"
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
            <div id="close" onClick={this.closeForm}>
              Close
            </div>
          </form>
        </div>
      </div>
    );
  }
}
