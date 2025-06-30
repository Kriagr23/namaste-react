import React from "react";
import ReactDOM from "react-dom/client";
//React element 
const heading = <h1 className="head">Hello World from JSX</h1>;
//Root for React app whatever we create in React will be rendered inside this root
const root = ReactDOM.createRoot(document.getElementById("root"));

//React Component 
//what is component? 1) class based components-old 2)functional based component-new
//React functional component - normal js component which returns some JSX element - name it with capital letter 
const num = 10;
const HeadingComponent = () => (
    <div id="container">
        {heading}
        {num}
        <TitleComponent/>
        <h1 className="head"> Namaste React Functional Component</h1>
    </div>
     
)
//component composition - one component can be used inside another component
const TitleComponent = () => (
    <div id="title">  
        <h1 className="title"> Namaste React Functional Component from title</h1>
    </div>
)
//const HeadingComponent2 = () => (<h1 className="head"> Namaste React Functional Component diff syntax </h1>);
//syntax that babel understands that it is a component 
root.render(<HeadingComponent />);
//root.render(heading);