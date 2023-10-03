import React from 'react';
import logo from '../.././assets/logo.png'
import moment from "moment";

const Header = () => {
       return (
         <div className='text-center my-4'> 
           <img className='mx-auto' src={logo} alt="" />
           <p className='my-3'>Journalism Without Fear or Favour</p>
           <p className='my-3'>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
         </div>
       );
};

export default Header;