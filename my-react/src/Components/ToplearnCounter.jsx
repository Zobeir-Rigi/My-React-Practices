// import { Component } from "react";
// class ToplearnCounter extends Component{
    
//     render(){
//         console.log(this.props);
//         const {count} = this.props;
//         return (
//         <fragment>
//             <p>Counter: {Math.floor(Math.random() * 10)}</p>
//                     <p>Counter: {count}</p>
//             </fragment>
//             )

//     }
// }

// export default ToplearnCounter ;

import { Fragment } from "react";
const ToplearnCounter = (props) => {
    console.log(props);
    
 return (
   <Fragment>
     <p>Counter: {Math.floor(Math.random() * 10)}</p>
     <p>Counter: {props.count}</p>
     <p>Arr: {props.myArr}</p>
     <p>Login status: {props.islogged ? "True" : "False"}</p>
     <p>Login status2: {props.islogged && "True" }</p>
   </Fragment>
 );
};
ToplearnCounter.defaultProps={
  count:150
}
export default ToplearnCounter ;