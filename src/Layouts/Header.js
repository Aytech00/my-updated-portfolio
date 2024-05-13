import React from 'react'
import { useAllContx } from '../store/AllContext';
import { useLocation } from 'react-router-dom';
export default function Header() {

    const {sidebarOpen, setSidebarOpen} = useAllContx()


  const location = useLocation();
  const { pathname } = location;
  return (
    <header
      className={`sticky  top-0 z-999 flex w-full ${
        pathname === "/portfolio" ||
        pathname === "/about" ||
        pathname === "/contact"
          ? "bg-[#091221e6]"
          : ""
      } md:bg-transparent py-3  drop-shadow-1 `}
    >
      <div className="flex flex-grow items-center justify-between px-4 py-3 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center   lg:hidden">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSidebarOpen(!sidebarOpen);
            }}
            className="z-99999 block   p lg:hidden"
          >
            <span className="relative block h-6 w-6 cursor-pointer">
              <span className="du-block absolute right-0 h-full w-full">
                <span
                  className={`relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-secondary delay-[0] duration-200 ease-in-out  ${
                    !sidebarOpen && "!w-full delay-300"
                  }`}
                ></span>
                <span
                  className={`relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-secondary delay-150 duration-200 ease-in-out  ${
                    !sidebarOpen && "delay-400 !w-full"
                  }`}
                ></span>
                <span
                  className={`relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-secondary  delay-200 duration-200 ease-in-out  ${
                    !sidebarOpen && "!w-full delay-500"
                  }`}
                ></span>
              </span>
              <span className="absolute right-0 h-full w-full rotate-45">
                <span
                  className={`absolute left-2 top-0 block h-full w-0.1 rounded-sm bg-secondary delay-300 duration-200 ease-in-out  ${
                    sidebarOpen && "!h-0 !delay-[0]"
                  }`}
                ></span>
                <span
                  className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm  bg-secondary duration-200 ease-in-out  ${
                    !sidebarOpen && "!h-0 !delay-200"
                  }`}
                ></span>
              </span>
            </span>
          </button>

          {/* <Link className="block flex-shrink-0 lg:hidden" href="/">
            <Image
              className="w-[40px] md:w-[60px] "
              src={logo}
              width="70"
              height="70"
              alt=""
            />
          </Link> */}
        </div>

        <div className="flex items-center gap-3 2xsm:gap-7">
          <ul className="flex items-center gap-2 2xsm:gap-4">
            {/* <DropdownNotification /> */}

            {/* <DropdownMessage /> */}
          </ul>

          {/* <!-- User Area --> */}

          {/* <!-- User Area --> */}
        </div>
      </div>
    </header>
  );
}
