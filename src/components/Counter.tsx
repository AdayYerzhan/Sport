import {useState} from "react";
import * as classes from './Counter.module.scss';

export const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1)
    };
    console.log('classes', classes)
    console.log('btn', classes.btn)

    return (
        <div>
            <h1>{count}</h1>
            <button className={classes.btn} onClick={increment}>Increment</button>
        </div>
    )
}

// import React from "react";
// import {useState} from "react";
// import classes from './Counter.module.scss';
// console.log('Counter1')
//
// export const Counter = () => {
//     console.log('classes', classes)
//     const [count, setCount] = useState(0);
//
//     const increment = () => {
//         setCount(count + 1)
//     };
//
//     return (
//         <div className={classes.btn}>
//             <h1>{count}</h1>
//             <button onClick={increment}>Increment</button>
//         </div>
//     )
// }