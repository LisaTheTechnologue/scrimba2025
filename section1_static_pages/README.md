This is the first ever lesson so we learn from the real basic.

Already have html, css, js knowledge.

In HTML, we have a div

```html
<div id="root"></div>
<script src="/index.jsx" type="module"></script>
```

This is where we pass the React content

We have a jsx file that content React

1. Create a root

```jsx
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
```

2. Render some markup to the root

```jsx
root.render();
```
