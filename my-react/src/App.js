import "./App.css";
import Button from "./button";
import Mentors from "./Mentors";
// import { ClickMe, Download, Subscribe } from "./ButtonFunctions";


const ClickMe = () => {
  console.log("I got Clicked");
};

const Download = () => {
  console.log("Download ME ...");
};

const Subscribe = () => {
  console.log("Subscrib Me ...");
};


function App() {
  return (
    <div>
      <Mentors />
      <Button text="clickMe" handleClick={ClickMe} />
      <Button text="Download" handleClick={Download} />
      <Button text="Subscribe" handleClick={Subscribe} />
    </div>
  );
}

export default App;
