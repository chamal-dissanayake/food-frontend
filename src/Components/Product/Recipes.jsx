import Axios from "axios";
import { useEffect, useState } from "react";
import Category from "../Pages/Category/Category";
import Card from "../Card";

const Recipes = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const getLatestItems = async () => {
      const response = await Axios.get(
        "https://food-backend-eta.vercel.app/api/all-items"
      );
      setItems(response.data);
    };
    getLatestItems();
  }, []);

  return (
    <div className=" px-6 lg:px-12 py-20">
      <h1 className=" text-3xl mb-8 font-semibold text-center sm:text-5xl sm:leading-relaxed">
        All Recipes
      </h1>
      <Category />
      <ul className=" mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {items.map((item) => (
          <Card key={item._id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default Recipes;
