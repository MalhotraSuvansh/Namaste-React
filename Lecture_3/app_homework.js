import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("div",
    {id:"title"},
    [
        React.createElement("h1", {key:"h1"}, "I believe I can fly"),
        React.createElement("h2", {key: "h2"}, "I believe I can touch the sky")
    ]
);

const HeadingJSX = () =>(
    <div id="title">
        <h1>You are my fire</h1>
        <h2>The one desire</h2>
        <h3>Believe when I say that I want it that way</h3>
        <h4>Tell me why</h4>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingJSX/>);