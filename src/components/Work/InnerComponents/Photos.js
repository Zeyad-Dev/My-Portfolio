import { useEffect, useState } from "react";
import "./Styling/Photos.css";
// import { projectsData } from "../../Data/projectsData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { photosLinks } from "../../Data/PhotosLink";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
function Photos(props) {
  const [modalNumber, setModalNumber] = useState(0);
  const [projectImages, setProjectImages] = useState([]);
  useEffect(() => {
    const data = require("../../Data/PhotosLink.json");
    setProjectImages(data["photos"]);
  }, []);
  const handleClick = (id, e) => {
    if (modalNumber === id) {
      if (e.target.tagName !== "path" && e.target.tagName !== "svg") {
        e.preventDefault();
      } else {
        setModalNumber(0);
      }
    } else {
      setModalNumber(id);
    }
  };
  if (projectImages) {
    return (
      <div className="body">
        <h2>Photos</h2>
        <div className="image-container">
          {projectImages.map(function (photo) {
            return (
              <div
                key={photo.id}
                className={modalNumber === photo.id ? "modal" : "modal-img"}
                onClick={(e) => handleClick(photo.id, e)}
              >
                <FontAwesomeIcon
                  icon={faXmark}
                  className={modalNumber === photo.id ? "appear" : "disappear"}
                  onClick={(e) => handleClick(photo.id, e)}
                />
                <img src={photo.src} alt="img" />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    <h1>Loading...</h1>;
  }
}

export default Photos;
