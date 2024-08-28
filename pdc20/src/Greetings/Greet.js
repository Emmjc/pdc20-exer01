import React from 'react';

//JSX file 
//make PROPS as an argument inside the Greet()
// name in the props is a variable
function Greet(props){
    return (
        <div>
            <h1> Hello, {props.name}!</h1>
        </div>
    );
}
export default Greet;