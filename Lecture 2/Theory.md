# Theory Assignment Solutions


### 1. What is `NPM`?
**NPM** originally stood for Node Package Manager, though today it's simply known as the standard package manager for the Node.js environment. It consists of two main parts:
1. An online repository (database) where developers publish open-source packages.
2. A Command Line Interface (CLI) tool that allows you to install, update, and manage those packages (dependencies) in your local projects.

### 2. What is `Parcel/Webpack`? Why do we need it?
Parcel and Webpack are **module bundlers** for JavaScript applications. 
**Why we need them:** When building a modern app, we write modular code split across hundreds of files, utilizing external libraries, images, and CSS. Browsers cannot easily process all these separate raw files efficiently. Bundlers take all these files, manage their dependencies, and compress, minify, and bundle them into a few small, optimized files (HTML, CSS, JS) that are ready to be deployed to production. 

### 3. What is `.parcel-cache`?
The `.parcel-cache` is a hidden directory created automatically by Parcel. It is used to store information about your project's build state. Parcel uses this cached data to avoid re-parsing and re-compiling files that haven't changed since the last build, significantly speeding up subsequent development server startups and build times.

### 4. What is `npx`?
**npx** stands for Node Package Execute. It is a CLI tool that comes bundled with NPM. While `npm` is used to *install* packages, `npx` is used to *execute* them. It allows you to run packages without having to install them globally on your machine (e.g., running `npx parcel index.html`).

### 5. What is the difference between `dependencies` vs `devDependencies`?
* **`dependencies`:** These are the packages required for your application to run in production. For example, `react` and `react-dom` are needed for the UI to actually render for the end-user.
* **`devDependencies`:** These are packages needed *only* during the development and building phase, not in production. Examples include bundlers (`parcel`), testing frameworks (`jest`), or linters (`eslint`).

### 6. What is Tree Shaking?
Tree shaking is a term used in JavaScript context for **dead-code elimination**. When a bundler (like Parcel or Webpack) bundles your code, it analyzes your `import` and `export` statements. If it detects that a specific function or module is imported but never actually used in your application, it removes (shakes off) that unused code from the final production bundle, resulting in a smaller file size.

### 7. What is Hot Module Replacement (HMR)?
Hot Module Replacement (HMR) is a feature provided by bundlers that automatically updates modules in the browser at runtime without requiring a full page refresh. When you save a file in your editor, Parcel's file watching algorithm detects the change and injects only the updated code into the running app, preserving the application's current state and making the developer experience incredibly fast.

### 8. List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words.
**Five Superpowers:**
1. Hot Module Replacement (HMR)
2. Image Optimization
3. Caching (Faster subsequent builds)
4. Tree Shaking
5. Zero Configuration

**Description of 3:**
* **Image Optimization:** Media files can make a website slow. Parcel automatically compresses and optimizes images during the build process to reduce loading times.
* **Zero Configuration:** Unlike Webpack which requires a complex `webpack.config.js` file to work, Parcel works out of the box. You just point it at your entry file (like `index.html`) and it figures out everything else automatically.
* **Caching:** By saving the state of your project in the `.parcel-cache` folder, Parcel ensures that if you stop the server and start it again, it boots up almost instantly because it doesn't have to rebuild everything from scratch.

### 9. What is `.gitignore`? What should we add and not add into it?
`.gitignore` is a simple text file that tells Git which files or folders it should ignore and *not* track in version control.
* **What to add:** Auto-generated folders (`node_modules`, `dist`, `.parcel-cache`), environment variable files (`.env`), and OS specific hidden files (like `.DS_Store`).
* **What NOT to add:** Source code files (`.js`, `.css`, `.html`), `package.json`, and `package-lock.json`.

### 10. What is the difference between `package.json` and `package-lock.json`?
* **`package.json`:** Contains high-level metadata about your project and lists the packages it depends on along with their *approximate* versions (using symbols like `^` or `~`).
* **`package-lock.json`:** Locks down the *exact* version of every dependency and their sub-dependencies. It ensures that if another developer clones your project, they install the exact same dependency tree, preventing "it works on my machine" bugs.

### 11. Why should I not modify `package-lock.json`?
You should never modify `package-lock.json` manually because it is automatically generated and maintained by NPM. Manually editing it can break the dependency tree, cause version mismatches, and lead to failed builds. NPM automatically updates it when you run `npm install`, `npm update`, or `npm uninstall`.

### 12. What is `node_modules`? Is it a good idea to push that on git?
`node_modules` is a massive folder that contains the actual downloaded source code of all the dependencies (and their sub-dependencies) listed in your `package.json`. 
**No, you should never push it to Git.** It is extremely large and heavy. Because you have `package.json` and `package-lock.json` committed to Git, anyone can regenerate the exact same `node_modules` folder simply by running `npm install`.

### 13. What is the `dist` folder?
The `dist` (distribution) folder is created by the bundler (like Parcel) when you build your project for production. It contains the final, minified, bundled, and optimized HTML, CSS, and JS files that you will actually deploy to your web server. 

### 14. What is `browserlists`?
`browserslist` is a configuration (usually found in `package.json` or a `.browserslistrc` file) used by tools like Babel and Autoprefixer. It tells these tools exactly which browsers (and which versions of them) your application needs to support (e.g., "last 2 versions", "not dead"). The tools will then automatically transpile your modern JavaScript and add CSS vendor prefixes to ensure your app works on those specific target browsers.

---
### 💡 Extra Reading Concepts:

**Vite vs Webpack vs Parcel:**
* **Webpack:** The industry veteran. Highly customizable but requires a lot of complex configuration. Slower build times compared to modern tools.
* **Parcel:** Focuses on "zero-configuration". It is fast, easy to set up, and includes everything out of the box.
* **Vite:** The newest generation. It uses native ES Modules in the browser during development, making its server start time and HMR incredibly fast, regardless of app size. 

**Caret (`^`) and Tilde (`~`):**
These define how NPM handles minor updates.
* **Caret (`^`) e.g., `^1.2.3`:** Automatically accepts *minor* and *patch* updates (e.g., will update to `1.3.0` but NOT `2.0.0`). It is the default.
* **Tilde (`~`) e.g., `~1.2.3`:** Strictly accepts only *patch* (bug fix) updates (e.g., will update to `1.2.4` but NOT `1.3.0`).

**Script types in HTML:**
* **`<script>`:** Executes as standard JavaScript. It blocks HTML parsing unless deferred.
* **`<script type="module">`:** Tells the browser to treat the file as an ES6 Module. This enables the use of `import` and `export` syntax natively in the browser. Modules are automatically deferred, meaning they won't block HTML parsing.