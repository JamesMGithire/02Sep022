// import react from "reat"
// import ReactDOM from "react-dom"


let page = (
    <div>
        <i className="fa-solid fa-flag" style={{
            fontSize: "3rem",
            "color": "#6abaf2"
        }}></i>
        <h1>Fun fact about React</h1>
        <ul>
            <li>
                Was first released in 2013
            </li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K start on Github</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div>
);
ReactDOM.render(page, document.getElementById("body"));
// Custom components next

// A link that get's ... from react website
// When linking the js include <script src="" type="bable"></script>
// React is what defines JSX


// Use JSON.stringify
// javascript object. React elements that describe the real DOM


// Include everything in one element as a parent element
// <></> >>

// Declarative is using the element eg let page = (<h1>This<h1>)
// Tell the program what to acomplish and it would do it by itself
// Imparative is by creating the element eg let title = document.createElement("h1");
// Tell the computer how to do everything
// Peanut butter sandwich instructions >> Computer Sci 101 Havard


// title.textContent = "This"\
// Composable >> Create small pieces and create a whole from them
// ////////////////////////////////////////////////

// Creating custom components
// A function that returns react elements === component
function Temp() {
    return (
        <div>
            <i className="fa-solid fa-flag" style={{
                fontSize: "3rem",
                "color": "#6abaf2"
            }}></i>
            <NavItem/>
            <h1>Fun fact about React</h1>
            <ul>
                <li>
                    Was first released in 2013
                </li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K start on Github</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    )
}
// ReactDOM.render(Temp(), document.getElementById("body"));
ReactDOM.render(<Temp />, document.getElementById("body"));


// import react from react
// import ReactDOM from "react-dom"

function Component() {
    return (
        <>
            <>//////////////New Content///////////////</>
            <h1>Reasons Why I am Learning React</h1>
            <ol>
                <li>Get a high earning job</li>
                <li>Security : Housing, Food, Amenities</li>
                <li>Improve my knowledge base</li>
                <li>To make code simpler</li>
                <li>Create cool stuff</li>
            </ol>
            <footer>
                <small>Ⓒ James Project 2022</small>
            </footer>
        </>
    )
}
ReactDOM.render(<Component />, document.getElementById("newComp"));


// /////////////////////////////////////////////////////
// It is a jsx object that is rendered by react
// It can be declared by a capitalised function that can be called in render function as a self closing tag.


// There is nothing wrong with the code. What matters is what will be used to refer to the return value of the function. If using self closing tags rather than parentheses, the function should start with a capital letter.

// It is alright after using the "</>"

// ////////////////////////////////////////////////
// Creating A child and parent component
// import Page from "./Page";

// import NavItem from "./NavItem";

function NavItem() {
    return (<ul className={"flex justify-evenly list-none position-absolute width300 space-evenly right0 margin0"}>
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
    </ul>);
}

// export default 
function Page() {
    return (
        <div>
            <Header />
            <p>Some text goes here</p>
            <Body />
        </div>
    );
}
// import Header from "./Header"
function Header() {
    return (<h1>Hello World</h1>);
}

// import Body from "./Body"
function Body(){
    return(
        <ul>
            <li>Thus</li>
            <li>That</li>
            <li>Thrust</li>
        </ul>)
}

// ReactDOM.render(<Header/>,<Page/>);
ReactDOM.render(<Page />, document.getElementById("comp02"));
