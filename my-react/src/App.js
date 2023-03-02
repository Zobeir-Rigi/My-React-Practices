import logo from './logo.svg';
import './App.css';

const Greating = () =>{
  const hello = "hi"
  console.log({hello});
  return  <h1>hello </h1> ;
} 
function App() {
  return (
   <Greating />
  );
}

export default App;
