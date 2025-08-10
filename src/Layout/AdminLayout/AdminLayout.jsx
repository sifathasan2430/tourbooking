import { NavLink, Outlet } from "react-router-dom";
import { PackagePlus, LayoutDashboard, Package } from "lucide-react";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/admin/dashboard"
                className={({ isActive }) =>
                  `flex items-center p-2 rounded-lg ${
                    isActive ? "bg-gray-700" : ""
                  }`
                }
              >
                <LayoutDashboard className="mr-2" />
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/add-package"
                className={({ isActive }) =>
                  `flex items-center p-2 rounded-lg ${
                    isActive ? "bg-gray-700" : ""
                  }`
                }
              >
                <PackagePlus className="mr-2" />
                Add Package
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/manage-packages"
                className={({ isActive }) =>
                  `flex items-center p-2 rounded-lg ${
                    isActive ? "bg-gray-700" : ""
                  }`
                }
              >
                <Package className="mr-2" />
                Manage Packages
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-8 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
