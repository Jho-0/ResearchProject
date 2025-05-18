import NavBar from "./NavBar";


export default function Layout({ children }) {
  return (
    <div className="flex h-screen bg-white text-black">
      {/* Sidebar */}
      <NavBar />

      {/* Main Content */}
      <div className="pl-64 w-full flex flex-col overflow-hidden pt-16">
        {/* Added `pt-16` to push content below the fixed navbar */}
        <div className="flex-grow p-6 overflow-auto">{children}</div>

      </div>
    </div>
  );
}
