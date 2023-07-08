import { NavLink } from "react-router-dom";

const HeroSection = ({ props }) => {
  const { name } = props;
  return (
    <section className="py-20">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto  md:py-16 md:grid-cols-2  md:gap-8 ">
        <div className="md:ml-auto mx-auto">
          <p className=" mb-2">Welcome To</p>
          <h1 className="text-4xl font-bold mb-4 text-blue-500"> {name}</h1>
          <p className="max-w-md    text-blue-300 mb-8 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            quo optio animi aspernatur nesciunt praesentium, ratione voluptas
            eligendi delectus enim quas.
          </p>
          <NavLink className=" inline-block items-center justify-center px-6 py-3 my-3 mx-auto rounded-md font-medium bg-gradient-to-r from-cyan-500 to-blue-400 hover:scale-105 text-white">
            Shop Now
          </NavLink>
        </div>
        <div className="">
          <figure className="relative after:content-[''] md:after:absolute after:w-2/3 after:h-5/6 after:z-[-1] after:bg-blue-200  after:left-[26%]   after:top-[-2rem] mx-auto">
            <img src="images/hero.jpg" alt="not" className="sm:px-20" />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
