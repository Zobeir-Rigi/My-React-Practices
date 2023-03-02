import logo from './logo.svg';
import './App.css';

// const Greating = () =>{
//   const hello = "Hi"
//   return  <h1>{hello} </h1> ;
// } ; 
  const hello = "Hi" ;


const Mentors = () =>{
  const mentor =[`ali` , `zo` , `ash`] ;
   return mentor.map(el =>
    <p> {hello +` ` + el}</p>
    // <p>{Greating()+`  `+ el}</p>
    )
};

function App() {
  return (
    <div>
   {/* <Greating /> */}
   <Mentors />
   </div>
  );
}

export default App;
