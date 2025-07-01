# REB - 01

**TODAY**

- SPA
- React
- Thinking in components

## SPA - Single Page Application

- An SPA is a web page that usually is a single HTML document
    - The contents of it are dynamically reloaded
    - The whole page doesn't need to reload when something changes
    - Navigating from one "page" to another doesn't need a full reload
        - You have the same footer, header on every page
        - Why does it need to reload when the page changes?

- Think of Instagram or Facebook for example
    - Opening an instant message should not reload the whole page
    - Writing a comment on a post should not reload the whole page

- Single page applications are _one_ way of making websites
    - Not everything has to be an SPA
    - We are learning it because it's in great demand in the market
    - We are learning it because it's a great example
    - Learning SPAs makes it easy to learn other approaches later

### React

- Why specifically React?
    - React is a very solid choice for creating SPAs
    - It's extremely popular
    - It's great at learning fundamental concepts
    - It has strong backing; React is developed by Meta

- Other alternatives are, for example
    - AngularJS
    - VueJS
    - Svelte
    - Once you know one of them, you can learn others very fast

- React has a very large ecosystem
    - There are many libraries and frameworks built around React
    - You will learn three of them during this course
    - **React** The core library of React
    - **Next.js** For building full stack applications
    - **React Native** For creating native mobile applications for Android&iOS

### How does React work?

- Remember the DOM?

- React recreates the DOM in JavaScript
    - This is called a virtual DOM
    - You don't access and change the real DOM directly
    - You change variables in React
        - React then updates the virtual DOM
        - It then updates only the parts of the real DOM that needs to change
        - This can be *much* faster than updating the DOM directly

- React controls the state of your application in variables
    - Is the form submitted? `formSubmitted = true`
    - Is a user logged in? `user = {id:1, name:"Ari"}`
    - Is the menu open? `menuOpen = true`

### JSX

- JSX is the language for defining the HTML structure of a page in React
    - JSX is kind of between HTML and JS
    - It's basically HTML elements *inside* JavaScript files!

- You have to learn *some* differences, for example
    - All elements **must** have a closing tag or have a self-closing slash
    - `className` instead of `class`
    - `htmlFor` instead of `for`

```jsx
    <div className="inputGroup">
        <label htmlFor="namedInput">Name:</label>
        <input id="namedInput" type="text" name="name" />
    </div>
```

### Starting a React project with Vite

- We will use `vite` for working with React
    - Vite is a build tool and a development server
    - It's modern and VERY fast

- Let's create a new React project with the name "my-react-app"

```sh
npm create vite@latest my-react-app
```

## Thinking in components

- In React, besides just HTML, you build *components*
- It's natural ot think of websites as a series of pages
    - `index.html`
    - `contact.html`
    - `about.html`

- With most modern ways of building websites, you actually think in components
    - Let's look at https://toom.de and search for components together
        - Header
        - Footer
        - Search
        - Chat
        - Hero
        - MarketSelection
        - ProductOffers
            - ProductOfferCard
        - TopServices
            - TopServiceCard

- **How do you know what should be a component?**
    - In programming, when do you decide to create a new function?

- Two examples:
    - The single responsibility principle
        - If a part of the page has one responsibility (Chat, Navigation)
        - A component should ideally only carry out one task
        - It can be then be further broken down into smaller components
    - The DRY principle
        - If a block of code repeats (Button, Card), it's a good candidate

- Like HTML, components make a nested structure; a component tree

```jsx
        <ProductList>
            <Product>
                <h2>Apple iPad</h2>
                <p>Cool tablet device thing</p>
            </Product>
            <Product>
                <h2>ThinkPad x200</h2>
                <p>An oldie, but goldie laptop </p>
            </Product>
        </ProductList>
```

- An example

```js
    function Welcome(props) {
        return <p>Hello, {props.name}</p>
    }
```

- React Components are JavaScript functions
    - They can accept inputs (properties or `props`)
    - They return JSX that describes what should be displayed

```js
    import Welcome from "./Welcome"

    // The app component uses the Welcome component and passes in a "name" prop
    function App() {
        return (
            <div className="App">
                <Welcome name="Jane Doe" />
                <Welcome name="John Doe" />
            </div>
        )
    }
```