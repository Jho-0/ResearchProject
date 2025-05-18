// NavBar.jsx
import logo from "../assets/LMCDC.png";
import { Link, useLocation } from "react-router"; // or "react-router-dom" if you're on v6
import { useAuth } from "../context/AuthContext";
import { RiLogoutBoxFill } from "react-icons/ri";
import { FaClipboardList } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { HiDocumentReport } from "react-icons/hi";
import { FiUser } from "react-icons/fi";

export default function NavBar() {
  const { logout } = useAuth();
  const location = useLocation();

  // Map each route to the title you want displayed
  const routeTitles = {
    "/dashboard": "Dashboard",
    "/user": "User Management",
    "/monitor-logs": "Monitor Visitor Logs",
    "/generate-report": "Generate Report",
  };


  const title = routeTitles[location.pathname] || "Dashboard";

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[#1b5e20] text-white flex flex-col items-center py-6 fixed h-screen z-50">
        <img src={logo} alt="LMCDC" className="h-16 mb-2" />
        <h1 className="text-2xl font-semibold mb-10">VPMS</h1>

        <nav className="w-full px-4 space-y-2 text-sm">
          <Link
            to="/dashboard-admin"
            className="flex items-center gap-3 px-4 py-3 rounded-md hover:bg-[#388e3c]"
          >
            <MdDashboard className="text-lg" /> Dashboard
          </Link>
          <Link
            to="/monitor-visitor-logs"
            className="flex items-center gap-3 px-4 py-3 rounded-md hover:bg-[#388e3c]"
          >

            <FaClipboardList className="text-lg" /> Monitor Visitor Logs
          </Link>
          <Link
            to="/generate-report"
            className="flex items-center gap-3 px-4 py-3 rounded-md hover:bg-[#388e3c]"
          >
            <HiDocumentReport className="text-lg" /> Generate Report
          </Link>
          <button
            onClick={logout}
            className="flex items-center gap-3 px-4 py-3 rounded-md hover:bg-[#388e3c] w-full text-left"
          >
            <RiLogoutBoxFill className="text-lg" /> Logout
          </button>
        </nav>
      </aside>

      {/* Top Navbar */}
      <div className="flex-1">
        <header className="fixed top-0 left-64 right-0 h-16 bg-[#a5d6a7] flex items-center justify-center z-40 shadow-sm">
          <div className="w-full max-w-6xl flex items-center justify-between px-6">
            <h2 className="text-xl font-semibold text-[#2e2e2e]">
              {title}
            </h2>
            <div className="flex items-center gap-2 text-[#2e2e2e]">
              <FiUser className="text-xl" />
              <span className="font-medium">Admin</span>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}
