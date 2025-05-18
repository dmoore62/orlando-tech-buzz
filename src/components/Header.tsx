
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h1 className="text-3xl font-bold">Orlando Tech Buzz</h1>
            <p className="text-blue-200">Your Central Florida Technology Hub</p>
          </div>
          
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/" className="text-white hover:text-blue-200 px-4 py-2">
                  Home
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-blue-700 text-white">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[400px]">
                    <div className="bg-white text-blue-800 rounded-md p-3">
                      <h3 className="font-medium">News</h3>
                      <p className="text-sm text-gray-600">Latest tech news from Central Florida</p>
                    </div>
                    <div className="bg-white text-blue-800 rounded-md p-3">
                      <h3 className="font-medium">Events</h3>
                      <p className="text-sm text-gray-600">Upcoming technology events and meetups</p>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/" className="text-white hover:text-blue-200 px-4 py-2">
                  About
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
