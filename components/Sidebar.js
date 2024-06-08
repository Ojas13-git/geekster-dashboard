import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useMemo } from "react";
import {
  ArticleIcon,
  CollapsIcon,
  HomeIcon,
  LogoIcon,
  LogoutIcon,
  UsersIcon,
  VideosIcon,
} from "./icons";

const menuItems = [
  { id: 1, label: "Home", icon: HomeIcon, link: "/dashboard" },
  { id: 2, label: "Manage Posts", icon: ArticleIcon, link: "/posts" },
  { id: 3, label: "Manage Users", icon: UsersIcon, link: "/users" },
  { id: 4, label: "Manage Tutorials", icon: VideosIcon, link: "/tutorials" },
];

const Sidebar = () => {
  const [toggleCollapse, setToggleCollapse] = useState(true);

  const router = useRouter();

  const activeMenu = useMemo(
    () => menuItems.find((menu) => menu.link === router.pathname),
    [router.pathname]
  );

  const wrapperClasses = classNames(
    "h-screen px-4 pt-8 pb-4 bg-gray-200 flex justify-between flex-col ",
    {
      ["w-80 absolute z-50"]: !toggleCollapse,
      ["w-20 relative"]: toggleCollapse,
    }
  );

  const collapseIconClasses = classNames(
    "p-4 rounded absolute right-0",
    {
      "rotate-180": toggleCollapse,
    }
  );

  const getNavItemClasses = (menu) => {
    return classNames(
      "flex items-center cursor-pointer hover:bg-light-lighter rounded w-full overflow-hidden whitespace-nowrap",
      {
        ["bg-light-lighter"]: activeMenu.id === menu.id,
      }
    );
  };

  

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);

    const overlay = document.getElementById('overlay');
    if(!toggleCollapse){
      overlay.style.display = "none";
    }

    else {
      overlay.style.display = "block";
    }
  };



  async function handleLogout() {
    await fetch('/api/auth', {
      method: 'DELETE',
    });
    router.push('/');
  }
  return (
    <div
      className={wrapperClasses}
      
      style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-between relative">
          <div className="flex items-center pl-1 gap-4">
            {!toggleCollapse && <LogoIcon />}
            <span
              className={classNames("mt-2 text-3xl font-bold text-text", {
                hidden: toggleCollapse,
              })}
            >
              Geekster
            </span>
          </div>
          
            <button
              className={collapseIconClasses}
              onClick={handleSidebarToggle}
            >
              <CollapsIcon />
            </button>
          
        </div>

        <div className="flex flex-col items-start mt-24">
          {menuItems.map(({ icon: Icon, ...menu }) => {
            const classes = getNavItemClasses(menu);
            return (
              <div className={classes}>
                <Link legacyBehavior href={menu.link}>
                  <a className="flex py-4 px-3 items-center w-full h-full">
                    <div style={{ width: "2.5rem" }}>
                      <Icon />
                    </div>
                    {!toggleCollapse && (
                      <span
                        className={classNames(
                          "text-md font-medium text-text-light"
                        )}
                      >
                        {menu.label}
                      </span>
                    )}
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <div className={`${getNavItemClasses({})} px-3 py-4`} onClick={handleLogout}>
        <div style={{ width: "2.5rem" }}>
          <LogoutIcon />
        </div>
        {!toggleCollapse && (
          <span  className={classNames("text-md font-medium text-text-light")}>
            Logout
          </span>
        )}
      </div>
    </div>
  );
};

export default Sidebar;