import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import sidePic1 from '../../../assets/1.png'
import sidePic2 from '../../../assets/2.png'
import sidePic3 from '../../../assets/3.png'

import {  FaBoxOpen, FaBoxes } from "react-icons/fa";
import moment from "moment";

const LeftSideNav = () => {
  const [Category, setCategory] = useState([])
  useEffect(() => {
    fetch('categories.json')
    .then(res => res.json())
    .then(data => setCategory(data))
    
  },[])
       return (
         <div>
           <h1 className="text-2xl p-3 text-center">All Category</h1>
           {Category.map((Category) => (
             <NavLink
               className={"ml-4 text-xl block my-5 hover:bg-red-500 p-3"}
               key={Category.id}
             >
               {Category.name}
             </NavLink>
           ))}

           <div className="space-y-8 p-4">
             <div className='sticky'>
               <img src={sidePic1} alt="" />
               <h1 className="mt-2">
                 Bayern Slams Authorities Over Flight Delay to Club
               </h1>
               <div className="flex items-center gap-3">
                 <p>Sports</p>
                 <FaBoxOpen></FaBoxOpen>
                 <p className="space-y-3">
                   {moment().format(" MMM,ddd, YYYY,")}
                 </p>
               </div>
             </div>

             <div>
               <img src={sidePic2} alt="" />
               <h1 className='mt-2'>
                 Bayern Slams Authorities Over Flight Delay to Club
               </h1>
               <div className="flex items-center gap-3">
                 <p>Sports</p>
                 <FaBoxOpen></FaBoxOpen>
                 <p className="space-y-3">
                   {moment().format(" MMM,ddd, YYYY,")}
                 </p>
               </div>
             </div>
             <div className='sticky'>
               <img src={sidePic3} alt="" />
               <h1 className='mt-2'>
                 Bayern Slams Authorities Over Flight Delay to Club
               </h1>
               <div className="flex items-center gap-3">
                 <p>Sports</p>
                 <FaBoxOpen></FaBoxOpen>
                 <p className="space-y-3">
                   {moment().format(" MMM,ddd, YYYY,")}
                 </p>
               </div>
             </div>
           </div>
         </div>
       );
};

export default LeftSideNav;
