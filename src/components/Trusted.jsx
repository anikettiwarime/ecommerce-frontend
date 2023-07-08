import React from "react";

const Trusted = () => {
  const companies = [
    {
      id: 1,
      src: "https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image2.png",
    },
    {
      id: 2,
      src: "https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image3.png",
    },
    {
      id: 3,
      src: "https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image4.png",
    },
    {
      id: 4,
      src: "https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image6.png",
    },
    {
      id: 5,
      src: "https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image8.png",
    },
  ];

  return (
    <section className=" bg-blue-200 py-20 mx-auto">
      <div className="container mx-auto">
        <h3 className="text-center capitalize text-xlfont-bold">
          Trusted By 1000+ Companies
        </h3>
        <div className="grid grid-cols-2 mt-8  md:flex md:justify-evenly md:items-center">
          {companies.map(({ id, src }) => (
            <div key={id}>
              <img
                src={src}
                alt="trusted brands"
                className=" min-w-[100px]   h-24"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trusted;
