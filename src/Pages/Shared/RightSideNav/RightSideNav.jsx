import React from 'react';
import { FaBeer, FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";

import qZon1 from '../../../assets/qZone1.png'
import qZon2 from '../../../assets/qZone2.png'
import qZon3 from '../../../assets/qZone3.png'

const RightSideNav = () => {
       return (
         <div>
           <div className="p-4  space-y-3">
             <h1 className="text-2xl">Login With</h1>
             <button className="btn btn-outline w-full">
               <FaGoogle></FaGoogle>
               Google
             </button>
             <button className="btn btn-outline w-full">
               <FaGithub></FaGithub>
               github
             </button>
           </div>

           {/* Find us */}

           <div className="p-4 ">
             <h1 className="text-2xl mb-4">Find Us On</h1>
             <a
               className="p-4 flex items-center gap-3 border rounded-t-lg"
               href=""
             >
               <FaFacebook></FaFacebook>
               <span>Facebook</span>
             </a>
             <a className="p-4 flex items-center gap-3 border-x" href="">
               <FaTwitter></FaTwitter>
               <span>Twitter</span>
             </a>
             <a
               className="p-4 flex items-center gap-3 border rounded-b-lg"
               href=""
             >
               <FaInstagram></FaInstagram>
               <span>Instagram</span>
             </a>
           </div>


            {/* Q zoon */}
           <div className="p-4  space-y-3">
             <h1 className="text-2xl">Q-Zone</h1>

             <img src={qZon1} alt="" />
             <img src={qZon2} alt="" />
             <img src={qZon3} alt="" />
             
           </div>
         </div>
       );
};

export default RightSideNav;