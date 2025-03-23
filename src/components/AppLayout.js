import { useEffect, useState } from "react";
import Header from "./Header";
import UserContext from "../utils/UserContext";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";

const AppLayout = () => {
  const [userName, setUserName] = useState();

  //autentication
  useEffect(() => {
    //make an API call
    const data = {
      name: "Abhishek B K",
    };
    setUserName(data.name);
  },[]);

  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="app">
        {/* <UserContext.Provider value={{ loggedInUser: "John" }}> */}
          <Header />
        {/* </UserContext.Provider> */}
        <Outlet />
      </div>
    </UserContext.Provider>
    </Provider>
  );
};

export default AppLayout;
