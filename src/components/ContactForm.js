import React from "react";

export default () => (
  <div id="ContactForm">
    <h2>Want Something Special?</h2>

    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="mmm"
    >
      <div id="lmk">
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
        <p>
          <label>
            Phone: <input type="text" name="tel" />
          </label>
        </p>
        <p>
          <label>
            Subject: <input type="text" name="subject" />
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message" />
          </label>
        </p>
        <div data-netlify-recaptcha="true" />
      </div>
      <div id="submit">
        <button type="submit">Send</button>
      </div>
    </form>
  </div>
);
