import React from "react";
import Header from "./components/1-header/Header";
import Hero from "./components/2-Hero/Hero";
import Main from "./components/3-main/Main";
import Contact from "./components/4-contact/Contact";
import Footer from "./components/5-footer/Footer";
export default function App() {
  const [showScrollBtn, setShowScrollBtn] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) setShowScrollBtn(true);
      else setShowScrollBtn(false);
    });
  }, []);
  return (
    <div id="up" className="container">
      <Header />
      <Hero />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />

      <a
        style={{ opacity: showScrollBtn ? 1 : 0, transition: "0.3s" }}
        href="#up"
      >
        <button className="scroll2Top icon-keyboard_arrow_up"></button>
      </a>
    </div>
  );
}
