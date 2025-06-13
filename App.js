

/**
 * <div id= "parent">
 *  <div id= "child1">
 *    <h1>Hello from h1</h1>
 *    <h2>Hello from h2</h2>
 *  </div>
 *  <div id= "child2">
 *    <h1>Hello from h1</h1>
 *    <h2>Hello from h2</h2>
 *  </div>
 * </div>
 */
const parent = React.createElement(
    "div", { id: "parent" }, [
    React.createElement("div", { id: "child1" }, [
        React.createElement("h1", {}, "Hello from h1"),
        React.createElement("h2", {}, "Hello from h2")
    ]),
    React.createElement("div", { id: "child2" }, [
        React.createElement("h1", {}, "Hello from h1"),
        React.createElement("h2", {}, "Hello from h2")
    ])
]);




// const heading = React.createElement(
//     "h1",
//     { id: "heading" },// attributes
//     "Hello world from React"
// )
//createElement is just a object 
//h1 is a object that is a react element, react element is a plain object
//props = children + attributes
console.log(parent);
// Appending the heading to the root div
//it need a root element to render
const root = ReactDOM.createRoot(document.getElementById('root'));

//rendering the heading element to the root and converts the react element to a h1 element
root.render(parent);