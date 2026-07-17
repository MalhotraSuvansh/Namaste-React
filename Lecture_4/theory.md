# React Theory & Architecture — Assignment 4

## 1. Is JSX mandatory for React?

No, JSX is **not mandatory** for writing React applications. Under the hood, every JSX element is compiled into regular JavaScript using the `React.createElement()` method by a bundler/compiler like Babel or Parcel.

For example, writing this in JSX:

```jsx
const heading = <h1 className="title">Hello React</h1>;
```

Is exactly the same as writing pure JavaScript:

```javascript
const heading = React.createElement(
  "h1",
  { className: "title" },
  "Hello React",
);
```

While JSX is optional, it is the industry standard because it makes UI code significantly easier to read, write, and maintain compared to deeply nested `createElement` calls.

---

## 2. Is ES6 mandatory for React?

No, **ES6 (ECMAScript 2015) is not strictly mandatory** for React. You can write React code using older ES5 JavaScript by using traditional `var` declarations, regular syntax functions, and third-party packages like `create-react-class` instead of modern ES6 classes or functional components.

However, modern React development relies heavily on ES6+ features such as:

- **Arrow Functions** (`() => {}`)
- **Destructuring** (`const { name } = props;`)
- **Template Literals** (`` `Hello ${name}` ``)
- **Let & Const**
- **Modules** (`import` and `export`)
- **Spread/Rest Operators** (`...props`)

Using ES6+ is highly recommended and considered standard practice in professional development.

---

## 3. `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX

| Syntax                                    | What it represents                     | How React handles it                                                                                                                                                                                                                                                                        |
| :---------------------------------------- | :------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **`{TitleComponent}`**                    | A JavaScript variable or expression    | Evaluates whatever is stored inside the variable. If `TitleComponent` is a React element assigned to a variable (e.g., `const TitleComponent = <h1>Title</h1>`), it will render it. If it is a functional component definition, it will simply reference the function without rendering it. |
| **`{<TitleComponent/>}`**                 | A Functional Component (Self-Closing)  | Invokes and renders the `TitleComponent` function. This is the cleanest and most common way to render a component that does not contain child elements inside it.                                                                                                                           |
| **`{<TitleComponent></TitleComponent>}`** | A Functional Component (Standard Tags) | Identical in functionality to `{<TitleComponent/>}`. This syntax is specifically used when you need to pass **children** (other components, text, or HTML tags) between the opening and closing tags (e.g., `<TitleComponent><p>Child Text</p></TitleComponent>`).                          |

---

## 4. How can I write comments in JSX?

Because JSX is an extension of JavaScript written inside HTML-like syntax, standard HTML comments (`<!-- comment -->`) do not work.

To write comments inside JSX, you must wrap standard JavaScript multi-line comments inside curly braces `{}`:

```jsx
const Header = () => {
  return (
    <div className="header">
      {/* This is a single-line or multi-line comment inside JSX */}

      {/* 
                You can also write multi-line comments like this.
                React will ignore everything inside these braces during rendering.
            */}
      <h1>Welcome to Cravo</h1>
    </div>
  );
};
```

---

## 5. What is `<React.Fragment></React.Fragment>` and `<></>`?

In React, a component can only return **one single parent DOM node**. If you attempt to return multiple adjacent HTML elements without wrapping them in a parent tag, React will throw a syntax error.

**React Fragment** is a built-in component that allows you to group a list of children without adding extra, unnecessary DOM nodes (like extra `<div>` wrappers) to the browser's rendered HTML.

### Standard Syntax:

```jsx
return (
  <React.Fragment>
    <h1>Title</h1>
    <p>Description</p>
  </React.Fragment>
);
```

### Short Syntax (`<></>`):

```jsx
return (
  <>
    <h1>Title</h1>
    <p>Description</p>
  </>
);
```

_Note: The only difference is that the full `<React.Fragment>` syntax allows you to pass a `key` attribute (useful when mapping over items in a loop), whereas the short syntax `<></>` does not accept any attributes._

---

## 6. What is Virtual DOM?

The **Virtual DOM (VDOM)** is a lightweight, in-memory JavaScript object representation of the actual browser DOM.

Because directly manipulating the real browser DOM is computationally expensive and slow (it triggers layout recalculations and screen repainting), React keeps a virtual tree of your UI in memory. Whenever the state of your application changes, React generates a new Virtual DOM tree, compares it against the previous one, and calculates the most efficient way to update the real DOM.

---

## 7. What is Reconciliation in React?

**Reconciliation** is the core algorithm React uses to compare one Virtual DOM tree with another to determine what parts of the UI need to be changed.

When a component's state or props change:

