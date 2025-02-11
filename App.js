import React from "react";
import ReactDom from 'react-dom';

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello World!"),
    React.createElement("h2", {}, "Hello I am H2!"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hello World!2"),
    React.createElement("h2", {}, "Hello I am H2!2"),
  ]),
]);

const root = ReactDom.createRoot(document.getElementById("root"))

root.render(parent)