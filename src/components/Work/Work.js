import { useState } from "react";
import SpecialFilter from "./Filter/SpecialFilter";
import "./Work.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { projectsData } from "../Data/projectsData";
import { motion } from "framer-motion";
function Work() {
  const [active, setActive] = useState("All");
  const [activeFilter, setActiveFilter] = useState(false);
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const handleFilter = (cat) => {
    setActive(cat);
    setFilteredProjects(
      projectsData.filter((project) => {
        return project.cat === cat;
      })
    );
  };
  const navigate = useNavigate();
  const handleDetails = (key) => {
    navigate(`/Work/projects/${key}`, { replace: false });
  };
  return (
    <motion.div
      className="work"
      initial={{
        x: "-100vw",
      }}
      animate={{
        x: 0,
      }}
      transition={{
        duration: 0.3,
      }}
      exit={{
        y: "-100vh",
      }}
    >
      <div className="container">
        <h1>My Projects</h1>
        <div className="filter">
          <FontAwesomeIcon
            icon={faFilter}
            className="filter-icon"
            onClick={() => setActiveFilter(!activeFilter)}
          />
          <ul className={activeFilter ? "active" : null}>
            <li
              onClick={() => {
                setActive("All");
                setFilteredProjects(projectsData);
              }}
            >
              <SpecialFilter isActive={active === "All"} title="All" />
            </li>
            <li
              onClick={() => {
                handleFilter("HTML and CSS");
              }}
            >
              <SpecialFilter
                isActive={active === "HTML and CSS"}
                title="HTML and CSS"
              />
            </li>
            <li
              onClick={() => {
                handleFilter("JS");
              }}
            >
              <SpecialFilter isActive={active === "JS"} title="JS" />
            </li>
            <li
              onClick={() => {
                handleFilter("React");
              }}
            >
              <SpecialFilter isActive={active === "React"} title="React" />
            </li>
          </ul>
        </div>
        <div className="main-content">
          {filteredProjects.map(function (project) {
            return (
              <div className="box" key={project.id}>
                <div className="image">
                  <img src={project.cover} alt={project.name} />
                  <h2>{project.name}</h2>
                  <div className="options">
                    <button onClick={() => handleDetails(project.id)}>
                      Details
                    </button>
                    <button>Code</button>
                    <button>Demo</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
export default Work;
