import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../../public/assets/animation/done.json";
import contactAnimation from "../../../public/assets/animation/contact.json";
import "./contact.css";
export default function Contact() {
  const [state, handleSubmit] = useForm("mayggpry");

  return (
    <section id="contact" className="contact-us">
      <h1 className="title">
        <span className="icon-envelope"></span>Contact Us
      </h1>
      <p className="subtitle">
        Contact us for more information and get notified when I publish
        something new
      </p>
      <div className="mail flex">
        <form className="" action="" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email Address:</label>
            <input
              required
              type="email"
              autoComplete="off"
              name="email"
              id="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div>
            <label htmlFor="text">Your Message:</label>
            <textarea name="message" id="text" required></textarea>
            <ValidationError
              prefix="Message"
              field="text"
              errors={state.errors}
            />
          </div>

          <button className="submit" disabled={state.submitting}>
            {state.submitting ? "Submiting..." : "Submit"}
          </button>
          {state.succeeded && (
            <p
              className="flex"
              style={{ fontSize: "18px", marginTop: "1.7rem" }}
            >
              <Lottie
                loop={false}
                style={{ height: 37 }}
                animationData={doneAnimation}
              />
              Your Message has been sent successfully
            </p>
          )}
        </form>
        <div className="animation">
          {" "}
          <Lottie
            className="contact-animatoin"
            style={{ height: 355 }}
            animationData={contactAnimation}
          />
        </div>
      </div>
    </section>
  );
}
