const Input = (props) => {
  return (
    <input
      type={props.type}
      id={props.id}
      value= {props.value}
      onChange={props.onChange}
      onBlur={props.onBlur}
    ></input>
  );
};

export default Input