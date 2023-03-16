import { Component } from "react";
class ToplearnCounter extends Component{
    render(){
        return <p>Counter: {Math.floor(Math.random() * 10)}</p>;
    }
}

export default ToplearnCounter ;





// const ToplearnCounter = () => {
//  return <p>Counter: {Math.floor( Math.random()*10)}</p> ;
// };
// export default ToplearnCounter ;