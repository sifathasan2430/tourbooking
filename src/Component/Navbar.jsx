import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu";
import { Menu, LogOut, LogIn } from 'lucide-react';
import UserAuthContext from '../Context/Context';

const Navbar = () => {
  const { user, userLogOut } = useContext(UserAuthContext);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/allpackage", label: "All Packages" },
    ...(user ? [
      { path: "/bookings", label: "My Bookings" },
      { path: "/about", label: "About Us" }
    ] : []),
  ];

  const handleLogout = async () => {
    await userLogOut();
    navigate("/login");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-gray-200 dark:bg-[#1e1e1e]/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="text-xl font-bold tracking-wide text-[#e17100]">
          Tour<span className="text-black dark:text-white">Ease</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-all ${
                location.pathname === link.path
                  ? "text-[#e17100] underline underline-offset-4"
                  : "text-gray-800 dark:text-gray-200 hover:text-[#e17100]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Side Auth */}
        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <img
                  src={user.photoURL }
                  alt="avatar"
                  className="w-9 h-9 rounded-full cursor-pointer border border-gray-300 dark:border-gray-600"
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuLabel className="truncate">{user.displayName || 'User'}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={handleLogout}
                  className="text-red-600 dark:text-red-400 cursor-pointer"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Link to="/login">
                <div className="px-4 py-1.5 text-sm rounded-md bg-white dark:bg-gray-900 text-[#e17100] border border-[#e17100] hover:bg-[#e17100] hover:text-white transition-all duration-200">
                  Login
                </div>
              </Link>
              <Link to="/signup">
                <div className="px-4 py-1.5 text-sm rounded-md bg-[#e17100] text-white hover:bg-[#cc6300] transition-all duration-200">
                  Sign Up
                </div>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button className="text-[#e17100]">
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px]">
              <SheetHeader>
                <SheetTitle className="text-left text-xl font-bold text-[#e17100]">TourEase</SheetTitle>
              </SheetHeader>

              <div className="grid gap-4 py-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setOpen(false)}
                    className={`py-2 px-4 rounded-md font-medium text-sm transition-colors ${
                      location.pathname === link.path
                        ? "bg-[#e17100]/10 text-[#e17100]"
                        : "hover:bg-accent hover:text-accent-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}

                <div className="border-t pt-4">
                  {user ? (
                    <>
                      <div className="flex items-center gap-2 px-4 py-2">
                        <img
                          src={user.photoURL }
                          alt="avatar"
                          className="w-6 h-6 rounded-full"
                        />
                        <span className="font-medium text-sm text-gray-800 dark:text-gray-100">
                          {user.displayName || "User"}
                        </span>
                      </div>
                      <button
                        onClick={() => {
                          handleLogout();
                          setOpen(false);
                        }}
                        className="flex items-center gap-2 py-2 px-4 rounded-md text-red-600 hover:bg-red-100 text-sm"
                      >
                        <LogOut className="h-4 w-4" />
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <Link
                        to="/login"
                        onClick={() => setOpen(false)}
                        className="block px-4 py-2 text-sm rounded-md border border-[#e17100] text-[#e17100] hover:bg-[#e17100] hover:text-white transition"
                      >
                        Login
                      </Link>
                      <Link
                        to="/signup"
                        onClick={() => setOpen(false)}
                        className="block text-center bg-[#e17100] hover:bg-[#cc6300] text-white rounded-md px-4 py-2 text-sm transition-colors"
                      >
                        Sign Up
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
