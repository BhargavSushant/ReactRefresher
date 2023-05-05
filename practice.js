# Export: the keyword

    ```
const person = {
    name: 'John Doe'
}
export default person  
```

// default keyword means that this is the default export of this file

// in some file say utility.js
export const clean = () => {... }
export const baseData = 10;
// in app.js or any other file we import the default export like this
import person from './person.js'
import prs from './person.js'
// named imports like this
import { baseData } from './utility.js'
import { clean } from './utility.js'

// we can also import everything from a file like this
import * as bundled from './utility.js'
// bundled is an object which contains all the exports from utility.js  as properties of bundled object 

// we can also import default and named exports together like this
import person, { baseData } from './utility.js'
// we can also import everything from a file like this

//==========================
// ES6 Classes
//==========================
// ES6 classes are just syntactical sugar over the prototype based inheritance
// ES6 classes are not hoisted  
// ES6 classes are first class citizens
// ES6 classes are executed in strict mode
gh repo clone WaToI / vscode - markdownmaid
// hoisting => moving the declaration of a variable to the top of the file 
// why ? because we can use a variable before it is declared
// why ? because of the execution context
// why ? because of the creation phase of the execution context
// what is execution context and why it is created ?
// execution context is created for every function call, it contains the arguments passed to the function, the value of this keyword, the scope chain and the variable declarations
// phases of execution context ? creation phase and execution phase
// what happens in the creation phase ? the scope chain is created and the variable declarations are hoisted
// what happens in the execution phase ? the code is executed line by line

// ES6 classes are not hoisted because they are not function declarations they are just syntactical sugar over the prototype based inheritance. 
// example : prototype based inheritance 
class Person {
    constructor() {
        this.name = 'John Doe'
    }
}
// the above code is just syntactical sugar over the prototype based inheritance

// ES6 classes are first class citizens because they can be passed as arguments to a function, they can be returned from a function and they can be assigned to a variable.
// example : passing a class as an argument to a function
const print = (person) => {
    console.log(person.name)
}

// ES6 classes are executed in strict mode because they are executed in the body of a function and all the code in the body of a function is executed in strict mode.

//==========================
// Classes, Properties and Methods
//==========================
// classes are blueprints for objects
// classes are used to create objects
// classes are used to create instances of objects, instances are objects created from a class.
// classes are used to create objects with the same properties and methods & behaviour 

// properties are the variables attached to the classes
// methods are the functions attached to the classes

// example : creating a class
class Person {
    constructor() {
        this.name = 'John Doe'
    }
}
// the above code is just syntactical sugar over the prototype based inheritance

// example : creating an instance of a class
const person = new Person()
console.log(person.name) // John Doe

// example : creating a class with properties and methods
class Person {
    name = 'John Doe'
    printName = () => {
        console.log(this.name)
    }
}
//=================================================
ReactDOM.render(componentToRender, targetNode)
// componentToRender is the component we want to render
// targetNode is the DOM node where we want to render the component
// example :    
ReactDOM.render(<Person />, document.querySelector('#app'))
// the above code will render the Person component in the DOM node with id app

ReactDOM.render() must be called after the JSX element declarations, just like how you must declare variables before using them.
    why ?
// because JSX is just syntactical sugar over the React.createElement() function
// example :
const element = <h1>Hello, world!</h1>;
// the above code is just syntactical sugar over the below code
const element = React.createElement(
    'h1',
    { className: 'greeting' },
    'Hello, world!'
);

//==========================
// ES6 Classes
//==========================
// ES6 classes are just syntactical sugar over the prototype based inheritance
// ES6 classes are not hoisted
// ES6 classes are first class citizens
// ES6 classes are executed in strict mode

// hoisting => moving the declaration of a variable to the top of the file 
// why ? because we can use a variable before it is declared
// why ? because of the execution context
// why ? because of the creation phase of the execution context
// what is execution context and why it is created ?
// execution context is created for every function call, it contains the arguments passed to the function, the value of this keyword, the scope chain and the variable declarations
// phases of execution context ? creation phase and execution phase
// what happens in the creation phase ? the scope chain is created and the variable declarations are hoisted
// what happens in the execution phase ? the code is executed line by line

// ES6 classes are not hoisted because they are not function declarations they are just syntactical sugar over the prototype based inheritance. 
// example : prototype based inheritance 
class Person {
    constructor() {
        this.name = 'John Doe'
    }
}
// the above code is just syntactical sugar over the prototype based inheritance

// ES6 classes are first class citizens because they can be passed as arguments to a function, they can be returned from a function and they can be assigned to a variable.
// example : passing a class as an argument to a function
const print = (person) => { console.log(person.name) }
// ES6 classes are executed in strict mode because they are executed in the body of a function and all the code in the body of a function is executed in strict mode.

//==========================
// Classes, Properties and Methods
//==========================
// classes are blueprints for objects
// classes are used to create objects
// classes are used to create instances of objects, instances are objects created from a class.
// classes are used to create objects with the same properties and methods & behaviour 

// properties are the variables attached to the classes
// methods are the functions attached to the classes

// example : creating a class
class Person {
    constructor() {
        this.name = 'John Doe'
    }
}
// the above code is just syntactical sugar over the prototype based inheritance

// example : creating an instance of a class
const person = new Person()
console.log(person.name) // John Doe

