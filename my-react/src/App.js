import Button from "./Components/button";
import Mentors from "./Components/Mentors";
// import MartianPhotoFetcher from "./Components/fetch";
// import { ClickMe, Download, Subscribe } from "./ButtonFunctions";
import Alert from "./Components/Alert";
import Counter from "./Components/counter";
import Highlighter from "./Components/HighLighter";
import Ternary from "./Components/Ternary";
import Loop from "./Components/Loop";
import ToplearnCounter from "./Components/ToplearnCounter";

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
    <ToplearnCounter count={4+7}/>
    <ToplearnCounter myArr={[1,2,3,4,5]} islogged={true} />
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
      {/* <MartianPhotoFetcher /> */}
    </div>
  );
}

export default App;
