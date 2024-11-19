import { useEffect, useState } from "react";
import "./Experience.css";
import { skillsOne, skillsTwo } from "./skills";
import Loading from "../Loading/Loading";
import { motion } from "framer-motion";
function Experience() {
  const [listOne, setListOne] = useState([]);
  const [listTwo, setListTwo] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setListOne(skillsOne);
    setListTwo(skillsTwo);
    setLoading(false);
  }, []);

  if (loading) return <Loading />;
  return (
    <motion.div
      className="experience"
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
        <h2>My Skills</h2>
      </div>
      <div className="skills">
        <div className="row-1">
          {listOne.map(function (skill) {
            return (
              <div key={skill.id}>
                <div className="logo">
                  <img src={skill.src} alt={skill.title} />
                </div>
                <h3>{skill.title}</h3>
              </div>
            );
          })}
        </div>
        <div className="row-2">
          {listTwo.map(function (skill) {
            return (
              <div key={skill.id}>
                <div className="logo">
                  <img src={skill.src} alt={skill.title} />
                </div>
                <h3>{skill.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
