import React, { useState } from "react";
import ReactDOM from "react-dom";
import Child from "./Child";
export default function Parent(){
    let [inputValue, setInputValue] = useState("");
    function update(str){
        setInputValue(str);
    }
    return (
        <div className="parent">
            <h1>Parent Component</h1>
            <p>{inputValue}</p>
            <Child updateHandler = {update}/>
        </div>
    );
}