import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Layout() {
  return (
    <div>
      <Header />
      <div className="flex mt-[40px]">
        <div className=" md:block hidden mt-4">
          <Sidebar />
        </div>
        <main className="w-full mt-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;
