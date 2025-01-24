'use client'
import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Link from "next/link";
import React from "react";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

const Navbar = () => {
  const { user, getUser } = useKindeBrowserClient();
  const alsoUser = getUser();
  const links = <>
    <Link
      className="font-semibold hover:text-primary duration-300"
      href='/'
    >
      Home
    </Link>

     <Link
      className="font-semibold hover:text-primary duration-300 pl-4"
      href='/profile'
    >
      Profile
    </Link>
  </>
  return (
    <div>
      <div className="fixed navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
           {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">MY Blogs</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {/* <li><a>Item 1</a></li>
            <li><a>Item 3</a></li> */}
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? <LogoutLink>Log Out</LogoutLink> :
            <LoginLink>Sign in</LoginLink>}
        </div>
      </div>
      <div className="bg-base-100  text-slate-900 border-b-[1px] py-2">
        <div className="navbar container mx-auto">
          <div className="navbar-start">
          </div>
          <div className="navbar-center hidden lg:flex">
            <div className="flex items-center space-x-6">



            </div>
          </div>
          <div className="navbar-end">
            <div className="flex space-x-3 items-center">

            </div>
          </div>
        </div>
      </div>
    </div>

  );
};


export default Navbar;

// please implement conditional login and logout and if login show profile page  

