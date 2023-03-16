import React from "react";

function Highlighter(props) {
  function highlightPurple() {
    props.color = "purple";
    console.log(props.color)
  }

  return (
    <span className={props.color} onClick={highlightPurple}>
      {props.word}
    </span>
  );
}

export default Highlighter;
