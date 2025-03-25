import { Link } from "react-router-dom";

const Header = () => {

    return (
      
        <div className="border-b-3 border-green-300 py-6">
            <div className = "container mx-auto flex justify-between items-center">
                <Link 
                to="/"
                className="text-3x1 font-bold tracking-tight text-orange-500" >
                Casalingo.com
                </Link>
            </div>    
        </div>
          
    );
};

export default Header;