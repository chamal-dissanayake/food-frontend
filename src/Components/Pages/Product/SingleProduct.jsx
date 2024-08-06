import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const SingleProduct = () => {
  const item = useLoaderData();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const totalTime = (timeString) => {
    let timeArray = timeString.split(" ");
    return parseInt(timeArray[0]);
  };

  let PreTimeMinute = totalTime(item?.more[0].prep_time);
  let cookTimeMinute = totalTime(item?.more[0].cook_time);

  const totalmins = PreTimeMinute + cookTimeMinute;

  return (
    <section className=" min-h-dvh md:flex justify-center items-center md:bg-eggshell">
      <article>
        <div className=" bg-white md:my[5rem] md:py-8 pb-8 md:rounded-xl">
          <picture>
            <img
              src={item.thumbnail_image}
              alt="item_image"
              className=" md:max-w-[90%] w-full md:h-[570px] md:rounded-xl md:mx-auto"
            />
          </picture>
          <div className=" px-8">
            <h1 className=" text-4xl mt-12 text-secondry">{item.name}</h1>
            <p className=" mt-6 ">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              mollitia reiciendis obcaecati vero sapiente. Pariatur et a
              laudantium! Doloremque architecto omnis assumenda sed distinctio
              esse tempora suscipit neque voluptates repudiandae!
            </p>
            <article className=" bg-rose-50 mt-6 p-5 rounded-xl">
              <h3 className=" text-xl font-semibold ml-2">Preparation time</h3>
              <ul className=" list-disc mt-3 ml-8 text-lg marker:text-orange-500">
                <li className=" pl-3 mt-3 ">
                  <p>
                    <span className=" font-bold">Total : </span>
                    <span>{totalmins} minutes</span>
                  </p>
                </li>
                <li className=" pl-3 mt-3">
                  <p>
                    <span className=" font-bold">Preparation : </span>
                    <span>{item?.more[0].prep_time}</span>
                  </p>
                </li>
                <li className=" pl-3 mt-3">
                  <p>
                    <span className=" font-bold">Cooking : </span>
                    <span>{item?.more[0].cook_time}</span>
                  </p>
                </li>
              </ul>
            </article>
            <div className=" mt-5 ">
              <h3 className=" text-3xl ml-2">Ingredients</h3>
              <ul className=" list-disc marker:text-blue-500 mt-4 ml-6 text-secondry marker:align-middle">
                {item?.ingredients.map((ingredient, index) => (
                  <li key={index}>
                    <span>{ingredient.name}: </span>
                    <span>{ingredient.quantity}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className=" mt-8 ">
              <h3 className=" text-3xl ml-2">Instructions</h3>
              <ul className=" list-decimal marker:text-black mt-4 ml-6 text-secondry marker:align-middle">
                <li>{item.instructions}</li>
              </ul>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default SingleProduct;
