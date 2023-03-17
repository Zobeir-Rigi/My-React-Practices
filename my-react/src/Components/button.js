const Button = ({ text, handleClick}) => {
    console.log(handleClick)
  return(
      <button type="button" className="btn btn-info" onClick={handleClick}>{text} </button>

  );
  
};


export default Button ;