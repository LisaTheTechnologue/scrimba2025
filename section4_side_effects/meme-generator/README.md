# Project Overview

1. Controlled components (forms)
2. Functional programming in React
3. Fetching data
4. Side effects

# Project Detail

## Controlled components

A **controlled component** in React is a form element (like `<input>`, `<textarea>`, or `<select>`) whose value is managed by React state. Instead of the browser handling the input's value internally, React takes control—making the component’s behavior predictable and easier to manage.

### 🧠 How It Works

Here’s the flow:

1. **State Management**: You use `useState` (or another state hook) to store the input’s value.
2. **Binding**: The input’s `value` is set to that state variable.
3. **Event Handling**: The `onChange` event updates the state whenever the user types.
4. **Re-render**: React re-renders the component with the new value.

### ✍️ Example

```jsx
import { useState } from "react";

function ControlledInput() {
  const [name, setName] = useState("");

  return (
    <form>
      <label>Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>You typed: {name}</p>
    </form>
  );
}
```

### ✅ Benefits

- **Consistency**: React becomes the single source of truth.
- **Validation**: You can easily validate input as the user types.
- **Debugging**: Easier to trace and debug state changes.
- **Dynamic Behavior**: You can conditionally render or modify inputs based on state.

## Functional Programming

Functional programming in React is like giving your code a clean, predictable personality—it’s all about writing components and logic that are **pure**, **immutable**, and **declarative**. React didn’t invent functional programming, but it embraces it beautifully, especially with the rise of **hooks** and **functional components**.

---

### 🧠 Core Principles of Functional Programming in React

Here’s how React taps into the functional paradigm:

#### 1. **Pure Functions**

- A pure function always returns the same output for the same input.
- It has **no side effects**—meaning it doesn’t modify external state or variables.
- React components are often written as pure functions:
  ```jsx
  function Greeting({ name }) {
    return <h1>Hello, {name}!</h1>;
  }
  ```

#### 2. **Immutability**

- React encourages updating state immutably—never modifying the original object or array.
- Instead, you create a new version:
  ```jsx
  const addTodo = (text) => {
    setTodos((prev) => [...prev, { text, id: Date.now() }]);
  };
  ```

#### 3. **Declarative Code**

- You describe _what_ you want, not _how_ to do it.
- React’s JSX lets you declare UI based on state:
  ```jsx
  {
    isLoggedIn ? <Dashboard /> : <Login />;
  }
  ```

#### 4. **First-Class & Higher-Order Functions**

- Functions can be passed around like variables.
- You can create **Higher-Order Components (HOCs)** or use **custom hooks**:
  ```jsx
  function withLogger(Component) {
    return function Wrapped(props) {
      console.log("Rendering", Component.name);
      return <Component {...props} />;
    };
  }
  ```

#### 5. **Composition**

- Build complex UIs by composing smaller components.
- This makes your code modular and reusable.

---

### ⚙️ React Hooks: Functional Programming Superpowers

Hooks like `useState`, `useEffect`, and `useReducer` allow you to manage state and side effects in functional components—no need for classes.

```jsx
const [count, setCount] = useState(0);
```

This is a pure, declarative way to manage state.

---

### 📚 Want to Dive Deeper?

You can explore [Saeloun’s guide to functional programming in React](https://blog.saeloun.com/2024/07/25/functional-programming-in-react/) or check out [LogRocket’s breakdown of the fundamentals](https://blog.logrocket.com/fundamentals-functional-programming-react/).

## useEffect

### useEffect quiz

1. In what way are React components meant to be "pure functions"

- Given the same props or state, the component will always return the same content, or UI
- Rendering and re-rendering a component will never have any kind of side effect on an outside system

2. What is a "side effect" in React? What are some examples?

- Any code that affects or interacts with an outside system
- local storage, API, websockets, DOM manipulation

3. What is NOT a "side effect" in React? Examples?

- Anything that React is in charge of.
- Maintaining state, keeping the UI in sync with data, rendering DOM elements

4. When does React run your useEffect function? When does it NOT run
   the effect function?

- As soon as the component renders for the first time
- On every re-render of the component (assuming no dependencies array)
- Will NOT run the effect when the values of the dependencies in the array stay the same between renders

5. How would you explain what the "dependecies array" is?

- Second parameter to the useEffect function
- A way for React to know whether or not it should re-run the effect function

### Summary

- Allow us to interact with outside system, potentially have side effect inside
- useEffect has 2 params, the effect function and array of dependencies
- Dependencies array:
  - Determine when the function should run again
  - Empty array: run only once
  - No array: run on every single render of this component
- Effect function:
  - Allow to return a function that clean up the effects that you have created: not a MUST, only when you need to clean the effects that may lingering. Ex (stateNEffect.jsx): watchWindowWidth runs even when we toggle off the text --> need to be clean up

# Appendix: Outline

⌨️ Meme Generator State
⌨️ Controlled Components
⌨️ Planning data fetch
⌨️ Functional programming in React
⌨️ Fetching data in React
⌨️ useEffect()
⌨️ Meme Generator - Fetch Memes
⌨️ State and Effect practices
⌨️ useEffect cleanup function
⌨️ Meme Generator - Get random meme
⌨️ Sneak peak: refs
⌨️ useEffect practice: scrollIntoView()
⌨️ scrollIntoView() iFrame bug fix
