import Header from "./Header";
import Body from "./Body";
import { createBrowserRouter } from "react-router-dom";

const AppLayout = () => {
    return (
      <div className="app">
        <Header />
        <Body />
      </div>
    );
  };

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <AppLayout/>
  },
  {
    path:"/about",
    element:<></>
  }
])

  export default AppLayout;