import React from "react";
import {BiSolidBusiness} from 'react-icons/bi';
import {AiFillFacebook,AiOutlineLinkedin, AiOutlineInstagram,AiFillPhone,AiOutlineMail } from 'react-icons/ai';
import FormCard from "../components/FormCard";
import NavBar from "../components/Navbar"; 
const ContactUs = () => {
  return (
    <div className="overflow-x-hidden bg-slate-100">
      {/* <img src='/screen-12.jpg' height="50" width="600" alt='Background Image' className='xl:w-full lg:w-full md:w-full sm:w-full xl:h-80 lg:h-80 md:h-64 sm:h-64' /> */}
      <NavBar />
      <div className="w-[55%] relative left-[28%] bottom-16">
      </div>
      <div className="font-semibold font-serif text-slate-200 relative bottom-40 xl:text-7xl lg:text-7xl md:text-6xl sm:text-5xl text-center">Contact Us</div>
      <div className="relative bottom-2">
        <div className="w-[41%] relative top-16 xl:left-20 lg:left-16 md:left-14 sm:left-14 ">
          <div>
            <h1 className="font-sans font-bold text-4xl">Get in touch</h1>
            <p className="m-5 font-serif">Looking for help? Fill the form and start a new adventure.</p>
          </div>
          <hr className="xl:w-[65%] lg:w-[65%]"/>
          <hr className="xl:w-[65%] lg:w-[65%]"/>
          <hr className="xl:w-[65%] lg:w-[65%]"/>
          <div className="flex flex-col">
            <div>
              <h1 className="font-semibold font-sans text-xl">Headquaters</h1>
              <div className="flex m-5">
              <BiSolidBusiness className=" text-blue-600 mr-2"/>
              <p>North 24 PGS, West Bengal, India</p>
              </div>
            </div>
            <div className="mb-2">
            <h1 className="font-semibold font-sans text-xl">Phone: </h1>
            <div className="flex m-3">
              <AiFillPhone className=" text-blue-600 mr-2"/>
              <p>+91 9883224092</p>
            </div>
            </div>
            <div>
              <h1 className="font-semibold font-sans text-xl">Support</h1>
              <div className="flex m-3">
              <AiOutlineMail className=" text-blue-600"/>
              <p className="ml-2">somakpoddar@gmail.com</p>
              </div>
            </div>
            <div>
              <h1 className="font-semibold font-sans text-xl">Follow Us</h1>
              <div>
                 <div className="flex m-4">
                 <AiFillFacebook className="mr-2 text-blue-600 cursor-pointer"/>
                 <AiOutlineInstagram className="ml-1 mr-2 text-blue-600 cursor-pointer"/>
                 <AiOutlineLinkedin className="ml-1 text-blue-600 cursor-pointer"/>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FormCard />
    </div>
  )
}

export default ContactUs;

