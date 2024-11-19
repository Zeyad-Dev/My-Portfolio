import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AnimationComponents from "./components/AinmationComponents";
import { useEffect } from "react";
import { html } from "./index";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeState } from "./rtk/navbarSlice";
function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/", { replace: true });
    if (localStorage.getItem("mode") === "light") {
      html.classList.add("light");
    } else {
      html.classList.remove("light");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div
      onClick={(e) => {
        if (e.target.tagName !== "svg" && e.target.tagName !== "path") {
          dispatch(changeState(false));
        }
      }}
    >
      <Navbar />
      <AnimationComponents />
    </div>
  );
}

export default App;
