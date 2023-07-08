import React from "react";

const Contact = () => {
  return (
    <section className=" pt-20 pb-12">
      <h2 className="capitalize mb-14 font-semibold text-4xl text-center">Contact Page</h2>
      <iframe
        title="google maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29035.24503083202!2d81.28556712792576!3d24.540641089152594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39845a348b85dbbd%3A0xbc368e68a40a6da9!2sRewa%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1673961699338!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className="container my-12">
        <div className="flex items-center justify-center" >
          <form action="https://formspree.io/f/xknagrqq" method="post" className="flex flex-col w-full md:w-1/3 gap-5">
            <input type="text" name="username"  placeholder="Username" autoComplete="off" required className="p-3 border-2  focus:outline-1 focus:outline-blue-300"/>
            <input type="email" name="email" placeholder="Email" autoComplete="off" required  className="p-3 border-2  focus:outline-1 focus:outline-blue-300"/>
            <textarea name="message" placeholder="Enter your message" cols="30" rows="10" className="p-3 border-2 focus:outline-1 focus:outline-blue-300" ></textarea>
            <input type="submit" value="Submit" className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-12 py-3 my-8 inline-block mr-auto items-center hover:scale-105 duration-300" />
          </form>
        </div>
      </div>

    </section>
  );
};

export default Contact;
