import React, { useState } from "react";
import "./header.css";
export default function NavBar() {
  const [showModel, setshowModel] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "dark");
  function toggleShowModel() {
    setshowModel(!showModel);
  }
  React.useEffect(() => {
    const body = document.querySelector("body");
    if (theme == "light") body.classList.remove("dark");
    else body.classList.remove("light");
    body.classList.add(theme);
  }, [theme]);
  console.log(theme);
  return (
    <header className="flex">
      <button onClick={toggleShowModel} className="menu icon-menu flex" />
      <div />
      <nav>
        <ul className="flex">
          <li>
            <a href="#hero">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <button
        onClick={() => {
          localStorage.setItem("theme", theme == "dark" ? "light" : "dark");
          setTheme(localStorage.getItem("theme"));
        }}
        className="mode flex"
      >
        <span className={theme == "dark" ? "icon-moon-o" : "icon-sun"}></span>
      </button>
      {showModel && (
        <div className="fixed">
          <ul className="model">
            <li>
              <button className="icon-close" onClick={toggleShowModel} />
            </li>
            <li>
              <a href="#hero">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
