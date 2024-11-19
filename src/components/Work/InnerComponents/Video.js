import { useEffect, useState } from "react";
import { projectsData } from "../../Data/projectsData";
function Video(props) {
  const [project, setProject] = useState({});
  useEffect(() => {
    setProject(
      projectsData.find(function (project) {
        return project.id === +props.id;
      })
    );
  }, [props.id]);
  return (
    <div className="body">
      <video loop controls poster={project.cover}>
        <source src={project.video} type="video/mp4" />
      </video>
    </div>
  );
}
export default Video;
