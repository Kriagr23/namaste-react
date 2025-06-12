const heading = React.createElement(
    "h1",
    {},
    "Hello world from React"
)
// Appending the heading to the root div
//it need a root element to render
const root = ReactDOM.createRoot(document.getElementById('root'));

//rendering the heading element to the root
root.render(heading);