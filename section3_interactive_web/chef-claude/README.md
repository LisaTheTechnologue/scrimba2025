<!-- vscode-markdown-toc -->

- 1. [Project Overview](#ProjectOverview)
- 2. [Static vs Dynamic](#StaticvsDynamic)
- 3. [Event Listeners](#EventListeners)
- 4. [State](#State)
  - 4.1. [Review Props](#ReviewProps)
  - 4.2. [State](#State-1)
  - 4.3. [View](#View)
  - 4.4. [useState](#useState)
- 5. [State: Quiz](#State:Quiz)
- 6. [Review JS: Ternary Operator](#ReviewJS:TernaryOperator)
- 7. [Arrays](#Arrays)
- 8. [Objects](#Objects)
- 9. [Form](#Form)
- 10. [Conditional rendering](#Conditionalrendering)
  - 10.1. [Quiz](#Quiz)
- 11. [State vs Prop](#StatevsProp)
- 12. [Local vs Shared State](#LocalvsSharedState)
  - 12.1. [Quiz](#Quiz-1)
- 13. [Using AI](#UsingAI)
- 14. [Appendix: Outline](#Appendix:Outline)

<!-- vscode-markdown-toc-config
	numbering=true
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

Note: Add API to `ai.js` before starting the project

## 1. <a name='ProjectOverview'></a>Project Overview

- User enters ingredients they have
- Using Claude/Hugging Face AI to generate recipes based on the input ingredients

## 2. <a name='StaticvsDynamic'></a>Static vs Dynamic

- Static:

  - read-only, no user-driver changes to data
  - ex: blogs, news, recipes

- Dynamic:
  - read & write, highly interactive
  - displays your data
  - ex: bank, airbnb (rating, book), ecommerce

## 3. <a name='EventListeners'></a>Event Listeners

- Check challenges/EventListener.jsx

```jsx
// inline function
<button
  onClick={function () {
    console.log("Inline");
  }}
>
  Click me
</button>;

// function in block
// notice it was called without ()
function handleClick() {
  console.log("Block");
}
<button onClick={handleClick}>Click me</button>;

// this works on web mode only, not phone
onMouseOver = {
  function() {
    console.log("Hover image");
  },
};
```

- OnSubmit: handle the submission of a form (with Enter or Submit button)

  - React requires the input to have `name`
  - `event.preventDefault()`: in modern world, we avoids showing data on url like this `http://localhost:5173/?ingredient=teest`

```jsx
function handleSubmit(event){
    event.preventDefault()
    console.log("Submitted!")
}

<form onSubmit={handleSubmit}>
<input name="ingredient">
</form>
```

## 4. <a name='State'></a>State

### 4.1. <a name='ReviewProps'></a>Review Props

- Properties being passed into a component.
- A component receiving props is not allowed to modify these props (immutable)

### 4.2. <a name='State-1'></a>State

- Values that are managed by the components.
- You want to change values that should be saved/displayed --> Use `state`

### 4.3. <a name='View'></a>View

- User interface that people sees as a user. It is a function of the state of the component.

- 3 main points:

1. Render

- React runs your function and displays whatever gets returned.
- The function will only re-run if
  - (1) It receives new props from above
  - (2) Its internal state values change

2. setState

- Changing a local, non-state variable doesn't cause React to re-render component
- Changing state with a built-in `setState` function does.

3. view = function(state)

- When state changes and React re-runs (re-renders) your component, sth new gets returned and replaces what used to be on the page.

✨Conclusion: developers ensure the data is up-to-date in the function, React will handle the rest (show it to the UI without extra steps of handling DOM)

### 4.4. <a name='useState'></a>useState

- `challenges/useState.jsx` : remember to comment out the App.css

- Without `useState`, the page do not re-render so the onClick not working

```jsx
let test = "Yes"; // 'let': allow changing; 'const': constant value
test = "Heck Yes";

function changeBtn() {
  test = "No";
}

<button onClick={changeBtn} className="value">
  {test}
</button>;
```

- `useState` returns an array, 1 value and 1 function

```jsx
const result = React.useState("Hello")
console.log(result)

<button className="value">{result[0]}</button>
```

- The value will not be update after clicking just like we tested. Only the `function` does. The `function` will re-render page.

```jsx
let [whatever, func] = React.useState("Yes");
whatever = "Heckyes";
// func("new function") : causes infinite loop
```

- Warning: using `count-1` to not directly changing the data
  - Why not `counter--` or `--counter`? - These operators mutate variables directly. Example:
    - `counter--` returns the old value before decrement.
    - It also tries to mutate counter, but counter isn’t a mutable state — it’s just a snapshot value. So counter-- doesn’t work as intended and could introduce confusing bugs.
  - `count-1`: Take the current state value, compute counter - 1, and ask React to update state to that.

```jsx
const [counter, setCounter] = React.useState(0);
function handleDecrease() {
  setCounter(counter - 1);
}
```

- **Callback Function**: Using callback to update state

```jsx
function handleDecrease() {
  setCounter(function (prevCount) {
    return prevCount - 1;
  });
}

function handleDecrease() {
  setCounter((prevCount) => prevCount - 1);
}
```

- **Why Callback?**: 🙌 if you need old value to help you determine the new value of state. Using state directly will prefer to the original value, instead of the previous value (if changing). Test the below code to see.

```jsx
function handleDecrease() {
  setCounter((prevCount) => prevCount - 1);
  setCounter((prevCount) => prevCount - 1);
  setCounter((prevCount) => prevCount - 1);
}

function handleIncrease() {
  setCounter(count + 1);
  setCounter(count + 1);
  setCounter(count + 1);
}
```

## 5. <a name='State:Quiz'></a>State: Quiz

1. You have 2 options for what you can pass in to a
   state setter function (e.g. `setCount`). What are they?

   1. New version of state that we want to use as the replacement
   2. Callback. Must return what we want the new value of state to be. Will receive old version of state as a parameter so we can use it to help determine what we want the new value of state to be.

2. When would you want to pass the first option (from answer
   above) to the state setter function?

Whenever we don't really care about (or need) old value

3. When would you want to pass the second option (from answer
   above) to the state setter function?

Whenever we do care about prev value in state and need it help us determine what new value should be.

## 6. <a name='ReviewJS:TernaryOperator'></a>Review JS: Ternary Operator

- `challenges/Ternary.jsx` : remember to comment out the App.css

```js
{
  isGoingOut ? "Yes" : "No";
}
```

- Note: We should care about the accessibility by using `aria-label`

## 7. <a name='Arrays'></a>Arrays

- `challenges/Arrays.jsx` : remember to comment out the App.css

- Append / Add / Push: We create a new array and input the new value at the end

```jsx
const [ingredients, setIngredients] = useState([]);
function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const ingredient = formData.get("ingredient");

  setIngredients((prevList) => [...prevList, ingredient]);
  console.log(ingredients);
}
```

## 8. <a name='Objects'></a>Objects

- `challenges/Objects.jsx` : remember to comment out the App.css

```jsx
const [contact, setContact] = React.useState({
  firstName: "John",
  lastName: "Doe",
  phone: "+1 (212) 555-1212",
  email: "itsmyrealname@example.com",
  isFavorite: true,
});
function toggleFavorite() {
  setContact((prev) => {
    return {
      ...prev,
      isFavorite: !prev.isFavorite,
    };
  });
}
```

## 9. <a name='Form'></a>Form

- `challenges/Form.jsx` : remember to comment out the App.css

- Imperative coding (not recommend)

```jsx
function handleSubmit(e) {
  e.preventDefault();
  const formEl = e.currentTarget;
  const formData = new FormData(formEl);
  const email = formData.get("email");

  formEl.reset();
}

return (
  <form onSubmit={handleSubmit} method="post">
    ...
  </form>
);
```

- React do the common tasks for us

```jsx
function handleSubmit(e) {
  const email = formData.get("email");
}

return <form action={handleSubmit}>...</form>;
```

- `Object.fromEntries(formData)`: get all value of the form in one line. Exception the checkbox

```jsx
function signUp(formData) {
  const data = Object.fromEntries(formData);

  const dietaryData = formData.getAll("dietaryRestrictions");

  const allData = {
    ...data,
    dietaryRestrictions: dietaryData,
  };

  console.log(allData);
}
```

## 10. <a name='Conditionalrendering'></a>Conditional rendering

- `challenges/ConRendering.jsx` : remember to comment out the App.css

- `&&` is to express the idea of "if else" in JS, where "else" means "nothing/null". Ex: if isShown = true, then show <p></p>; else nothing"

```jsx
{
  isShown && <p>{props.punchline}</p>;
}
```

- Disadvantage: if `isShown = 0`, it is displayed as `0` on UI. We can use this instead

```jsx
{
  isShown ? <p>{props.punchline}</p> : null;
}
```

### 10.1. <a name='Quiz'></a>Quiz

1. What is "conditional rendering"?

- Want to only sometimes display something on the page based on some kind of condition

2. When would you use &&?

- Want to either display something or NOT display something

3. When would you use a ternary?

- Need to decide which of 2 things to display

4. What if you need to decide between > 2 options on
   what to display?

- a normal `if/ else if / else` or `switch`

## 11. <a name='StatevsProp'></a>State vs Prop

- Parent to Children
- `challenges/Props.jsx` : remember to comment out the App.css

- Allows parent components to share data with child components:

  - When you define a state variable in a parent component using useState, you can pass that variable (and even its setter function) down to child components via props. This enables the child to read or even update the parent’s state.

  - 👀 Caution: Passing setState functions as props can lead to tight coupling between components. If you find yourself doing this too often, consider:
    - Using **context** for global state.
    - Refactoring to keep components more independent.

- `challenges/Props1.jsx` : remember to comment out the App.css
  - Action like onClick: passing just like the state

## 12. <a name='LocalvsSharedState'></a>Local vs Shared State

- Local State: confine to a single component

  - Use cases: UI toggles (modals, dropdowns), Form inputs, component-specific logic
  - If other components don't need it, don't lift it up

- Shared State: need to be accessed or modified by multiple components

  - Use cases: auth status, theme settings, data fetched from APIs
  - Avoid unnecessary prop drilling

- Derived State: compute from props or other state values

  - Use cases: calculated values, avoid redundant state updates
  - Avoid duplicating props into state unless necessary

- Example: look at Final+Pad files
  - Local: Using `on` inside Pad component: the Parent cannot know the state of the child --> difficult to handle the overall state (for ex, turn ALL pads on)
  - Shared: Using `on` in Final.

### 12.1. <a name='Quiz-1'></a>Quiz

1. Performance: Coding all logic in 1 vs Break it into Child Component?

- Using Child Component is better because:
  - it limits re-renders to only the affected parts. React’s virtual DOM is efficient, but it still benefits from component isolation and memoization strategies.

## 13. <a name='UsingAI'></a>Using AI

- HuggingFace
  - Register/Log in
  - Account Settings > Access Tokens: Fine-grained, Token Name, Check "Make calls to Intefere Providers"
  - Add API in `ai.js`

## 14. <a name='Appendix:Outline'></a>Appendix: Outline

⌨️ Section 3 Intro
⌨️ Chef Claude: Header
⌨️ Chef Claude: form
⌨️ Chef Claude: Project overview
⌨️ Event Listeners
⌨️ Chef Claude: Map ingredients list
⌨️ Props vs. State: Props
⌨️ Props vs. State: State
⌨️ useState
⌨️ useState array destructuring
⌨️ Changing state
⌨️ State practice
⌨️ Updating state with a callback function
⌨️ Changing state quiz
⌨️ Ternary practice
⌨️ Toggling state
⌨️ Complex state: Arrays
⌨️ Chef Claude: Refactor array state
⌨️ Complex state: Objects
⌨️ Complex state: updating state objects
⌨️ React forms intro
⌨️ Form basics
⌨️ Form submission
⌨️ Form action
⌨️ Chef Claude: Refactor form submission
⌨️ Forms: textarea & defaultValue
⌨️ Forms: radio
⌨️ Forms: checkbox
⌨️ Forms: select and option
⌨️ Forms: Object.fromEntries
⌨️ Chef Claude: conditional rendering intro
⌨️ Conditional rendering
⌨️ Chef Claude
⌨️ Chef Claude: Get recipe placeholder challenge
⌨️ Passing state as props
⌨️ Setting state from child components
⌨️ Passing data around React
⌨️ Sound pads challenge
⌨️ Chef Claude challenge: refactor to separate components
⌨️ API Sign Ups
⌨️ AI code walkthrough
⌨️ Challenge quiz: prep to get recipe from the AI chef
⌨️ Challenge: Get recipe from the AI chef
⌨️ Format recipe response
⌨️ Section 3 Outro
