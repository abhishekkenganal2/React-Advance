New project:-
layoout
 - header
  - logo
  - nav-items
 - body
  - Search
  - RestaurantContainer
  - RestaurentCard
- Image
- Name of Restaurant, Star rating, Location, Price, delevary time
 - Footer
  - Copyright
  - Links
  - Address
  - Contact

## Chapter 4

* Config driven UI
* Not using keys is (not acceptable) always use the keys in map

- types of Exports:

a. Default export/import
export default Resto;
import Resto from "./Resto";

b. Named export/import
export const Resto = "sasdl asda";
import {Resto} from "./Resto";

## Chapter 5
### react hooks
- Normal JS utility function written by facebook developers.

1. useState() - Superpowerful state variables in reaact.

Virtual Dom - is JS object that represents the actual DOM.

Diff algorithm - calulates the difference between  current DOM and previous DOM and updates the DOM on every rendor cycle.

A new algorithm to update the DOM came out called reconcilation algorithm.

Diff Algorithm also known as Reconcilation algorithm which uses 

This algorithm came in react 16, After react 16, this algorithm is known as React Fiber.

Now Why React is fast? because REact is doing efficent DOM manipulation. How? because it can find the difference between virtual DOM and updates the UI.

React fiber -> [https://github.com/acdlite/react-fiber-architecture]

End of Chapter 5

## Chapter 6

1. Monolith service architecture: Within single application/ project we have UI,API's, database, authentication return.
2. Miroservice architecture: All the works are done with different projects/ applications.

We will learn how React talk to other world (for API's, database etc)

2. useEffect()

- use Shimmer instead of loading...

- login to logout journey..

- search bar working.
- Js basics revised 

End of Chapter 6

## Chapter 7

#### useEffect()
- if no dependency array => useEffect is called on every render.
ex: useEffect(() => {
    fetchData();
  });

- if dependency array is [] => useEffect is called on initial render(just once)
ex: useEffect(() => {
    fetchData();
  },[]);

- If dependency array has [variable] => called everytime variable is updated.
ex: useEffect(() => {
    fetchData();
  }, [variable]);

### Routing

- install react-router-dom

!!! note
    rafce creates component for you

### useRouteError 
- hook to handle errors in using react router.

- Children router and Outlet router: works as a fetcher of components.

- Link: Never use <a href=""> tag in react because it loads complete page, instead use <Link in=""> tag.

FOR THIS REASON -> React is Single Page Application.

- 2 types of routing in web app

1. Client Side Routing: <Outlet/> and <Link/>of React routes.
2. Server Side Routing: HTML <a> fetch.

### useParams
- Helps to fetch dynamic data like "id" from API links which is passed before in router.


## Chapter 8

- Class based components.

- using props with this.
- component rendering.
- State creations

Life Cycle of React component:
1. Constructor is called.
2. Render is called.
3. componentDidMount is called.

**VERY VERY IMPORTANT**
- componentDidMount is used to call API's. Why ? because in react, render happens first, then API's calls happen so componentDidMount works at last.
- 

## Chapter 9

- Single responsibility principle. - given each component indivisual work.
- By this code becomes reusable, maintainable, testable. 

- Created custom Hooks (functions)

- App loading time reduce by using build file size and distrubuting.

Also can be called as 
  - chunking
  - Code Spliting
  - Dynamic Bundling
  - Lazyy loading
  - On Demand loading
  - dynamic import


## Chapter 10

- Tailwind css
- worked with css, its lightweight ans speed since it uses only single style while build.
- deficult to learn in the beginning, but once learnt it's easy.
- no need to leave jsx page to write css.

## Chapter 11

- Higher order components: components that take a component and returns another component (enhanced version components)
- Pure functions: functions that doesnot modify thee code code.
- Controlled and uncontroled components.
- Whaat is lifting the states up.

- PROPS DRILLING - context

### createContext, contextProvider, useContext

- Context can be used for usings the props from parent component to directly nested  child component.
- It can we used for small and medium scale projects. (large scale optional)
- Usage of states with context.

## Chapter 12

- Redux -> works in data layer.
Redux is not mandetory, and is not within React.
- Redux is not only library, we have zustang.

- Redux offers easy debugging.

### Redux Toolkit
  - First refer the diagram from book.
  - install @redux/toolkit and react-redux
  - Build your store.
  - connect your store to your app.
  - Slice (cartSlice)
  - dispatch (action)
  - Selector

  - Redux uses ImmerJs library behind the sences to compare current state with latest state and give new state.
  - Redux toolkit (RTK) says either mutate the state or return the new state. (check in Reduces)

### Redux Dev tools

  - explore everything from it.

### Redux tunck
  - Redux tunck was used in older redux.
  - Go to redux toolkit website, check RTK query Quick start. 

## Chapter 13 

### Types of testing:
  - unit testing
  - Integration Testing
  - End to End Testing - e2e testing

!!! note
    We will be using react testing library, which is standard testing library fo react.
    Also react-testing library uses "Jest" in backend to work, and Jest uses Babel. 

**Installation:**
  - npm i -D @testing-library/react
  - npm i -D jest
  - npm install --save-dev babel-jest @babel/core @babel/preset-env (Babel dependencies)
  - configure the babel file "babel.config.js"
  - configure .parcelrc file to disable default babel transpilation.

  - Final thing, configuring jest using "npx jest --init".
  - jsdom is like a browser to run the testing code. 
  - install "npm install --save-dev jest-environment-jsdom" (install jsdom library)

### Start Testing
  - create "__tests__" donder/magic folder anywhere in src and create test files.
  - For unit testing create a separate file for component.
  ( You will get a error message when you run the test now, so...)
  - Install @babel/preset-react - to make jsx  work in test cases
  - Include @babel/preset-react in the babel.config.js

  Again Error occured? (TypeError: expect(...).toBeInTheDocument is not a function)
  - Install "@testing-library/jest-dom"

To write the test cases, use test().
  - first render conponent,
  - Then write the query for it.
  - Then assertion or expectation of test case.

- Use describe() for grouping test cases. 
 