1. React generates a new Virtual DOM tree.
2. It uses a specialized **diffing algorithm** to compare the new tree against the previous tree.
3. Instead of re-rendering the entire web page, React identifies only the specific DOM nodes that changed and updates **only those exact nodes** in the real browser DOM.

---

## 8. What is React Fiber?

**React Fiber** is the internal reconciliation engine and architecture introduced in React 16. It is a complete rewrite of React's older rendering algorithm (which was synchronous and block-based).

The main goal of Fiber is to enable **incremental rendering**—the ability to split rendering work into smaller chunks and spread it out over multiple frames. Key features of React Fiber include:

- **Asynchronous Rendering:** React can pause, abort, or reuse rendering work depending on network or CPU load.
- **Priority Styling:** It can assign different priorities to different updates (e.g., user animations and typing input get high priority, while background data fetching gets low priority).
- **Concurrency:** Powers modern React 18+ features like `useTransition` and `Suspense`.

---

## 9. Why we need keys in React? When do we need keys in React?

### Why we need keys:

Keys are unique identifiers that help React's diffing algorithm identify which items in a list have changed, been added, or been removed across re-renders. Without keys, React cannot differentiate between list items when their order shifts, leading to:

- Unnecessary re-renders of the entire list.
- Severe performance degradation.
- UI bugs where component state (like input field values or checkboxes) attaches to the wrong items.

### When we need keys:

You need to include a `key` prop **whenever you are mapping over an array** to render a list of elements or components:

```jsx
{
  restaurants.map((res) => (
    <RestaurantCard key="{res.info.id}" resData="{res}" />
  ));
}
```

---

## 10. Can we use index as keys in React?

Yes, technically you can pass the array index (`0, 1, 2...`) as a key, but it is considered an **anti-pattern** and should be avoided in professional development.

### Why index as a key is dangerous:

An index represents the item's **position** in the array, not its **unique identity**. If you insert a new item at the beginning of an array, delete an item from the middle, or sort the list:

1. Every subsequent item shifts to a new index number.
2. React sees that the keys (indexes) stayed the same (`0, 1, 2`), but the data inside them changed.
3. This fools React into thinking the DOM nodes are identical, causing it to re-use old DOM nodes and misplace component state.

### When is it acceptable to use index as a key?

You should only use index as a key if **ALL three** of these conditions are met:

1. The list is entirely static and will never change or be reordered.
2. The items inside the list do not have unique IDs (like database IDs).
3. The list will never be filtered, added to, or deleted from.

---

## 11. What is props in React? Ways to write props

**Props** (short for "Properties") are inputs passed from a parent component down to a child component. They work just like function arguments in standard JavaScript. Props are **read-only (immutable)** from the child's perspective—a child component cannot modify the props it receives.

### Ways to pass and write props:

#### 1. Standard Attribute Passing & Direct Access:

```jsx
// Parent
<UserCard age="{21}" name="Suvansh" role="Developer" />;

// Child (Accessing via props object)
const UserCard = (props) => {
  return (
    <h1>
      {props.name} - {props.role}
    </h1>
  );
};
```

#### 2. Object Destructuring in Component Parameters (Industry Standard):

```jsx
// Child (Destructuring directly in the arguments)
const UserCard = ({ name, role, age }) => {
  return (
    <h1>
      {name} - {role} ({age} years old)
    </h1>
  );
};
```

#### 3. Using the Spread Operator (`...`):

If you have an object containing all the properties, you can spread them directly onto the component:

```jsx
const userData = { name: "Suvansh", role: "Developer", age: 21 };

// Parent
<UserCard {...userData} />;
```

---

## 12. What is a Config Driven UI?

A **Config Driven UI** is an architectural pattern where the entire layout, content, and design of a user interface is dictated by a dynamic configuration data structure (usually a JSON payload sent from a backend server) rather than being hardcoded in the frontend code.

### How it works in real-world apps (like Swiggy / Zomato):

Instead of hardcoding a specific layout for the home screen, the backend API sends an array of "config cards." For example:

- In **Bangalore**, the API sends a JSON config instructing the app to render: `[CarouselBanner, SwiggyInstamart, RestaurantGrid]`.
- In a **smaller city** where Instamart isn't available, the API sends: `[CarouselBanner, RestaurantGrid]`.
- During Diwali or Christmas, the backend changes the theme colors and promo banners inside the JSON.

### Why use it?

- **Zero App Updates Required:** Companies can completely alter the UI, launch promotional sales, or reorder page sections instantly without requiring users to download a new app update from the App Store or Play Store.
- **A/B Testing:** Different user demographics can be served different JSON configurations to test which layout generates more orders.
- **Scalability:** A single frontend codebase can dynamically adapt to hundreds of different cities, regions, and user types based entirely on backend responses.
