# React Refresher

### Create a Controlled Input
(https://learn.freecodecamp.org/front-end-libraries/react/create-a-controlled-input) 

In a web application, form control elements like text input fields (input) and text areas (textarea) have their own state that is managed by the browser in the Document Object Model (DOM). This means that as the user types or modifies the content in these input fields, the changes are directly reflected in the DOM.

However, when using React, you have the option to handle this state differently. Instead of relying on the DOM to manage the state of these input fields, you can move that state into a React component's state.

By doing this, you are taking advantage of React's ability to manage and control the state of components. React becomes responsible for tracking and updating the value of the input field, rather than relying on the DOM. This allows for more control and flexibility in managing the user's input within the application.

> TASK :
> * There is a `controlled input` in the code editor below, along with a `controlled component` called `ControlledInput`.
> - Create a component called ControlledInput for a controlled input element
> - Initialize the component's state with an input property set to an empty string
> - Implement a method called handleChange(event) to update the input property with the string from the input element
> - In the render method, place the input element above the h4 tag
> - Set the value attribute of the input element to the input property of the component's state
> - Add an onChange event handler to the input element, calling the handleChange method
> - The handleChange method processes the typed text, updates the component's state, and renders it as the input value
> - Ensure proper bindings in the constructor for the necessary functionality.
> 

```jsx
class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
    // Change code below this line
    this.handleChange = this.handleChange.bind(this);
    // Change code above this line
  }
  // Change code below this line
  handleChange(event) {
    this.setState({ input: event.target.value });
  }
  // Change code above this line
  render() {
    return (
      <div>
        {/* Change code below this line */}
        <input value={this.state.input} onChange={this.handleChange} />
        {/* Change code above this line */}
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
}

// a joke can harm you if you let it
``` 



>
---
### Create a Controlled Form
(https://learn.freecodecamp.org/front-end-libraries/react/create-a-controlled-form)



>
### Pass State as Props to Child Components
(https://learn.freecodecamp.org/front-end-libraries/react/pass-state-as-props-to-child-components)



This pattern illustrates some important paradigms in React.  
* The first is ``` UNIDIRECTIONAL DATA FLOW. ```
  * State flows in one direction down the tree of your application's components, from the stateful parent component to child components. The child components only receive the state data they need. 
* The second is that ```complex stateful apps can be broken down into just a few, or maybe a single, stateful component.```  
  *  The rest of your components simply receive state from the parent as props, and render a UI from that state. It begins to create a **separation** where **state management** is handled in one part of code and **UI rendering** in another. 
This principle of separating state logic from UI logic is one of React's key principles. When it's used correctly, it makes the design of complex, stateful applications much easier to manage.

The MyApp component is stateful and renders a Navbar component as a child. Pass the name property in its state down to the child component, then show the name in the h1 tag that's part of the Navbar render method. name should appear after the text Hello, my name is:.

```jsx
class MyApp extends React.Component {//parent
  constructor(props) {
    super(props);
    this.state = {
      name: 'CamperBot'
    }
  }
  render() {
    return (
       <div>
         {/* Change code below this line */}
         <Navbar name={this.state.name}/>
         {/* Change code above this line */}
       </div>
    );
  }
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div>
      {/* Change code below this line */}
      <h1>Hello, my name is: {this.props.name} </h1>
      {/* Change code above this line */}
    </div>
    );
  }
};
```