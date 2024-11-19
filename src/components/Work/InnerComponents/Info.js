function Info(props) {
  return (
    <div className="body">
      <h2>Info</h2>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <a href={props.link}>Github Code</a>
    </div>
  );
}

export default Info;
