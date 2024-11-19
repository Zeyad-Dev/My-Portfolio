import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Home/Home";
import Experience from "./Experience/Experience";
import Work from "./Work/Work";
import Contact from "./Contact/Contact";
import Details from "./Work/Details/Details";
import { AnimatePresence } from "framer-motion";
function AnimationComponents() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/Work" element={<Work />} />
        <Route path="/Work/projects/:id" element={<Details />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}
export default AnimationComponents;
