import React from "react";
import { useForm } from "@formcarry/react";

function ContactPage() {
  const { state, submit } = useForm({
    id: "0dQHoxPWAV",
  });

  // Success message
  if (state.submitted) {
    return (
      <div>
        Thank you! I received your submission and will get back to you ASAP.
      </div>
    );
  }

  return (
    <>
      <h2>Contact</h2>
      <article>
        <p>Please fill out the form below, and I'll be in touch soon.</p>
        <form onSubmit={submit}>
          <fieldset>
            <legend>Your Contact Information</legend>
            <label class="required" for="name">
              First and Last Name:
            </label>
            <input
              type="text"
              name="name"
              size="30"
              maxlength="100"
              required
              autofocus
              placeholder="e.g. Jane Doe"
              aria-required="true"
            />

            <label class="required" for="email">
              Email:
            </label>
            <input
              type="email"
              name="email"
              size="30"
              maxlength="100"
              required
              pattern="[^ @]+@[^ @]+.[a-z]+"
              placeholder="e.g. john@gmail.com"
              aria-required="true"
            />
            <p>
              <label class="required" for="message">
                Message:
              </label>
              <textarea
                name="message"
                id="message"
                minlength="3"
                maxlength="250"
                placeholder="Write your message here. Max 250 characters."
                required
                aria-required="true"
              ></textarea>
            </p>
          </fieldset>

          <fieldset id="additionalinfo">
            <legend>Additional Information</legend>
            <label for="how">How did you hear about me?</label>
            <select name="how" id="how">
              <option value="LinkedIn">LinkedIn</option>
              <option value="Handshake">Handshake</option>
              <option value="Indeed">Indeed</option>
              <option value="Facebook">Facebook</option>
              <option value="Other" selected>
                Other
              </option>
            </select>

            <p>
              Are you a recruiter?
              <label for="yes">
                <input type="radio" name="recruitment" id="yes" value="Yes" />
                Yes
              </label>
              <label for="no">
                <input type="radio" name="recruitment" id="no" value="No" />
                No
              </label>
            </p>

            <p>
              What are your areas of interest?
              <label for="technology">
                <input
                  type="checkbox"
                  name="interests"
                  id="technology"
                  value="Technology"
                />
                Technology
              </label>
              <label for="health">
                <input
                  type="checkbox"
                  name="interests"
                  id="health"
                  value="Health"
                />
                Health
              </label>
              <label for="Media">
                <input
                  type="checkbox"
                  name="interests"
                  id="media"
                  value="Media"
                />
                Media
              </label>
              <label for="Finance">
                <input
                  type="checkbox"
                  name="interests"
                  id="finance"
                  value="Finance"
                />
                Finance
              </label>
            </p>

            <label for="submit">
              <button type="submit" id="submit" name="contactResults">
                Submit
              </button>
            </label>
          </fieldset>
        </form>
      </article>
    </>
  );
}
export default ContactPage;
