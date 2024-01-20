import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Sidebar({ handleCloseAll }) {
  const [showAllPlatforms, setShowAllPlatforms] = useState(false);

  function handleShowAllPlatforms() {
    setShowAllPlatforms((e) => !e);
  }
  return (
    <aside className=" max-h-[85vh] min-w-[275px] flex flex-col text-2xl gap-4 overflow-y-auto overflow-x-hidden pb-4">
      <NavLink
        to="/"
        onClick={handleCloseAll}
        className="font-black transition-all hover:underline"
      >
        All Games
      </NavLink>
      <div>
        <h1 className="py-3 font-black">New Releases</h1>
        <ul className="flex flex-col gap-3">
          <li className="text-base hover:underline transition-all">
            <NavLink
              to="priorGames"
              className="flex gap-2 items-center"
              onClick={handleCloseAll}
            >
              <svg
                className="w-8 bg-[hsla(0,0%,100%,.16)] py-2 px-2 rounded-lg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#FFF"
                  d="M23.48 10.876a1.84 1.84 0 00.435-1.841c-.205-.656-.737-1.124-1.39-1.223l-5.811-.881a.762.762 0 01-.572-.434L13.544 1C13.252.384 12.66 0 12 0s-1.251.384-1.543 1.001L7.86 6.497a.763.763 0 01-.573.434l-5.81.882C.821 7.91.29 8.38.085 9.035a1.84 1.84 0 00.435 1.842l4.204 4.278c.18.182.262.445.22.702l-.992 6.04a1.814 1.814 0 00.375 1.457 1.69 1.69 0 002.122.437l5.197-2.852a.749.749 0 01.707 0l5.197 2.852c.253.139.523.209.8.209.509 0 .99-.236 1.322-.646.33-.408.463-.926.375-1.457l-.992-6.04a.816.816 0 01.219-.702l4.204-4.279z"
                ></path>
              </svg>
              <span>Last 30 days</span>
            </NavLink>
          </li>
          <li className="text-base hover:underline transition-all">
            <NavLink
              to="thisWeek"
              className="flex gap-2 items-center"
              onClick={handleCloseAll}
            >
              <svg
                className="w-8 bg-[hsla(0,0%,100%,.16)] py-2 px-2 rounded-lg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 19 26"
              >
                <path
                  fill="#FFF"
                  d="M4.929 25.819C1.783 16.36 8.43 12.909 8.43 12.909c-.465 5.046 2.679 8.977 2.679 8.977 1.156-.318 3.363-1.805 3.363-1.805 0 1.805-1.165 5.735-1.165 5.735s4.077-2.875 5.36-7.65c1.281-4.776-2.441-9.57-2.441-9.57.224 3.38-1.03 6.704-3.485 9.244.123-.13.226-.273.305-.43.441-.804 1.15-2.896.735-7.741C13.197 2.868 6.442 0 6.442 0 7.024 4.144 5.28 5.098 1.19 12.964c-4.09 7.864 3.74 12.855 3.74 12.855z"
                ></path>
              </svg>
              <span>This week</span>
            </NavLink>
          </li>{" "}
          <li className="text-base hover:underline transition-all">
            <NavLink
              to="nextWeek"
              className="flex gap-2 items-center"
              onClick={handleCloseAll}
            >
              <svg
                className="w-8 bg-[hsla(0,0%,100%,.16)] py-2 px-2 rounded-lg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 16"
              >
                <path
                  fill="#FFF"
                  d="M19.788.212a.712.712 0 00-.503-.197h-1.428a.712.712 0 00-.502.197.619.619 0 00-.212.468v7.05a.669.669 0 00-.146-.198L9.073.15c-.141-.132-.26-.177-.357-.135-.097.042-.145.152-.145.333V7.73a.668.668 0 00-.145-.198L.502.15C.361.018.242-.027.145.015.048.057 0 .167 0 .348v15.304c0 .18.049.291.145.333.097.042.216-.004.357-.135l7.924-7.382a.906.906 0 00.145-.198v7.382c0 .18.049.291.145.333.097.041.216-.004.357-.136l7.924-7.381a.909.909 0 00.146-.198v7.05c0 .18.07.335.212.467a.712.712 0 00.502.197h1.429c.193 0 .36-.065.502-.197a.62.62 0 00.212-.468V.68a.62.62 0 00-.212-.468z"
                ></path>
              </svg>
              <span>Next week</span>
            </NavLink>
          </li>{" "}
          <li className="text-base transition-all">
            <NavLink
              to="releaseCalender"
              className="flex gap-2 items-center"
              onClick={handleCloseAll}
            >
              <p className="w-8 bg-[hsla(0,0%,100%,.16)] py-2 px-2 rounded-lg font-black ">
                31
              </p>
              <span className="order-last hover:underline">
                Release calender
              </span>
            </NavLink>
          </li>
        </ul>
      </div>

      <div>
        <h1 className="py-3 font-black">Top</h1>
        <ul className="flex flex-col gap-3">
          <li className="text-base hover:underline transition-all">
            <NavLink
              to="bestOfTheYear"
              className="flex gap-2 items-center"
              onClick={handleCloseAll}
            >
              <svg
                className="w-8 bg-[hsla(0,0%,100%,.16)] py-2 px-2 rounded-lg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 22"
              >
                <path
                  d="M12.104 14.338c0-.2-.173-.324-.384-.273 0 0-.99.236-1.72.236s-1.72-.236-1.72-.236c-.21-.05-.384.072-.384.273v1.058c0 .2.179.365.397.365h3.414c.218 0 .397-.165.397-.365v-1.058zM16.033.73c0-.403-.355-.73-.794-.73H4.761c-.439 0-.794.327-.794.73v6.02c0 1.884.61 3.599 1.716 4.829A5.738 5.738 0 0010 13.499c1.67 0 3.202-.682 4.317-1.92 1.107-1.23 1.716-2.945 1.716-4.83V.73zM3.211 8.211C2.125 7.84 1.625 6.978 1.625 5.545V2.286h1.468V.827H.831c-.438 0-.794.327-.794.73v3.988c0 2.434 1.268 3.916 3.6 4.262a8.274 8.274 0 01-.426-1.596zm1.549 8.644c-.438 0-.793.327-.793.73v3.612c0 .402.355.73.794.73H15.24c.438 0 .793-.328.793-.73v-3.612c0-.403-.355-.73-.793-.73H4.76zM19.169.827h-2.262v1.46h1.468v3.258c0 1.433-.5 2.295-1.586 2.666a8.269 8.269 0 01-.426 1.596c2.332-.346 3.6-1.828 3.6-4.262V1.557c0-.403-.356-.73-.794-.73z"
                  fill="#FFF"
                ></path>
              </svg>
              <span>Best of the year</span>
            </NavLink>
          </li>
          <li className="text-base hover:underline transition-all">
            <NavLink
              to="popularLastYear"
              className="flex gap-2 items-center"
              onClick={handleCloseAll}
            >
              <svg
                className="w-8 bg-[hsla(0,0%,100%,.16)] py-1 px-1 rounded-lg"
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="#fff"
                viewBox="0 0 256 256"
              >
                <path d="M224,216a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,216Zm-88-40V80a16,16,0,0,1,16-16h40a16,16,0,0,1,16,16v96a16,16,0,0,1-16,16H152A16,16,0,0,1,136,176Zm16,0h40V80H152ZM48,176V40A16,16,0,0,1,64,24h40a16,16,0,0,1,16,16V176a16,16,0,0,1-16,16H64A16,16,0,0,1,48,176Zm16,0h40V40H64Z"></path>
              </svg>
              <span>Popular in {new Date().getFullYear() - 1}</span>
            </NavLink>
          </li>{" "}
          <li className="text-base hover:underline transition-all">
            <NavLink
              to="allTimeTop"
              className="flex gap-2 items-center"
              onClick={handleCloseAll}
            >
              <svg
                className="w-8 bg-[hsla(0,0%,100%,.16)] py-2 px-2 rounded-lg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 25 16"
              >
                <path
                  fill="#FFF"
                  d="M23.91 5.03a.636.636 0 01-.019.198l-1.535 5.867a.693.693 0 01-.673.505l-9.212.044H3.256c-.32 0-.6-.208-.677-.505L1.044 5.25a.637.637 0 01-.018-.204C.432 4.868 0 4.336 0 3.711c0-.772.657-1.4 1.465-1.4s1.466.628 1.466 1.4c0 .435-.209.824-.535 1.08l1.922 1.851c.486.468 1.16.736 1.85.736.815 0 1.592-.37 2.082-.99l3.159-3.999a1.365 1.365 0 01-.43-.989c0-.772.657-1.4 1.465-1.4.809 0 1.466.628 1.466 1.4 0 .374-.156.714-.407.966l.003.003 3.135 4.01c.49.625 1.27.999 2.088.999.696 0 1.35-.26 1.842-.73l1.935-1.847a1.375 1.375 0 01-.548-1.09c0-.772.657-1.4 1.465-1.4.809 0 1.466.628 1.466 1.4 0 .61-.41 1.127-.98 1.32zm-1.704 8.703c0-.368-.312-.666-.698-.666H3.458c-.385 0-.698.298-.698.666v1.6c0 .369.313.667.698.667h18.05c.386 0 .698-.298.698-.667v-1.6z"
                ></path>
              </svg>
              <span>All time top</span>
            </NavLink>
          </li>{" "}
        </ul>
      </div>

      <div>
        <h1 className="py-3 font-black">Browse</h1>
        <ul className="flex flex-col gap-3">
          <li className="text-base hover:underline transition-all">
            <NavLink
              to="collection"
              className="flex gap-2 items-center"
              onClick={handleCloseAll}
            >
              <svg
                className="w-8 bg-[hsla(0,0%,100%,.16)] py-1 px-1 rounded-lg font-black "
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="#fff"
                viewBox="0 0 256 256"
              >
                <path d="M245,110.64A16,16,0,0,0,232,104H216V88a16,16,0,0,0-16-16H130.67L102.94,51.2a16.14,16.14,0,0,0-9.6-3.2H40A16,16,0,0,0,24,64V208h0a8,8,0,0,0,8,8H211.1a8,8,0,0,0,7.59-5.47l28.49-85.47A16.05,16.05,0,0,0,245,110.64ZM93.34,64l27.73,20.8a16.12,16.12,0,0,0,9.6,3.2H200v16H146.43a16,16,0,0,0-8.88,2.69l-20,13.31H69.42a15.94,15.94,0,0,0-14.86,10.06L40,166.46V64Zm112,136H43.82l25.6-64h48.16a16,16,0,0,0,8.88-2.69l20-13.31H232Z"></path>
              </svg>
              <span>Your collection</span>
            </NavLink>
          </li>{" "}
          <li className="text-base hover:underline transition-all">
            <NavLink
              to="genres"
              className="flex gap-2 items-center"
              onClick={handleCloseAll}
            >
              <svg
                className="w-8 bg-[hsla(0,0%,100%,.16)] py-1 px-1 rounded-lg font-black "
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="#fff"
                viewBox="0 0 256 256"
              >
                <path d="M112,116a12,12,0,1,1-12-12A12,12,0,0,1,112,116Zm44-12a12,12,0,1,0,12,12A12,12,0,0,0,156,104Zm68,16v96a8,8,0,0,1-13.07,6.19l-24.26-19.85L162.4,222.19a8,8,0,0,1-10.13,0L128,202.34l-24.27,19.85a8,8,0,0,1-10.13,0L69.33,202.34,45.07,222.19A8,8,0,0,1,32,216V120a96,96,0,0,1,192,0Zm-16,0a80,80,0,0,0-160,0v79.12l16.27-13.31a8,8,0,0,1,10.13,0l24.27,19.85,24.26-19.85a8,8,0,0,1,10.14,0l24.26,19.85,24.27-19.85a8,8,0,0,1,10.13,0L208,199.12Z"></path>
              </svg>
              <span>Genres</span>
            </NavLink>
          </li>{" "}
        </ul>
      </div>

      <div>
        <h1 className="py-3 font-black">Platforms</h1>
        <ul className="flex flex-col gap-3">
          <li className="text-base hover:underline transition-all">
            <NavLink
              to="pcPlatform/4,5,6"
              className="flex gap-2 items-center"
              onClick={handleCloseAll}
            >
              <svg
                className="w-8 bg-[hsla(0,0%,100%,.16)] py-1 px-1 rounded-lg font-black "
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="#fff"
                viewBox="0 0 256 256"
              >
                <path d="M216,136H136a8,8,0,0,0-8,8v57.45a8,8,0,0,0,6.57,7.88l80,14.54A7.61,7.61,0,0,0,216,224a8,8,0,0,0,8-8V144A8,8,0,0,0,216,136Zm-8,70.41-64-11.63V152h64ZM104,136H40a8,8,0,0,0-8,8v40a8,8,0,0,0,6.57,7.87l64,11.64a8.54,8.54,0,0,0,1.43.13,8,8,0,0,0,8-8V144A8,8,0,0,0,104,136Zm-8,50.05-48-8.73V152H96ZM221.13,33.86a8,8,0,0,0-6.56-1.73l-80,14.55A8,8,0,0,0,128,54.55V112a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V40A8,8,0,0,0,221.13,33.86ZM208,104H144V61.22l64-11.63ZM109.13,54.22a8,8,0,0,0-6.56-1.73l-64,11.64A8,8,0,0,0,32,72v40a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V60.36A8,8,0,0,0,109.13,54.22ZM96,104H48V78.68L96,70Z"></path>
              </svg>
              <span>PC</span>
            </NavLink>
          </li>{" "}
          <li className="text-base hover:underline transition-all">
            <NavLink
              to="psPlatform/187,18,16,2"
              className="flex gap-2 items-center"
              onClick={handleCloseAll}
            >
              <svg
                className="w-8 bg-[hsla(0,0%,100%,.16)] py-1 px-1 rounded-lg font-black "
                viewBox="0 0 21 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.112 16L8 14.654V0s6.764 1.147 7.695 3.987c.931 2.842-.52 4.682-1.03 4.736-1.42.15-1.96-.748-1.96-.748V3.39l-1.544-.648L11.112 16zM12 14.32V16s7.666-2.338 8.794-3.24c1.128-.9-2.641-3.142-4.666-2.704 0 0-2.152.099-4.102.901-.019.008 0 1.51 0 1.51l4.948-1.095 1.743.73L12 14.32zm-5.024-.773s-.942.476-3.041.452c-2.1-.024-3.959-.595-3.935-1.833C.024 10.928 3.476 9.571 6.952 9v1.738l-3.693.952s-.632.786.217.81A11.934 11.934 0 007 12.046l-.024 1.5z"
                  fill="#FFF"
                ></path>
              </svg>
              <span>PlayStation</span>
            </NavLink>
          </li>{" "}
          <li className="text-base hover:underline transition-all">
            <NavLink
              to="xboxPlatform/1,186,14"
              className="flex gap-2 items-center"
              onClick={handleCloseAll}
            >
              <svg
                className="w-8 bg-[hsla(0,0%,100%,.16)] py-2 px-2 rounded-lg font-black "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
              >
                <path
                  fill="#FFF"
                  d="M3.564 1.357l-.022.02c.046-.048.11-.1.154-.128C4.948.435 6.396 0 8 0c1.502 0 2.908.415 4.11 1.136.086.052.324.215.446.363C11.4.222 7.993 2.962 7.993 2.962c-1.177-.908-2.26-1.526-3.067-1.746-.674-.185-1.14-.03-1.362.141zm10.305 1.208c-.035-.04-.074-.076-.109-.116-.293-.322-.653-.4-.978-.378-.295.092-1.66.584-3.342 2.172 0 0 1.894 1.841 3.053 3.723 1.159 1.883 1.852 3.362 1.426 5.415A7.969 7.969 0 0016 7.999a7.968 7.968 0 00-2.13-5.434zM10.98 8.77a55.416 55.416 0 00-2.287-2.405 52.84 52.84 0 00-.7-.686l-.848.854c-.614.62-1.411 1.43-1.853 1.902-.787.84-3.043 3.479-3.17 4.958 0 0-.502-1.174.6-3.88.72-1.769 2.893-4.425 3.801-5.29 0 0-.83-.913-1.87-1.544l-.007-.002s-.011-.009-.03-.02c-.5-.3-1.047-.53-1.573-.56a1.391 1.391 0 00-.878.431A8 8 0 0013.92 13.381c0-.002-.169-1.056-1.245-2.57-.253-.354-1.178-1.46-1.696-2.04z"
                ></path>
              </svg>
              <span>Xbox</span>
            </NavLink>
          </li>{" "}
          {showAllPlatforms && (
            <React.Fragment>
              <li className="text-base hover:underline transition-all">
                <NavLink
                  to="nintendoPlatform/7,8"
                  className="flex gap-2 items-center"
                  onClick={handleCloseAll}
                >
                  <svg
                    className="w-8 bg-[hsla(0,0%,100%,.16)] py-1 px-1 rounded-lg font-black "
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 21 16"
                  >
                    <path
                      fill="#FFF"
                      fillRule="evenodd"
                      d="M8 0h5a8 8 0 110 16H8A8 8 0 118 0zm-.135 1.935a6.065 6.065 0 000 12.13h5.12a6.065 6.065 0 000-12.13h-5.12zm-1.33 2.304h2.401l3.199 5.175V4.24h2.346v7.495H12.18L8.864 6.537v5.201H6.53l.005-7.499z"
                    ></path>
                  </svg>
                  <span>Nintendo</span>
                </NavLink>
              </li>

              <li className="text-base hover:underline transition-all">
                <NavLink
                  to="phonePlatform/21,3"
                  className="flex gap-2 items-center"
                  onClick={handleCloseAll}
                >
                  <svg
                    className="w-8 bg-[hsla(0,0%,100%,.16)] py-1 px-1 rounded-lg font-black "
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    fill="#fff"
                    viewBox="0 0 256 256"
                  >
                    <path d="M176,16H80A24,24,0,0,0,56,40V216a24,24,0,0,0,24,24h96a24,24,0,0,0,24-24V40A24,24,0,0,0,176,16Zm8,200a8,8,0,0,1-8,8H80a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8ZM168,56a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,56Z"></path>
                  </svg>
                  <span>Phone</span>
                </NavLink>
              </li>
            </React.Fragment>
          )}
        </ul>
        <div
          className="flex gap-2 items-center mt-3 opacity-50 cursor-pointer hover:underline "
          onClick={handleShowAllPlatforms}
        >
          {!showAllPlatforms && (
            <svg
              className="w-8 bg-[hsla(0,0%,100%,.16)] py-1 px-1 rounded-lg "
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              fill="#fff"
              viewBox="0 0 256 256"
            >
              <path d="M50.34,117.66a8,8,0,0,1,11.32-11.32L120,164.69V32a8,8,0,0,1,16,0V164.69l58.34-58.35a8,8,0,0,1,11.32,11.32l-72,72a8,8,0,0,1-11.32,0ZM216,208H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
            </svg>
          )}
          {showAllPlatforms && (
            <svg
              className="w-8 bg-[hsla(0,0%,100%,.16)] py-1 px-1 rounded-lg "
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              fill="#fff"
              viewBox="0 0 256 256"
            >
              <path d="M213.66,165.66a8,8,0,0,1-11.32,0L128,91.31,53.66,165.66a8,8,0,0,1-11.32-11.32l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,213.66,165.66Z"></path>
            </svg>
          )}

          <span className="text-base">
            {!showAllPlatforms ? "Show all" : "Hide"}
          </span>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
