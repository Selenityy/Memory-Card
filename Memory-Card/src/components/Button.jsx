function Button({ className, type, text, handleClick }) {
  return (
    <button className={className} type={type} onClick={handleClick}>
      {text}
    </button>
  );
}

export default Button;
