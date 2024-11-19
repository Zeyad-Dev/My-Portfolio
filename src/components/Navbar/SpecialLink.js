import "./SpecialLink.css";
import { Link, useNavigate } from "react-router-dom";
function SpecialLink(props) {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate(`/${props.title}`, { replace: true });
  };
  return (
    <>
      <Link
        to={`/${props.title}`}
        className={props.isActive ? "active link" : null}
        onClick={handleClick}
      >
        {props.title}
      </Link>
    </>
  );
}
export default SpecialLink;
