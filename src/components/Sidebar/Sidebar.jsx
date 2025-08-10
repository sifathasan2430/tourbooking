import { useLocation, Link, useNavigate } from "react-router-dom";
import { Home, PlusSquare, List, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useContext } from "react";
import UserAuthContext from "../../Context/Context"; // adjust path if needed
import Swal from "sweetalert2";

export function Sidebar() {
  const { pathname } = useLocation();
  const { user, userLogOut } = useContext(UserAuthContext);
  const navigate = useNavigate();

  const navItems = [
    { href: "/dashboard", icon: <Home className="h-4 w-4" />, label: "Dashboard" },
    { href: "/dashboard/add-listing", icon: <PlusSquare className="h-4 w-4" />, label: "Add Listing" },
    { href: "/dashboard/listings", icon: <List className="h-4 w-4" />, label: "All Listings" },
  ];

  const handleLogout = async () => {
    try {
      await userLogOut();
      Swal.fire({
        icon: "success",
        title: "Logged out successfully",
        timer: 1500,
        showConfirmButton: false,
      });
      navigate("/");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Logout Failed",
        text: error.message,
      });
    }
  };

  return (
    <>
      {/* Mobile Sidebar */}
      <Sheet>
        <SheetTrigger asChild className="md:hidden">
          <Button variant="outline" size="icon" className="fixed top-4 left-4 z-50">
            <Home className="h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[250px]">
          <div className="space-y-4 py-4 h-full flex flex-col justify-between">
            <div className="px-3 py-2">
              <h2 className="mb-2 px-4 text-lg font-semibold">Apartment Manager</h2>
              <div className="space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                      pathname === item.href
                        ? "bg-muted text-primary"
                        : "text-muted-foreground hover:text-primary hover:bg-muted/50"
                    }`}
                  >
                    {item.icon}
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="px-3">
              <Button
                onClick={handleLogout}
                variant="outline"
                className="w-full flex items-center gap-2"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <div className="hidden md:flex flex-col w-[250px] border-r h-screen fixed top-0 left-0 bg-white z-40 shadow-md justify-between">
        <div className="space-y-4 py-4 overflow-y-auto">
          <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-lg font-semibold">Apartment Manager</h2>
            <div className="space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                    pathname === item.href
                      ? "bg-muted text-primary"
                      : "text-muted-foreground hover:text-primary hover:bg-muted/50"
                  }`}
                >
                  {item.icon}
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="px-3 pb-4">
          <Button
            onClick={handleLogout}
            variant="outline"
            className="w-full flex items-center gap-2"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
