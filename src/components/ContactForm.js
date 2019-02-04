import React from "react";

export default () => (
  <div id="ContactForm">
    <h2>Want Something Special?</h2>
    <a href="#contact">Let me know!</a>
    <div id="contact" class="">
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="mmm"
      >
        <div id="hmu">
          <h2>Get in Touch</h2>
          <p className="Introduction">
            Want a different color than what if offered, or just want something
            special for a loved one? I'll let you know if I can help.
          </p>
          <p class="hidden">
            <label>
              Don’t fill this out if you're human: <input name="mmm" />
            </label>
          </p>
          <p>
            <label>
              Name: <input type="text" name="name" />
            </label>
          </p>
          <p>
            <label>
              Email: <input type="email" name="email" />
            </label>
          </p>
          <p class="hidden">
            <label>
              Subject:{" "}
              <input type="text" name="subject" value="[Phone Case Idea]" />
            </label>
          </p>
          <p>
            <label>
              What's your idea?: <textarea name="message" />
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
