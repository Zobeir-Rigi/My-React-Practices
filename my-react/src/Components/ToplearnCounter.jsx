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


const ToplearnCounter = ({count}) => {
    console.log(count);
    
 return (
 <fragment>
     <p>Counter: {Math.floor( Math.random()*10)}</p>
     <p>Counter: {count}</p>
 </fragment>
 );
};
export default ToplearnCounter ;