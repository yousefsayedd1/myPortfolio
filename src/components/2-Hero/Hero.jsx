import React from "react";
import "./hero.css";
import devAnimation from "../../../public/assets/animation/developer.json";
import Lottie from "lottie-react";
export default function Hero() {
  return (
    <section id="hero" className="hero flex">
      <article className="left-section ">
        <div className="parent-avatar flex">
          <img className="avatar" src="./me.jpg" alt="" />
          <span className="icon-verified"></span>
        </div>
        <h1 className="title">
          I'm Yousef Sayed, Software Engineer, Front End Developer, and
          Competitive Programmer.
        </h1>
        <p className="subtitle">
          I am a computer engineering student working as a front-end software
          engineer and competitive programmer. I am aiming to gain more
          experience and excel in your field by actively seeking opportunities
          to enhance your skills and knowledge.
        </p>
        <div className="icons flex">
          <a
            href="https://github.com/yousefsayedd1"
            className="icon icon-github"
            target="_blank"
          ></a>
          <a
            href="https://www.linkedin.com/in/yousefsayedd1/"
            className="icon icon-linkedin-square"
            target="_blank"
          ></a>
        </div>
      </article>
      <article className="right-section animation ">
        <Lottie style={{}} animationData={devAnimation} />
      </article>
    </section>
  );
}
