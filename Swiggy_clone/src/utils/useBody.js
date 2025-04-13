import React, { useEffect } from 'react'

const useBody = () => {

    const [resList, setResList] = useState([]);

    useEffect(() => {
        fetchData();
      }, []);
    
      const fetchData = async () => {
        const data = await fetch(Body_API);
    
        const Json = await data.json();
    
        // Optional Chaining
        setResList(
          Json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
        setFilteredList(
          Json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
      };

  return resList
}

export default useBody