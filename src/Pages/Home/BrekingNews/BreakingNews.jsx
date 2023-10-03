import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
       return (
         <div className="flex gap-1">
           <button className="btn btn-error">Latest</button>
           <Marquee
             pauseOnHover={true}
             speed={100}
             className="border bg-red-500 shadow-2xl"
           >
             <Link className="mr-10" to='/'>
               Match Highlights: Germany vs Spain — as it happened ! Match
               Highlights:.....
             </Link>
             <Link className="mr-12" to='/'>
               Match Highlights: Germany vs Spain — as it happened ! Match
               Highlights: Germany vs Spain as...
             </Link>
             <Link className="mr-12" to='/'>
               Match Highlights: Germany vs Spain — as it happened ! Match
               Highlights: Germany vs Spain as...
             </Link>
           </Marquee>
         </div>
       );
};

export default BreakingNews;