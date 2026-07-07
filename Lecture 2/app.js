import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1",
    {id : "heading"},
    "Hello World from React");


//Nested Elements     

const parent = React.createElement(
    "div",
    {id : "parent"},
    [
        React.createElement(
            "div",
            {id : "child", key : "child1"}, [
            React.createElement("h1", {key: "h1"}, "I am h1 tag"), //Array of Children
            React.createElement("h2", {key: "h2"}, "Meow Meow")
            ]
        ),
        React.createElement(
            "div",
            {id : "child2", key: "child2"}, [
            React.createElement("h1", {key: "h1-1"}, "I am h1 tag"), //Array of Children
            React.createElement("h2", {key: "h2-2"}, "Meow Meow")
            ]
        )
    ]
)

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);