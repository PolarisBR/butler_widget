import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

(() => {
    window.onload = () => {
        const body = document.getElementsByTagName("body")[0];
        const app_dom_element = document.createElement("div")
        app_dom_element.setAttribute("id", "hook");
        console.log("Before");
        console.log(body);
        body.append(app_dom_element);
        console.log("After");
        ReactDOM.render(<App />, document.getElementById("hook"));
    };

})()