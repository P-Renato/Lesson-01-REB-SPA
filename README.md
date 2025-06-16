# Lesson-01-REB-SPA

**TODAY**

- SPA
- React 
- Thinking in components

## SPA - Single page applicatuion

- An SPA is a web page that usually is a single HTLM document
    - The contents of it are dynamically reloaded
    - The whole page doesn't need to reload when something changes
    - Navigating from "page" to another 




- Think of Instagram or Facebook for example
    - Opening an instant message should not reload the whole page
    - Writing a comment on a post should not reload the whole page

- Single page applications are _one_ way making websites
    - Not everything has an SPA
    - We are learning it because it's a great demand in the market 
    - We are learning it because it's a great example
    - Learning SPA's 

    ### React

    - Why specifically React?
        - React is a very solid choice for creating SPAs
        - It's extremely popular
        - It's great at learning fundamental concepts
        - It has strong backing: React is developed by Meta

    - Other alternatives are, for example
        - AngularJS
        - VueJS
        - Svelte
        - Once you know one of them, you can learn others very fast

    - React has a very large acosystem
        - There are many libraries and fameroks built around react
        - You will learn three of the them during this course
        - **React** The core library of React
        - **Next.js** For building full stack applications
        - **React Native** For creating native mobile applications for Android&iOS

    ### How does React work?

    - Remember the DOM?

    - React recreates the DOM in JaveScript
        - This is called a virtual DOM
        - You don't access and change the real DOM directly
        - You change varaiables in React
            - React then updates tje virtual DOM
            - It then updates only the parts of the real DOM that needs to change
            - This can be 'much' faster than updating the DOM entirely

    - React controls the state of your application on variables 
        - Is the form submitted? `formSubmitted = true`
        - Is a user logged in? `user = {id:1, name:'Ari'}`
        - Is the menu open? `menuOpen = true`

    ### JSX

    - JSX is the language for defining the HTML structure of a page in React
        - JSX is kind of between HTML and JS
        - It is basicallly HTML elements 'inside' JavaScript files

    - You have to learn "some" differences, for example
        - All elements **must** have a closing tag or have a self-closing slash
        - `className` instead of `class`
        - `htmlfor` instead of `for`

    ```html

    <div className="container"></div>

    ```

    ```jsx
        <div className="inputGroup">
            <label htmlFor="namedIput">Name:<label/>
            <input id="namedInput" type="text" name="name">
        </div>
    ```

    ### Starting a React project with Vite
    - We will use `Vite` for working with React
        - Vite is a build tool and a development server
        - It's modern and VERY fast