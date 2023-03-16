import "./App.css";
import Button from "./button";
import Mentors from "./Mentors";
import MartianPhotoFetcher from "./fetch";
// import { ClickMe, Download, Subscribe } from "./ButtonFunctions";
import Alert from "./Alert";
import Counter from "./counter";
import Highlighter from "./HighLighter"
import Ternary from "./Ternary";
import Loop from "./Loop";

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
    <Ternary />
    <Loop />
      <p>
        Some text with a <Highlighter word="highlighted" color="red" /> word
      </p>
      <Counter />
      <Mentors />
      <Alert clickp={() => console.log("im an Alert !!!")} />

      <Button text="clickMe" handleClick={ClickMe} />
      <Button text="Download" handleClick={Download} />
      <Button text="Subscribe" handleClick={Subscribe} />
      <MartianPhotoFetcher />
    </div>
  );
}

export default App;
