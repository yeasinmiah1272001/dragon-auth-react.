import React from 'react';
import Header from '../Header/Header';
import Navbar from '../Shared/Navbar/Navbar';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../Shared/RightSideNav/RightSideNav';
import BreakingNews from './BrekingNews/BreakingNews';

const Home = () => {
       return (
         <div>
           <Header></Header>
           <BreakingNews></BreakingNews>
           <Navbar></Navbar>
        
           <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
             <div className="border">
               <LeftSideNav></LeftSideNav>
             </div>

             <div className="border md:col-span-2">
               <h1 className="text-3xl">Middle class</h1>
             </div>

             <div className="border">
               <RightSideNav></RightSideNav>
             </div>
           </div>
         </div>
       );
};

export default Home;