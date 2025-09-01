# Basic

This is the first ever lesson so we learn from the real basic.

Already have html, css, js knowledge.

In HTML, we have a div

```html
<div id="root"></div>
<script src="/index.jsx" type="module"></script>
```

This is where we pass the React content

We have a jsx file contains React

1. Create a root

```jsx
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
```

2. Render some markup to the root

```jsx
root.render(<h1>Hello</h1>);
```

# Vite

Next, create app with Vite (pronounced as "viết")

```bash
npm create vite@latest
```

Naming project + select React framework + Choose variant Javascript

# Basic Knowledge

| **Libraries**                                                | **Frameworks**                                                             |
| ------------------------------------------------------------ | -------------------------------------------------------------------------- |
| Collection of reusable code                                  | Predetermined architecture – you follow a specified pattern of development |
| Reduces need to write repetitive/complex things from scratch | You work within the boundaries set by the framework                        |
| You control how/when it’s used. No/few boundaries.           | “Right” and “wrong” ways to use it                                         |

--> React is library but it's more like an ecosystem

❓ Why choose React

- Largest ecosystem/community
- Less magic (mostly use what is in React)
- Composable/ Declarative (lesson: React.createElement())
- Active development

# React.createElement

- createElement is created from early days and returns the Javascript object.
- Cons: if we need nested tags, we need nested createElement
- It is then replaced by JSX.

```jsx
import { createElement } from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
const reactElement = createElement("h1", null, "Hello from createElement!");

console.log(reactElement);

root.render(reactElement);
```

# JSX

- JSX is a way to write HTML inside JavaScript
- JSX = JavaScript + XML (HTML-like syntax) → Makes it easier to build UI with React.

```jsx
const element = <h1>Hello, world!</h1>;
root.render(element);
```

# Why React?

- Composable:
  - Reusable and interchangeable pieces of hte web that can be combined in various ways to create complex systems
  - Syntax:

```jsx
function MainContent() {
  return <h1>React is great!</h1>;
}
```

- Declarative
  - Lean on the library to handle the manual, tedious tasks
  - Simply "What should be done?", not "How should it be done?" (Imperative)

```jsx
// Declarative
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<h1 className="header">Hello, React!</h1>);

// Imperative
const h1 = document.createElement("h1");
h1.textContent = "Hello from textContent";
h1.className = "header";

document.getElementById("root").appendChild(h1);
```

# Housekeeping

- Vite prefers jsx file over js for better performance --> remember to change it

- Using src for img tag: using absolute path

```jsx
<img src="/src/asssets/react-logo.png" />
```

- In render block, only has 1 tag, e.g <main>, <section>, etc. Why? Remember how createElement works

# Pop quiz

1. Where does React put all of the elements I create in JSX when I
   call `root.render()`?

- put it in the `<div id="root"></div>`

2. What would show up in my console if I were to run this line of code:

```jsx
console.log(<h1>Hello world!</h1>);
```

- an object

3. What's wrong with this code:

```jsx
root.render(
    <h1>Hi there</h1>
    <p>This is my website!</p>
)
```

- only 1 parent element, in that parent element, many children elements if you want

4. What does it mean for something to be "declarative" instead of "imperative"?

- tell sth to do what (declarative), not how to do it (imperative)

5. What does it mean for something to be "composable"?

- reusable components, combine for more complex task

# Custom Components

```jsx
function Page() {
  return (
    <div>
      <header>
        <img src="/src/assets/logo.png" alt="logo" />
      </header>
      <main>
        <h1>Reasons I like React</h1>
        <ol>
          <li>
            React is a popular library, so I will be able to fit in with all the
            coolest devs out there! 😎
          </li>
          <li>
            I am more likely to get a job as a front end developer if I know
            React
          </li>
        </ol>
      </main>
      <footer>© 2025 Tran development. All rights reserved.</footer>
    </div>
  );
}

root.render(<Page />);
```

# Custom Components Quiz

1. What is a React component?

- A function that returns React elements

2. What's wrong with this code?

```jsx
function myComponent() {
  return <small>I'm tiny text!</small>;
}
```

- name of function must be in CamelCase `MyComponent` otherwise not running

3. What's wrong with this code?

```jsx
function Header() {
  return (
    <header>
      <img src="./react-logo.png" width="40px" alt="React logo" />
    </header>
  );
}

root.render(Header());
```

- It should be `root.render(<Header/>)`

# Fragments

- In the return part, there is only 1 parent element. If we use `<div>`, `<section>`, etc. It will create another parent tag wrapping the inner elements (html).

```html
<div id="root">
  <div>
    <ol>
      <li>
        React is a popular library, so I will be able to fit in with all the
        coolest devs out there! 😎
      </li>
      <li>
        I am more likely to get a job as a front end developer if I know React
      </li>
    </ol>
  </div>
</div>
```

- Using `<Fragment>`: we can avoid the unnecessary tag which could cause some issues (e.g using with FlexBox)

```html
<div id="root">
  <ol>
    <li>
      React is a popular library, so I will be able to fit in with all the
      coolest devs out there! 😎
    </li>
    <li>
      I am more likely to get a job as a front end developer if I know React
    </li>
  </ol>
</div>
```

- Using `<>`: don't need to import extra lib as we did for `<Fragment>`

# Custom Components - Parent/Child Components

- Add one component to another component

```jsx
function Page() {
  return (
    <>
      <Header />
      <main>
        <h1>Reasons I like React</h1>
      </main>
    </>
  );
}
```

# Styling with Classes

- Using `className`: remember that this is the DOM element, created by createElement.

```jsx
const h1 = document.createElement("h1");
h1.className = "header";
```

# Export Component

- `export default`: when importing, we can use any names

```jsx Header.jsx
export default function MyComponent() {...}
```

```jsx index.jsx
import WhateverName from "./Header";

root.render(<WhateverName />);
```

# Appendix: Outline

⌨️ Course Introduction

⌨️ What we'll learn

⌨️ First React Code

⌨️ First React Challenge

⌨️ Local Setup w/ Vite

⌨️ Libraries/Frameworks

⌨️ React.createElement()

⌨️ JSX

⌨️ Why React? It's Composable! https://youtu.be/x4rFhThSX04?t=2312

⌨️ Why React? It's Declarative!

⌨️ Random housekeeping

⌨️ ReactFacts Project - Markup

⌨️ Pop Quiz

⌨️ Custom Components

⌨️ Custom Components Challenge Part 2

⌨️ Custom Components Quiz

⌨️ Fragments

⌨️ Custom Components - Parent/Child Components

⌨️ Styling with Classes

⌨️ Organizing Components

⌨️ Make Mental Outline of Project

⌨️ Initial Project Setup

⌨️ ReactFacts - Navbar & Styling

⌨️ ReactFacts - Main Content Section

⌨️ ReactFacts - Coloring the Bullets

⌨️ ReactFacts - Add Background Image

⌨️ Section 1 Recap
