import React from "react";
import ReactDOM from "react-dom";

export default function Child({updateHandler}){
    return (
        <div className="child">
            <h1>Child Component</h1>
            <input type='text' onChange={(e)=>updateHandler(e.target.value)}></input>
        </div>
    );
}