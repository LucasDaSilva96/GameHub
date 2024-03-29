import Sidebar from "./Sidebar";

function SideBarMenu({ openSidebar, handleCloseAll }) {
  return (
    <nav
      className={` pt-[80px] px-4 bg-[#151515c5] fixed z-40 min-w-[375px] h-[100vh] top-0 left-0 backdrop-blur-lg ${
        !openSidebar ? "translate-x-[-200%]" : "translate-x-0"
      } transition-all`}
    >
      <Sidebar handleCloseAll={handleCloseAll} />
    </nav>
  );
}

export default SideBarMenu;
