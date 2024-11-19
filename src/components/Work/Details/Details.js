import { useParams } from "react-router-dom";
import { projectsData } from "../../Data/projectsData";
import { useEffect, useState } from "react";
import "./Details.css";
import Info from "../InnerComponents/Info";
import Video from "../InnerComponents/Video";
import Photos from "../InnerComponents/Photos";

function Details() {
  const { id } = useParams();
  const [project, setProject] = useState({});
  const [active, setActive] = useState("Info");
  const [demo, setDemo] = useState(false);
  useEffect(() => {
    setProject(
      projectsData.find(function (project) {
        return project.id === +id;
      })
    );
  }, [id]);

  if (project) {
    return (
      <div className="details">
        <div className="cover">
          <img src={project.cover} alt={project.name} />
        </div>
        <div className={demo ? "demo container" : "container"}>
          {active === "Info" ? (
            <Info
              title={project.name}
              description={project.description}
              link={project.gitHub}
            />
          ) : active === "Video" ? (
            <Video id={project.id} />
          ) : active === "Photos" ? (
            <Photos id={project.id} />
          ) : null}
          <div className="options">
            <h3>Options</h3>
            <div>
              <button
                className={active === "Info" ? "btn active" : "btn"}
                onClick={function () {
                  setActive("Info");
                  setDemo(false);
                }}
              >
                Info
              </button>
              <button
                className={active === "Video" ? "btn active" : "btn"}
                onClick={function () {
                  setActive("Video");
                  setDemo(false);
                }}
              >
                Video
              </button>
              <button
                className={active === "Photos" ? "btn active" : "btn"}
                onClick={function () {
                  setActive("Photos");
                  setDemo(false);
                }}
              >
                Photos
              </button>
              <button
                className={active === "Demo" ? "btn active " : "btn"}
                href="/#"
                onClick={function () {
                  setActive("Demo");
                  setDemo(true);
                }}
                target="_blank"
              >
                Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <h1>Loading</h1>;
  }
}

export default Details;
