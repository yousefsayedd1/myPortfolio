import React from "react";
import "./main.css";
import projectsData from "./Projects.json";
export default function Main() {
  const [activeButton, setActiveButton] = React.useState("All Projects");
  const [readMore, setReadMore] = React.useState(false);
  function buttonActivation(e) {
    setActiveButton(e.target.innerText);
  }

  function categoriesProjects(projectsData) {
    return projectsData.filter((project) => {
      return project.categorys.includes(activeButton);
    });
  }
  const categoriesProjectsArr = categoriesProjects(projectsData);

  function handleClick() {
    setReadMore(!readMore);
  }
  return (
    <main id="projects" className="flex">
      <section className="left-section flex">
        <button
          onClick={buttonActivation}
          className={activeButton == "All Projects" ? "active" : null}
        >
          All Projects
        </button>
        <button
          onClick={buttonActivation}
          className={activeButton == "HTML & CSS" ? "active" : null}
        >
          HTML & CSS
        </button>
        <button
          onClick={buttonActivation}
          className={activeButton == "JavaScript & API" ? "active" : null}
        >
          JavaScript & API
        </button>
        <button
          onClick={buttonActivation}
          className={activeButton == "React & MUI" ? "active" : null}
        >
          React & MUI
        </button>
        <button
          onClick={buttonActivation}
          className={activeButton == "DataBase" ? "active" : null}
        >
          DataBase
        </button>
      </section>
      <section className="right-section flex">
        {categoriesProjectsArr.map((project) => (
          <article key={project.liveLike} className="card ">
            <img src={`./${project.imagePath}`} alt="" />
            <div className="description">
              <h2 className="title">{project.name}</h2>
              <p
                style={{
                  overflow: readMore ? "visible" : "hidden",
                  height: readMore ? "min-content" : "75px",
                }}
                className="subtitle"
              >
                {project.subtitle}
              </p>
              <div className="flex icons">
                <div className="flex">
                  <a
                    href={project.liveLike}
                    className="icon-link icon"
                    target="_blank"
                  ></a>
                  <a
                    href={project.githubLink}
                    className="icon-github icon"
                    target="_blank"
                  ></a>
                </div>
                <button onClick={handleClick} className="flex read-more">
                  Read More<span className="icon-arrow-right"></span>
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
