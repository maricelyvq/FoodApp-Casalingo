import { Menu, SquareUserIcon } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import MobileNavLinks from "./MobileNavLinks";
import { useAuth0 } from "@auth0/auth0-react";



const MobileNav = () => {
    const {isAuthenticated, loginWithRedirect, user} = useAuth0();

    return (
        <Sheet>
            <SheetTrigger>
                <Menu className="text-green-800" />
            </SheetTrigger>
            <SheetContent className="space-y-3"> 
            <SheetTitle>
          {isAuthenticated ? (
            <span className="flex items-center font-bold gap-2">
              <SquareUserIcon className="text-green-800" />
              {user?.email}
            </span>
          ) : (
            <span> Welcome to MernEats.com!</span>
          )}
        </SheetTitle>
                <Separator />
                <SheetDescription className="flex flex-col gap-4">
          {isAuthenticated ? (
            <MobileNavLinks />
          ) : (
            <Button
              onClick={() => loginWithRedirect()}
              className="flex-1 font-bold bg-green-800"
            >
              Log In
            </Button>
          )}
        </SheetDescription>
            </SheetContent>
        </Sheet>


    );

}

export default MobileNav;
