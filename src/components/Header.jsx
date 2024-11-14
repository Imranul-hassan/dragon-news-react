import moment from "moment";
import logo from "../assets/logo.png"
const Header = () => {
    return ( 
        <div className="flex flex-col items-center justify-center gpa-3">
            <div className=" mt-4">
                <img src={logo} alt="" />
            </div>
            <h2 className="text-[#706F6F]">Journalism Without Fear or Favour</h2>
            <p>
            {
                moment().format('dddd MMMM Do YYYY')
            }
            </p>
        </div>
    );
};

export default Header;