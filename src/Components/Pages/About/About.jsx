import React from "react";

const About = () => {
  return (
    <section className=" px-6 lg:px-12 py-20">
      <h1 className=" text-center text-3xl pt-10 pb-4 font-bold text-secondry sm:text-6xl sm:leading-relaxed">
        {" "}
        About
      </h1>
      <p className=" text-center sm:w-1/2 mx-auto mb-20">
        <span className=" font-bold text-2xl leading-relaxed">
          Welcome to Vegan Food Recipes App!
        </span>{" "}
        <br />
        At Recipes App, we believe that eating healthy and delicious food should
        be easy, fun, and accessible to everyone. Our mission is to inspire you
        with a diverse collection of mouth-watering vegan recipes that cater to
        all tastes and skill levels. Whether you're a seasoned vegan, just
        starting your plant-based journey, or simply looking to incorporate more
        nutritious meals into your diet, you've come to the right place!
      </p>
      <article className="relative bg-[url(https://images.unsplash.com/photo-1692194741580-b8b99eefb40b?q=80&w=1710&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
              This Blog for
              <strong className="block font-extrabold text-rose-500">
                {" "}
                Vegan Food Lovers....{" "}
              </strong>
            </h1>

            <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed font-semibold">
              This Blog was born out of a passion for vegan cooking and a desire
              to share the joys of plant-based eating with the world.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="/recipes"
                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                All Recipes
              </a>

              <a
                href="/contact"
                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default About;
