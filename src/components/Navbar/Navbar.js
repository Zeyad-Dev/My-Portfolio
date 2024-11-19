import { html } from "../../index";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SpecialLink from "./SpecialLink";
import { link1, link2, link3, link4 } from "./LinksText";
import logo from "../../assets/navbar/logo.png";
import logo2 from "../../assets/navbar/logo2.png";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { changeState } from "../../rtk/navbarSlice";

function Navbar() {
  const navigate = useNavigate();
  const navbarState = useSelector((state) => state.navbar);
  const dispatch = useDispatch();
  const [activeLink, setActiveLink] = useState("Home");
  const [isNight, setIsNight] = useState();
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/", { replace: true });
  };
  const handleNightMood = () => {
    setIsNight(!isNight);
    html.classList.toggle("light");
    if (html.classList.contains("light")) {
      localStorage.setItem("mode", "light");
      localStorage.setItem("isNight", true);
    } else {
      localStorage.setItem("mode", "night");
      localStorage.setItem("isNight", false);
    }
  };
  useEffect(() => {
    if (localStorage.getItem("isNight")) {
      setIsNight(JSON.parse(localStorage.getItem("isNight")));
    }
  }, []);

  return (
    <header>
      <div className="container">
        <div className="logo">
          <Link to="/" onClick={handleClick}>
            <img src={isNight ? logo2 : logo} alt="logo" />
          </Link>
        </div>
        <nav>
          <FontAwesomeIcon
            icon={faBars}
            className="bars-icon"
            onClick={() => {
              dispatch(changeState(!navbarState));
            }}
          />
          <ul className={navbarState ? "active-bars" : null}>
            <li
              onClick={() => {
                setActiveLink(link1);
              }}
            >
              <SpecialLink isActive={activeLink === link1} title={link1} />
            </li>
            <li
              onClick={() => {
                setActiveLink(link2);
              }}
            >
              <SpecialLink isActive={activeLink === link2} title={link2} />
            </li>
            <li
              onClick={() => {
                setActiveLink(link3);
              }}
            >
              <SpecialLink isActive={activeLink === link3} title={link3} />
            </li>
            <li
              onClick={() => {
                setActiveLink(link4);
              }}
            >
              <SpecialLink isActive={activeLink === link4} title={link4} />
            </li>
          </ul>
        </nav>
        <FontAwesomeIcon
          className={isNight ? "night" : "light"}
          icon={isNight ? faMoon : faSun}
          onClick={handleNightMood}
        />
      </div>
    </header>
  );
}

export default Navbar;
