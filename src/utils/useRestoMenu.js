import React, { useEffect, useState } from "react";
import { Menu_API } from "./data";

const useRestoMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(Menu_API + resId);
    const json = await data.json();
    setResInfo(json.data.cards);
  };

  return resInfo;
};

export default useRestoMenu;