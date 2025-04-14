import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";
import title from "../assets/title.png";

const Header = () => {

    return (
      
        <div className="bg-amber-600  border-b-3 px-2 py-4">
            <div className = "container mx-auto flex justify-between items-center">
                <Link 
                to="/"
                className="flex items-center">
                    <img src={title} alt="Logo" className="w-50 h-10" />
                </Link>
                <div className="md:hidden">
                    <MobileNav/>
                </div>
                <div  className="hidden md:block">
                    <MainNav />
                </div>
            </div>    
        </div>
          
    );
};

export default Header;