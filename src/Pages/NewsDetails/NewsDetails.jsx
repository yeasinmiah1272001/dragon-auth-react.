import React from 'react';
import Header from '../Header/Header';
import RightSideNav from '../Shared/RightSideNav/RightSideNav';
import { useParams } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';


const NewsDetails = () => {
       const { id } = useParams();
       return (
         <div>
           <Header></Header>
           <Navbar></Navbar>
           <div className="flex gird md:grid-cols-4 justify-between">

            
             <div className="col-span-3">
               <h1>Middle class</h1>
               <h1>{id}</h1>
              
              
             </div>

             <div className="">
               <RightSideNav></RightSideNav>
             </div>
           </div>
         </div>
       );
};

export default NewsDetails;