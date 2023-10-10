import React from 'react';
import { Link } from 'react-router-dom';

const NewsCard = ({aNews}) => {
       const { title, details, _id, image_url } = aNews;
       return (
         <div>
           <div className="card card-compact  bg-base-100 shadow-xl mb-10">
             <figure>
               <img src={image_url} alt="Shoes" />
             </figure>
             <div className="card-body">
               <h2 className="card-title">Shoes!</h2>
               <h1 className="text-xl">{title}</h1>

               <p>
                 {details.length > 200 ? (
                   <p>
                     {details.slice(0, 200)} .
                     <Link
                       to={`/news/${_id}`}
                       className="text-red-600 font-bold"
                     >
                       Read more
                     </Link>
                   </p>
                 ) : (
                   <p>{details}</p>
                 )}
               </p>

               <div className="card-actions justify-end">
                 <button className="btn btn-primary">Buy Now</button>
               </div>
             </div>
           </div>
         </div>
       );
};

export default NewsCard;