import React from "react";
import ReactDom from "react-dom/client";
import AppLayout from "./components/AppLayout";

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



const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
