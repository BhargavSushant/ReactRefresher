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
