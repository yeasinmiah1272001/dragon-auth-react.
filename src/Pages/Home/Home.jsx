import React from 'react';
import Header from '../Header/Header';
import Navbar from '../Shared/Navbar/Navbar';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../Shared/RightSideNav/RightSideNav';
import BreakingNews from './BrekingNews/BreakingNews';
import { useLoaderData } from 'react-router-dom';
import NewsCard from './NewsCard/NewsCard';

const Home = () => {
  const news = useLoaderData();
  console.log(news);
       return (
         <div>
           <Header></Header>
           <BreakingNews></BreakingNews>
           <Navbar></Navbar>
        
           <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
             <div>
               <LeftSideNav></LeftSideNav>
             </div>



             <div className=" md:col-span-2">

             {
              news.map(aNews => <NewsCard key={aNews._id} aNews={aNews}></NewsCard>)
             }
             </div>



             <div>
               <RightSideNav></RightSideNav>
             </div>
           </div>
         </div>
       );
};

export default Home;