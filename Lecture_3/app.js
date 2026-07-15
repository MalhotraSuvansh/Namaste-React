import React from "react";
import ReactDOM from "react-dom/client";

//React Element -> It is not a HTML element 
//React Element is an object which becomes html element when rendered on DOM
const heading = React.createElement("h1", {id: "heading"}, "Namaste React");


//this is how we create react element using jsx
//it is HTML like syntax
//JSX code is not Javascript means it is not understandable by browsers 
//So the code is transpiled before it reaches JS engine and parcel is working behind the scenes to transpile it
//Parcel gives responsiblity of this transpiled code to another package maanger named Babel
// JSX is converted to React Element which becomes an object which becomes html element when rendered on DOM
const jsxHeading = (<h1 id="heading">
    Namaste Reacct using JSX
</h1>);


const Title = () => (<h1 id="heading">
    Namaste Reacct using JSX
</h1>);

//react element
const title = (<h1 id="heading">
    Namaste React😎😎😎
</h1>);



//Component Composition
const HeadingComponent = () => (
    <div id="container">
        {Title()}
        <Title/>
        <Title></Title>
        {title}
        <h1 className="heading">Namaste React from functional component</h1>
    </div>
);


//Both fn and fn2 are same
const fn = () => {
    return true;
};  
//It is the shorthand way of writing one line in arrow functions
const fn2 = () => true;


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);
//When we render the content of html written before will be replaced by react element if the parent is same