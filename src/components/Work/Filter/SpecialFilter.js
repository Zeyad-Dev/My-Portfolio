import "../Filter/SpecialFilter.css";
function SpecialFilter(props) {
  return (
    <>
      <button className={props.isActive ? "active btn-filter" : "btn-filter"}>
        {props.title}
      </button>
    </>
  );
}
export default SpecialFilter;
