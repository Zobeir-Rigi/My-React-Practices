import React from "react";
import "./App.css";
const students = [
  {
    firstName: "zobeir",
    lastname: "Rigi ",
  },
  {
    firstName: "Adel",
    lastname: "Fakouri",
  },
  {
    firstName: "Adelllll",
    lastname: "Khas",
  },
];

const Loop = () => {
  return (
    <div className="center">
      <h2>Loop</h2>
      {students.map((stud,index) => (
        <li key={index}>{stud.firstName}</li>
      ))}
    </div>
  );
};

export default Loop;
