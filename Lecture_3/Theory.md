# JSX and React Components - Assignment Solutions

### 1. What is JSX?
**JSX** stands for **JavaScript XML**. It is a syntax extension for JavaScript that allows developers to write HTML-like code directly inside JavaScript files. 

While it looks like HTML, **JSX is not valid JavaScript**, nor is it standard HTML. Browsers (and JavaScript engines like Chrome's V8) cannot understand JSX directly. When you build your project using a bundler (like Parcel or Vite), a compiler tool like **Babel** transpiles (converts) your JSX under the hood into standard JavaScript objects using `React.createElement()` calls before it reaches the browser.

---

### 2. Superpowers of JSX
JSX brings several powerful capabilities to React development:
* **XSS (Cross-Site Scripting) Protection:** By default, React DOM escapes and sanitizes any values embedded inside JSX before rendering them to the screen. If a malicious user tries to inject malicious JavaScript via an input, JSX treats it as simple text, preventing XSS attacks automatically.
* **JavaScript Expressions Inside UI:** You can embed dynamic JavaScript logic directly inside your UI markup by wrapping expressions in curly braces `{}`. You can do math, call functions, access variables, or use `.map()` to render lists dynamically.
* **Enhanced Readability & Maintainability:** By keeping the visual structure (markup) and the rendering logic together in the same component file, it becomes much easier to visualize the DOM tree and maintain the codebase.
* **Compile-Time Error Checking:** Because JSX is processed during the build step, your IDE and compiler can catch syntax errors, typos in component names, or incorrect attribute names before you even run the code.

---

### 3. Role of `type` attribute in script tag? What options can I use there?
The `type` attribute in an HTML `<script>` tag indicates the data content type (MIME type) or the execution mode of the script being loaded.

**Key Options You Can Use:**
1. **Omitted or `type="text/javascript"` (Default):**
   If you leave the `type` attribute off, the browser treats the file as a standard, classical JavaScript script. It loads synchronously and blocks HTML parsing unless optimized with `async` or `defer`.
2. **`type="module"`:**
   This tells the browser to treat the file as a modern **ECMAScript Module (ES6 Module)**. This is crucial in modern development because it:
   * Enables the use of native `import` and `export` statements.
   * Automatically enforces `"use strict"` mode.
   * Defers script execution automatically until the HTML document is parsed (acting like `defer`).
3. **`type="importmap"`:**
   Allows developers to specify a JSON mapping of module specifiers to actual file paths or CDN URLs, allowing for cleaner dynamic imports without needing complex build steps.
4. **Non-executable types (e.g., `type="application/json"` or `type="text/babel"`):**
   If you specify a non-standard JavaScript type, the browser will not execute the code. For example, legacy React tutorials used `type="text/babel"` to tell an in-browser Babel compiler to find that script tag and translate the JSX on the fly.

---

### 4. `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX

Here is how React treats each of these three syntaxes inside JSX:

* **`{TitleComponent}`:**
  When wrapped in curly braces without angle brackets, React treats this as a regular JavaScript variable or expression evaluation. 
  * If `TitleComponent` is a React **Component function**, `{TitleComponent}` will **not render** the component! It just references the function itself in memory. (To execute a function directly in braces, you would have to write `{TitleComponent()}`).
  * If `TitleComponent` is a variable holding a pre-created React element (e.g., `const TitleComponent = <h1>Hello</h1>;`), then `{TitleComponent}` will render that element.

* **`{<TitleComponent/>}` (Self-Closing Tag):**
  This is the standard, idiomatic syntax for rendering a functional or class component in React when it does not need to wrap any child elements or text. React sees the angle brackets, invokes the `TitleComponent` function, and renders its returned JSX to the Virtual DOM.

* **`{<TitleComponent></TitleComponent>}` (Opening and Closing Tags):**
  This is functionally identical to the self-closing tag `<TitleComponent/>` when empty. However, you use this syntax when you need to pass **children** (text, HTML elements, or other nested React components) inside it:
  ```jsx
  <TitleComponent>
      <p>This paragraph is passed as props.children!</p>
  </TitleComponent>
  ```