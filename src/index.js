import React from "react";
import ReactDOM from "react-dom";
import ButlerWidget from "./widget";

(() => {
    window.onload = () => {
        const body = document.getElementsByTagName("body")[0];
        const app_dom_element = document.createElement("div")
        app_dom_element.setAttribute("id", "hook");
        console.log("Before");
        console.log(body);
        body.append(app_dom_element);
        console.log("After");
        ReactDOM.render(<ButlerWidget config={window.config} />, document.getElementById("hook"));
    };

})()