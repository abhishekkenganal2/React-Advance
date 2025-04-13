import React, { useEffect, useState } from "react";
import { Menu_API } from "./data";

const useRestoMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  const fetchData = async () => {
    console.log("resID::", Menu_API + resId);

    const data = await fetch(Menu_API + resId);

    const json = await data.json();

    console.log("json:", json);

    setResInfo(json.data.cards);
  };

  console.log("resID::", Menu_API + resId);
  useEffect(() => {

    fetchData();
  }, []);

  return resInfo;
};

export default useRestoMenu;
