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
    <fragment className="center">
      <h2>Loop</h2>
      {students.map((stud) => (
        <li>{stud.firstName}</li>
      ))}
    </fragment>
  );
};

export default Loop;
