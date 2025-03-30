import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";

const Header = () => {

    return (
      
        <div style={{ backgroundColor: "#ffbd59" }} className="border-b-3 px-2 py-4">
            <div className = "container mx-auto flex justify-between items-center">
                <Link 
                to="/"
                className="text-2xl font-bold font-serif tracking-tight text-green-800" >
                Casalingo.com
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