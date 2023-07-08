import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import { RiSecurePaymentLine } from "react-icons/ri";

const Services = () => {
  // const ser_2 = "flex w-full flex-col md:flex-row items-center justify-center rounded-[2rem] gap-[4rem] bg-blue-200 shadow-sm shadow-blue-500"

  return (
    // <section className=''>
    //     <div className='flex flex-col lg:grid lg:gap-36 grid-cols-3 gap-[4.8rem] px-36'>
    //         <div className={item}>
    //             <TbTruckDelivery className={icon} />
    //             <h3 className={h_3}>Super Fast and Free Delivery</h3>
    //         </div>
    //         <div className={`${item} shadow-none gap-16 bg-transparent`}>
    //             <div className={ser_2}>
    //                 <div className='flex flex-row items-center justify-center gap-4'>
    //                     <MdSecurity className={icon} />
    //                     <h3 className={h_3}>Non-contact Shipping</h3>
    //                 </div>
    //             </div>
    //             <div className={ser_2}>
    //                 <div className='flex flex-row items-center justify-center gap-4'>
    //                     <GiReceiveMoney className={icon} />
    //                     <h3 className={h_3}>Money-back Guaranteed</h3>
    //                 </div>
    //             </div>
    //         </div>
    //         <div className={item}>
    //             <RiSecurePaymentLine className={icon} />
    //             <h3 className={h_3}>Super Secure Payment System</h3>
    //         </div>
    //     </div>
    // </section>

    <section className="py-20">
      <div className="flex flex-col md:grid md:grid-cols-3 md:px-32 mx-auto gap-10">
        <div className="bg-blue-100 h-[18.75rem] rounded-2xl flex md:flex-col items-center justify-center shadow-sm  shadow-blue-400 gap-2">
          <TbTruckDelivery
            className=" p-3 rounded-[50%] text-blue-400 bg-white"
            size={70}
          />
          <h3 className="text-lg mt-3">Super Fast and Free Delivery</h3>
        </div>
        <div className="gap-10 flex flex-col ">
          <div className="flex justify-center items-center bg-blue-100 text-center flex-1 rounded-[1.25rem] gap-2 py-8 md:py-0 shadow-sm  shadow-blue-400">
            <MdSecurity
              className=" p-3 rounded-[50%] text-blue-400 bg-white"
              size={70}
            />
            <h3 className="text-lg mt-3">Non-contact Shipping</h3>
          </div>
          <div className="flex justify-center items-center bg-blue-100 text-center flex-1 rounded-[1.25rem] gap-2 py-8 md:py-0 shadow-sm  shadow-blue-400">
            <GiReceiveMoney
              className=" p-3 rounded-[50%] text-blue-400 bg-white"
              size={70}
            />
            <h3 className="text-lg mt-3">Money-back Guaranteed</h3>
          </div>
        </div>
        <div className="bg-blue-100 h-[18.75rem] rounded-2xl flex md:flex-col items-center justify-center shadow-sm  shadow-blue-400 gap-2">
          <RiSecurePaymentLine
            className=" p-3 rounded-[50%] text-blue-400 bg-white"
            size={70}
          />
          <h3 className="text-lg mt-3">Super Secure Payment System</h3>
        </div>
      </div>
    </section>
  );
};

export default Services;
