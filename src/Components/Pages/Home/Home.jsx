import HeroSection from "../../HeroSection";
import Category from "../Category/Category";
import AboutSection from "./AboutSection";
import FeaturedSection from "./FeaturedSection";
import LatestRecipe from "./LatestRecipe";
// import NewsLetter from "./NewsLetter";

const Home = () => {
  return (
    <div className=" container mx-auto">
      <div className=" flex flex-col justify-center items-center w-full py-20">
        <HeroSection />
        <Category />
      </div>
      {/* {other components} */}
      <FeaturedSection />
      {/* latest recipes*/}
      <LatestRecipe />
      {/* {newsLetter} */}
      {/* <NewsLetter /> */}
      {/* {about section} */}
      <AboutSection />
      {/* {footer section} */}
    </div>
  );
};

export default Home;
