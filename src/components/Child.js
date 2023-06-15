import React from "react";
import ReactDOM from "react-dom";

function Child({updateHandler}){
    return (
        <div className="child">
            <h1>Child Component</h1>
            <input className="child" type='text' onChange={(e)=>updateHandler(e.target.value)}></input>
        </div>
    );
}

export default Child;