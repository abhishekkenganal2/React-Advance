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
- NAme of Restaurant, Star rating, Location, Price, delevary time
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

- useEffect()
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

1. Routing

- install react-router-dom