import { useEffect, useState } from "react";
import Header from "./Header";
import UserContext from "../utils/UserContext";
import { Outlet } from "react-router-dom";

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
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="app">
        {/* <UserContext.Provider value={{ loggedInUser: "John" }}> */}
          <Header />
        {/* </UserContext.Provider> */}
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

export default AppLayout;
