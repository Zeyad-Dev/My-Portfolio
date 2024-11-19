import {
  faFacebookF,
  faGoogle,
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { motion } from "framer-motion";
function Contact() {
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const handleBlur = (e, handler) => {
    if (e.target.value === "") {
      handler(false);
    } else {
      handler(true);
    }
  };
  return (
    <motion.div
      className="contact"
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
        <h2>Get in Touch</h2>
        <div className="main-content">
          <div className="send-message">
            <h2>Write Us</h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className={active1 ? "active" : null}>Full Name</label>
                <input
                  type="text"
                  onFocus={() => setActive1(true)}
                  onBlur={(e) => handleBlur(e, setActive1)}
                />
              </div>
              <div>
                <label className={active2 ? "active" : null}>Email</label>
                <input
                  type="email"
                  onFocus={() => setActive2(true)}
                  onBlur={(e) => handleBlur(e, setActive2)}
                />
              </div>
              <textarea placeholder="Your Message Here..."></textarea>
              <input type="submit" value="Send" />
            </form>
          </div>
          <div className="social">
            <h2>Contact Us</h2>
            <div>
              <a
                href="https://www.facebook.com/profile.php?id=100007187167680&mibextid=ZbWKwL"
                target="blank"
              >
                <FontAwesomeIcon icon={faFacebookF} />
                <span>Facebook</span>
              </a>
              <a
                href="https://www.linkedin.com/in/zeyad-mohsen-155a84326?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="blank"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://www.instagram.com/ziadmohsen80/profilecard/?igsh=OXJ5aG1nYjd4cDd5"
                target="blank"
              >
                <FontAwesomeIcon icon={faInstagram} />
                <span>Instagram</span>
              </a>
              <a href="https://wa.me/+201110017230" target="blank">
                <FontAwesomeIcon icon={faWhatsapp} />
                <span>Whatsapp </span>
              </a>
              <a href="mailto:ziad.mohsen557@gmail.com" target="blank">
                <FontAwesomeIcon icon={faGoogle} />
                <span>Mail </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
export default Contact;
