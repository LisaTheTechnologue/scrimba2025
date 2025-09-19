<!-- vscode-markdown-toc -->

- 1. [Props: Intro](#Props:Intro)
- 2. [Props: Quiz](#Props:Quiz)
- 3. [Props: Destructive](#Props:Destructive)
- 4. [Props: Non string](#Props:Nonstring)
- 5. [Importing Static Assets](#ImportingStaticAssets)
- 6. [React Can Render Arrays](#ReactCanRenderArrays)
- 7. [Map](#Map)
- 8. [Map: Quiz](#Map:Quiz)

<!-- vscode-markdown-toc-config
	numbering=true
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

## 1. <a name='Props:Intro'></a>Props: Intro

1. Create a Resusable Component

2. Passing data to component

```jsx
<Contact
  img="/src/assets/fluffykins.png"
  name="Fluffykins"
  tel="(212) 555-2345"
  email="fluff@me.com"
/>
```

3. Receiving props in a component

Normally we use `props` but we can use whatever

To test: `console.log()`.
--> shows the data that was passed in
and how many times the component was called.

- StrictMode: run twice

```jsx
function Contact(whatever) {
    console.log(whatever)
    ...
}
```

- The name of props must be the same

```jsx
/* passing data*/
<Contact
    img="/src/assets/mr-whiskerson.png"
/>

/* receiving data*/
<img
    src={props.img}
/>
```

## 2. <a name='Props:Quiz'></a>Props: Quiz

1. What do props help us accomplish?

- make component reusable.

2. How do you pass a prop into a component?

- define properties and passing data.
  `data="data is passing"`

3. Can I pass a custom prop (e.g. `blahblahblah={true}`) to a native
   DOM element? (e.g. <div blahblahblah={true}>) Why or why not?

- (From what I understand) no. Because render HTML acts as JSX syntax that returns an object describe a DOM node. Passing the props to the DOM element is impossible because it doesn't have it ( not have `blahblahblah` attribute), only standard HTML specs.

- Answer: No, because the JSX we use to describe native DOM elements will be turned into REAL DOM elements by React. And real DOM elements only have the properties/attributes specified in the HTML specification. (Which doesn't include properties like `blahblahblah`)

4. How do I receive props in a component?
   function Navbar() {
   return (
   <header>
   ...
   </header>
   )
   }

```jsx
function Navbar(props) {
  return <header>{props.data}</header>;
}
```

5. What data type is `props` when the component receives it?

- React object

## 3. <a name='Props:Destructive'></a>Props: Destructive

- Ex1

```jsx
const people = {
  lname: "hello",
  fname: "test",
  tel: "12739182749",
};
const { lname, fname } = people;
console.log(lname);
```

- Ex2: either use `props` or destructive props like below.
  Prefer `props` to distinguish with local variables.

```jsx
function Navbar({ name, tel, email }) {
  return (
    <header>
      {name} ~{tel} @{email}
    </header>
  );
}
```

## 4. <a name='Props:Nonstring'></a>Props: Non string

- String: with or without {}

```jsx
<Joke upvotes={"Text"} />
```

- Number:

```jsx
<Joke upvotes={10} />
```

- Boolean:

```jsx
<Joke isPun={false} />
```

- Array:

```jsx
<Joke
  comments={[
    { author: "ID1111", text: "This is A" },
    { author: "ID2222", text: "This is B" },
  ]}
/>
```

## 5. <a name='ImportingStaticAssets'></a>Importing Static Assets

We can import image like this

```jsx
import Fluffy from "/src/assets/fluffykins.png";

<Contact
  img={Fluffy}
  name="Fluffykins"
  tel="(212) 555-2345"
  email="fluff@me.com"
/>;
```

## 6. <a name='ReactCanRenderArrays'></a>React Can Render Arrays

Check JokeHeader.jsx

Cannot render array of object

JSX object

```jsx
const title = <h1>This is title</h1>;
console.log(title);

return <p>Today Hot Topics: {topics.topic}</p>;
```

Output:

- Console: react element with props.children, type
- UI: plain string

## 7. <a name='Map'></a>Map

Check challenge.js

(warning) Remember to add KEY: React needs Key for adding/removing objects

```jsx
/*Have ID*/
const entryElements = data.map((entry) => {
  return <Entry key={entry.id} title={entry.title} />;
});

/*No ID (not recommended bc of adding new data behavior)*/
const entryElements = data.map((entry, index) => {
  return <Entry key={index} title={entry.title} />;
});
```

Map the whole object if the imported data is in correct format (or the same props name you want): check Entry in App.jsx

```jsx
/* Option 1: update Entry.jsx to use `props.entry.title`*/
const entryElements = data.map((entry) => {
  return <Entry key={entry.id} entry={entry} />;
});

/* Option 2: Entry.jsx: use `props.title`*/
const entryElements = data.map((entry) => {
  return <Entry key={entry.id} {...entry} />;
});
```

## 8. <a name='Map:Quiz'></a>Map: Quiz

1. What does the `.map()` array method do?

returns a new map

whatever is returned from the callback function provided (callback is the object before the =>) is placed at the same index in the new array. we take the items from original and modify them.

2. What do we usually use `.map()` for in React?

convert an array of raw data into JSX elements that can be displayed

3. Critical thinking: why is using `.map()` better than just
   creating the components manually by typing them out?

   - often don't have data ahead of time
   - new data adding
