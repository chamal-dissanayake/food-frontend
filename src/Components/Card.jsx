import React from "react";
import { Link } from "react-router-dom";
import { GoClock } from "react-icons/go";

const Card = ({ item }) => {
  const categoryStyles = {
    Entrees: { backgroundColor: "#e9efb7", color: "#59871f" },
    Breakfast: { backgroundColor: "#efedfa", color: "#3c3a8f" },
    Lunch: { backgroundColor: "#e5f7f3", color: "#1f8787" },
    Desserts: { backgroundColor: "#e8f5fa", color: "#397a9e" },
    Sides: { backgroundColor: "#feefc9", color: "#d15400" },
    Drinks: { backgroundColor: "#ffeae3", color: "#f0493e" },
    default: { backgroundColor: "#fff", color: "#000" },
  };

  const getCategoryStyle = (category) => {
    return categoryStyles[category] || categoryStyles.default;
  };

  const categoryStyle = getCategoryStyle(item.category);

  return (
    <div className=" container mx-auto flex justify-center md:justify-start">
      <div className=" max-w-sm">
        <div className=" bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
          <img
            src={item?.thumbnail_image}
            alt="category_img"
            className=" rounded-t-lg"
          />
          <div className=" bg-white py-6 px-5 rounded-lg   ">
            <Link to={`/items/${item._id}`}>
              <h1 className=" font-bold text-gray-700 text-xl mb-8 hover:text-gray-800 hover:cursor-pointer lg:text-2xl ">
                {item?.name}
              </h1>
            </Link>

            {/* { category and reading time} */}
            <div className=" flex justify-between items-center flex-wrap">
              <button
                className={`mt-6 py-2 px-4 font-medium rounded-lg shadow-md hover:shadow-lg transition duration-300`}
                style={{
                  backgroundColor: categoryStyle.backgroundColor,
                  color: categoryStyle.color,
                }}
              >
                {item?.category}
              </button>
              <div className=" flex items-center py-2 mt-6">
                <GoClock />
                <span>{item?.more[0].prep_time} </span>
              </div>
            </div>
          </div>
          <div className=" absolute top-2 right-2 bg-white rounded-lg py-2 px-4">
            <span className=" font-medium ">{item?.more[0].difficulty}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
