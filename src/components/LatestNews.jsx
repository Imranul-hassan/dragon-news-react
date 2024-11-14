import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <div className="flex gap-2 bg-slate-100 p-3 my-4">
            <p className="bg-[#D72050] text-white px-2 py-1">Latest</p>
            <Marquee pauseOnHover={true} className="space-x-10">
                <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, a?</Link>
                <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, a?</Link>
                <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, a?</Link>
            </Marquee>
            
            
        </div>
    );
};

export default LatestNews;