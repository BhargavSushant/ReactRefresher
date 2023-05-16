```
export default person 

``` 

> default keyword means that this is the default export of this file

> in some file say utility.js 
```
export const clean = () => {... }
export const baseData = 10;
```
> in app.js or any other file we import the default export like this 

```
import person from './person.js'
import prs from './person.js'
```
named imports like this 

```
import { baseData } from './utility.js'
import { clean } from './utility.js' 
```

> we can also import everything from a file like this
import * as bundled from './utility.js'
> bundled is an object which contains all the exports from utility.js  as properties of bundled object 



---
# ES6 Classes
---
* ES6 classes are just syntactical sugar over the prototype based inheritance
* ES6 classes are **not hoisted**  
* ES6 classes are **first class citizens**
* ES6 classes are executed in **strict mode**

* hoisting => moving the declaration of a variable to the top of the file 

    * why ? because we can use a variable before it is declared
    * why ? because of the execution context
    * why ? because of the creation phase of the execution context 
* what is execution context and why it is created ?
    * execution context is created for every function call, it contains the arguments passed to the function, the value of this keyword, the scope chain and the variable declarations
    * phases of execution context ? **creation phase** and **execution phase**
        * what happens in the creation phase ? 
          * the scope chain is created and the variable declarations are hoisted.
        * what happens in the execution phase ? 
          * the code is executed line by line.

* ES6 classes are not hoisted because they are not function declarations they are just syntactical sugar over the prototype based inheritance. 
> example : prototype based inheritance 
```
class Person {
    constructor() {
        this.name = 'John Doe'
    }
}

```
> the above code is just syntactical sugar over the prototype based inheritance

> ES6 classes are first class citizens because they can be passed as arguments to a function, they can be returned from a function and they can be assigned to a variable.
> example : passing a class as an argument to a function
```
const print = (person) => {
    console.log(person.name)
}
```
> ES6 classes are executed in strict mode because they are executed in the body of a function and all the code in the body of a function is executed in strict mode.

>==========================
> Classes, Properties and Methods
>==========================
> classes are blueprints for objects
> classes are used to create objects
> classes are used to create instances of objects, instances are objects created from a class.
> classes are used to create objects with the same properties and methods & behaviour 

> properties are the variables attached to the classes
> methods are the functions attached to the classes

> example : creating a class
class Person {
    constructor() {
        this.name = 'John Doe'
    }
}
> the above code is just syntactical sugar over the prototype based inheritance

> example : creating an instance of a class
const person = new Person()
console.log(person.name) > John Doe

> example : creating a class with properties and methods
class Person {
    name = 'John Doe'
    printName = () => {
        console.log(this.name)
    }
}
---
ReactDOM.render(componentToRender, targetNode)
> componentToRender is the component we want to render
> targetNode is the DOM node where we want to render the component
> example :    
ReactDOM.render(<Person />, document.querySelector('#app'))
> the above code will render the Person component in the DOM node with id app

ReactDOM.render() must be called after the JSX element declarations, just like how you must declare variables before using them.
    why ?
> because JSX is just syntactical sugar over the React.createElement() function
> example :
const element = <h1>Hello, world!</h1>;
> the above code is just syntactical sugar over the below code
const element = React.createElement(
    'h1',
    { className: 'greeting' },
    'Hello, world!'
);

>==========================
> ES6 Classes
>==========================
> ES6 classes are just syntactical sugar over the prototype based inheritance
> ES6 classes are not hoisted
> ES6 classes are first class citizens
> ES6 classes are executed in strict mode

> hoisting => moving the declaration of a variable to the top of the file 
> why ? because we can use a variable before it is declared
> why ? because of the execution context
> why ? because of the creation phase of the execution context
> what is execution context and why it is created ?
> execution context is created for every function call, it contains the arguments passed to the function, the value of this keyword, the scope chain and the variable declarations
> phases of execution context ? creation phase and execution phase
> what happens in the creation phase ? the scope chain is created and the variable declarations are hoisted
> what happens in the execution phase ? the code is executed line by line

> ES6 classes are not hoisted because they are not function declarations they are just syntactical sugar over the prototype based inheritance. 
> example : prototype based inheritance 
class Person {
    constructor() {
        this.name = 'John Doe'
    }
}
> the above code is just syntactical sugar over the prototype based inheritance

> ES6 classes are first class citizens because they can be passed as arguments to a function, they can be returned from a function and they can be assigned to a variable.
> example : passing a class as an argument to a function
const print = (person) => { console.log(person.name) }
> ES6 classes are executed in strict mode because they are executed in the body of a function and all the code in the body of a function is executed in strict mode.

>==========================
> Classes, Properties and Methods
>==========================
> classes are blueprints for objects
> classes are used to create objects
> classes are used to create instances of objects, instances are objects created from a class.
> classes are used to create objects with the same properties and methods & behaviour 

> properties are the variables attached to the classes
> methods are the functions attached to the classes

> example : creating a class
class Person {
    constructor() {
        this.name = 'John Doe'
    }
}
> the above code is just syntactical sugar over the prototype based inheritance

> example : creating an instance of a class
const person = new Person()
console.log(person.name) > John Doe

> example : creating a class with properties and methods
> This function prints "Hello World!" to the console.
function hello() {
    console.log("Hello World!");
}

> This code defines a class called Person. It has a name property that is initialized to 'John Doe',
> and a printName method that logs the value of the name property to the console. 

class Person {
    name = 'John Doe'
    printName = () => {
        console.log(this.name)
    }
}
---


ReactDOM.render(JSX, document.getElementById('challenge-node'));

---
React uses **className** instead of **class**
* because class is a reserved keyword in JavaScript
* react naming convention is camelCase for the property names and PascalCase for the component names
* As oppose to HTML where the naming convention is lowercase for the property names and lowercase for the element names
---

### About self closing tags in React
> in JSX we can use self closing tags for elements like img, br, hr, input, etc


---

Two ways to create React Components.
 1. Function Components
   ###### example : 
```
function Welcome(props) {
return <h1>Hello, {props.name}</h1>;
}
```

**explanation** :  
above function is a React component because it accepts a single **"props"** object argument with data and returns a React element.
such components are called **"function components"** because they are literally JavaScript functions.

2. Class Components

---

