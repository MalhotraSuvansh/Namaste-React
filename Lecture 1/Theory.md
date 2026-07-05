### 1. What is Emmet?
Emmet is a toolkit built into modern text editors (like VS Code) that allows developers to write HTML, CSS, and JSX much faster. It acts as an abbreviation engine. Instead of typing out full HTML tags, you can type short abbreviations and press Tab or Enter to expand them.

**Example:** Typing `ul>li*3` expands into an unordered list with three list items.

### 2. Difference between a Library and Framework?
The main difference lies in Inversion of Control.

* **Library:** You are in control. A library is a collection of functions or tools that you call when you need them. You dictate the flow and architecture of your application. (e.g., React, jQuery).
* **Framework:** The framework is in control. It provides a predefined skeleton and architecture. You fill in the specific logic, but the framework decides when to call your code. (e.g., Angular, Next.js).

### 3. What is CDN? Why do we use it?
CDN (Content Delivery Network) is a geographically distributed group of servers that work together to provide fast delivery of internet content (HTML pages, javascript files, stylesheets, images). 

**Why we use it:**
1. **Speed & Low Latency:** It serves the files from the server closest to the user's physical location.
2. **Reduced Load:** It takes the load off the main hosting server.
3. **Caching:** Browsers often cache files from popular CDNs. If a user visits your site and has already downloaded a React CDN file from visiting another site, they won't need to download it again.

### 4. Why is React known as React?
React is named "React" because it is designed to react to changes in state or data. In traditional web development, if data changed, you often had to manually update the DOM or reload the page. In React, when the underlying data (state) changes, the UI automatically and efficiently "reacts" and updates itself to reflect that new data.

### 5. What is crossorigin in a script tag?
The crossorigin attribute in a `<script>` tag is used for CORS (Cross-Origin Resource Sharing). When you fetch a script from a CDN (which is a different origin/domain than your website), the browser restricts error logging for security reasons. Adding crossorigin tells the browser to fetch the script anonymously (without sending user credentials like cookies). If the CDN server allows it, this enables the browser to display detailed error messages in your console if the script fails, rather than a generic "Script error."

### 6. What is the difference between React and ReactDOM?
* **React:** This is the core library. It is responsible for creating components, managing state, and building the Virtual DOM. It is platform-agnostic (it doesn't know about the browser).
* **ReactDOM:** This is the "glue" between React and the browser's DOM. It takes the Virtual DOM created by the React library and actually renders it onto the webpage (e.g., using `ReactDOM.createRoot()`).

### 7. What is the difference between react.development.js and react.production.js files via CDN?
* **Development version:** This file is larger and uncompressed. It contains helpful warnings, detailed error messages, and debugging tools to help developers catch mistakes while building the app.
* **Production version:** This file is minified, compressed, and stripped of
