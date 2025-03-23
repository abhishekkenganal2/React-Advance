import React, { lazy, Suspense } from "react";
import ReactDom from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/AppLayout";
// import About from "./components/About";
import Contacts from "./components/Contacts";
import Error from "./components/Error";
// import Body from "./components/Body";
import RestaurantMenu from "./components/RestaurantMenu";
import Cart from "./components/Cart";

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "Hello World!"),
//     React.createElement("h2", {}, "Hello I am H2!"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "Hello World!2"),
//     React.createElement("h2", {}, "Hello I am H2!2"),
//   ]),
// ]);
// Introduction to JSX and Babel
// const jsxheading = <h1>Hello World!</h1> // JSX for single element
// const jsx = (
//   <div>
//     <h1>Hello World!</h1>
//     <h2>Hello I am You</h2>
//   </div>
// ); // JSX for multiple element

const About = lazy(() => import("./components/About"));
const Body = lazy(() => import('./components/Body'))
const RestaurantMenu = lazy(() => import('./components/RestaurantMenu'))

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Body />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contacts />,
      },
      {
        path: "/restaurant/:resId",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <RestaurantMenu />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Cart />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
