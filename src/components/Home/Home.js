import "./Home.css";
import profile from "../../assets/Home/sample.jpg";
import cv from "../../assets/Home/Zeyad Mohsen.pdf";
import { motion } from "framer-motion";
function Home() {
  return (
    <motion.div
      className="home"
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
        <div className="content">
          <div className="text">
            <p>Hi, my name is </p>
            <h1>Zeyad Mohsen</h1>
            <p>Frontend Developer</p>
            <p>
              many Words for testing ui many Words for testing ui many Words for
              testing ui many Words for testing ui many Words for testing ui
              many Words for testing ui many Words for testing ui many Words for
              testing ui{" "}
            </p>
            <a href={cv} className="cv">
              Download my cv
            </a>
          </div>
          <div className="profile">
            <img src={profile} alt="profile" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
export default Home;
