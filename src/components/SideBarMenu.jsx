function SideBarMenu({ openSidebar }) {
  return (
    <nav
      className={` pt-[80px] px-4 bg-[hsla(0,0%,100%,.16)] absolute z-40 min-w-[375px] h-[100vh] top-0 left-0 backdrop-blur-lg ${
        !openSidebar ? "translate-x-[-200%]" : "translate-x-0"
      } transition-all`}
    >
      <h1>Sidebar</h1>
    </nav>
  );
}

export default SideBarMenu;