// example : creating a class with properties and methods
// This function prints "Hello World!" to the console.
function hello() {
    console.log("Hello World!");
}

// This code defines a class called Person. It has a name property that is initialized to 'John Doe',
// and a printName method that logs the value of the name property to the console. 

class Person {
    name = 'John Doe'
    printName = () => {
        console.log(this.name)
    }
}
//=================================================


ReactDOM.render(JSX, document.getElementById('challenge-node'));

//=================================================

React uses className instead of class
    // because class is a reserved keyword in JavaScript
    // react naming convention is camelCase for the property names and PascalCase for the component names
    // as oppose to HTML where the naming convention is lowercase for the property names and lowercase for the element names
    //=================================================

    // About self closing tags in React
    // in HTML we can use self closing tags for elements like img, br, hr, input, etc
    // in JSX we can use self closing tags for elements like img, br, hr, input, etc


    //=================================================

    Two ways to create React Components.
        // 1. Function Components
        example :
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}
explanation: 
    * above function is a React component because it accepts a single "props" object argument with data and returns a React element.
      * such components are called "function components" because they are literally JavaScript functions.
      * about stateless functional components:
      * if the function component does not have state then it is called "stateless functional component".
      * stateless functional components are more efficient than class components.
- why ? because they don't have state and lifecycle methods.
    - why ? because they don't have "this" keyword.
        - why ? - because they don't have "this" keyword they :-
            - don't have to bind the event handlers.
                - don't have to use arrow functions.

// 2. Class Components
example:
class Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}
explanation:
    above function is a React component because it accepts a single "props" object argument with data and returns a React element.
    such components are called "class components" because they are classes created with ES6 class syntax.

//=================================================

# Props in react
what are props in react ?
// props are the properties of the react components.   
// props are the arguments passed to the react components.
// props are the data passed to the react components.

# What are props used for ?
// props are used to pass data from one component to another component.
// props are used to pass data from parent component to child component.
// props are used to pass data from child component to parent component.
// props are used to pass data from parent component to multiple child components.

# How to pass props to a component ?
    // props are passed to the component as attributes.
    // props are passed to the component as attributes in the JSX element.
    // props are passed to the component as attributes in the JSX element in the render method of the component.
    // props are passed to the component as attributes in the JSX element in the render method of the component in the return statement of the render method of the component.


    Although I do have memory like a sieve but I couldn't help my self not dredging up about the time when I was called to work from office.
It brought back all the bad memories I had about commute and office politics.
I was so happy to be working from home.: (Its safe to say I am traumatized. 

Although a silver lining is I got to see my friends and colleagues for the first time in person. & recent rain in April was a blessing, as plesent smell of dry dirt drenching in first rain reminded me of my childhood home.

    petrichor ?
    petrichor is the earthy scent produced when rain falls on dry soil.


/**
 * Rollout          - the introduction of a new product or service
 * Warp Speed          - extremely fast
 * to turn the reins over - to give control to someone else
 * piece together - to put together
 * Reductions - shortneing some words in sentence to make it sound more natural
 * e.g. and=>an(d) d dropped
 * because => becuz (e) dropped or kuz (e) dropped
 * have=> (h)ave h dropped , similarly for some other helping verbs
 * 
 */

//=================================================
// Type Checking of Props in React
// Type Checking with PropTypes 
// example:
import PropTypes from 'prop-types';
// the above code imports the PropTypes object from the prop-types package
// the PropTypes object has a property called "string" , "number", isRequired  are functions

// example :
import PropTypes from 'prop-types';
const Person = (props) => {
    return <h1>{props.name}</h1>
}
Person.propTypes = {
    name: PropTypes.string
}
// the above code checks if the name property of the props object is a string or not
// if the name property of the props object is not a string then it will throw an error in the console
// the above code is just for development purpose, it is not for production

//=================================================
// passing props to a component
example:
// in the parent component
const App = () => {
    return (
        <Person name="John Doe" />
    )
}
// in the child component
const Person = (props) => {
    return <h1>{props.name}</h1>
}

// the above code passes the name property to the Person component as an attribute in the
//JSX element in the return statement of the render method of the App component

//=================================================

// passing props to a component using the spread operator
example:
// in the parent component
const App = () => {
    const person = {
        name: 'John Doe'
    }
    return (
        <Person {...person} />
    )
}
// in the child component
const Person = (props) => {
    return <h1>{props.name}</h1>
}
// the above code passes the name property to the Person component as an attribute in the JSX element in the return statement of the render method of the App component using the spread operator.

//=================================================

class App extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div>
                { /* Change code below this line */}
                <Welcome name={"sushant"} />
                { /* Change code above this line */}
            </div>
        );
    }
};

class Welcome extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div>
                { /* Change code below this line */}
                <p>Hello, <strong>{this.props.name}</strong>!</p>
                { /* Change code above this line */}
            </div>
        );
    }
};
//above example shows how to pass props to a component and how to access props in a component using this keyword and props object.

//=================================================

default props example 
// default props are the default values of the props
// default props are used when the props are not passed to the component
// default props are used when the props are undefined in the component 

// example :
// in the parent component
const App = () => {
    return (
        <Person />
    )
}
// in the child component
const Person = (props) => {
    return <h1>{props.name}</h1>
}
Person.defaultProps = {
    name: 'John Doe'
}
// the above code passes the name property to the Person component as an attribute in the

class component example with default props 
// in the parent component 


