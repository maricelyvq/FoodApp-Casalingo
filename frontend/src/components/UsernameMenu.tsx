import { useAuth0 } from "@auth0/auth0-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@radix-ui/react-dropdown-menu";
import { SquareUserIcon } from "lucide-react";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const UsernameMenu = () => {

    const { user, logout} = useAuth0();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center px-3 font-bold hover:text-green-800 gap-2">
                <SquareUserIcon className="text-green-800" />
                {user?.email}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>
                    <Link to="/user-profile" className="font-bold hover:text-green-800">
                        User Profile
                    </Link>
                </DropdownMenuItem>
                <Separator />
                <DropdownMenuItem>
                    <Button
                        onClick={() => logout()}
                        className="flex flex-1 font-bold bg-green-800 hover:bg-green-500">
                        Log Out
                    </Button>
                </DropdownMenuItem>
            </DropdownMenuContent>

        </DropdownMenu>



    )

}

export default UsernameMenu;