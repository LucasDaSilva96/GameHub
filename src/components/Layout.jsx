import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Layout() {
  return (
    <div>
      <Header />
      <div className="flex mt-[40px]">
        <div className=" md:block hidden">
          <Sidebar />
        </div>
        <main className="w-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;
