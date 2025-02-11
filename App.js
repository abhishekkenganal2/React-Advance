const parent = React.createElement("div", { id: "parent" }, [
  react.createElement("div", { id: "child" }, [
    react.createElement("h1", {}, "Hello World!"),
    react.createElement("h2", {}, "Hello I am H2!"),
  ]),
  react.createElement("div", { id: "child" }, [
    react.createElement("h1", {}, "Hello World!"),
    react.createElement("h2", {}, "Hello I am H2!"),
  ]),
]);

const root = ReactDom.createRoot(document.getElementById("root"))

root.render(parent)