const heading = React.createElement("h1",
    {id : "heading"},
    "Hello World from React");


const parent = React.createElement(
    "div",
    {id : "parent"},
    [
        React.createElement(
            "div",
            {id : "child"}, [
            React.createElement("h1", {}, "I am h1 tag"), //Array of Children
            React.createElement("h2", {}, "Meow Meow")
            ]
        ),
        React.createElement(
            "div",
            {id : "child2"}, [
            React.createElement("h1", {}, "I am h1 tag"), //Array of Children
            React.createElement("h2", {}, "Meow Meow")
            ]
    )
    ]
)

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);