'use client'
import {RegisterLink, LoginLink,LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import Link from "next/link";
import React from "react";
import {useKindeBrowserClient} from "@kinde-oss/kinde-auth-nextjs";

const Navbar = () => {
  const {user, getUser} = useKindeBrowserClient();
  const alsoUser = getUser();
  
  console.log(user);
  return (
    <div className="bg-base-100  text-slate-900 border-b-[1px] py-2">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="flex items-center space-x-6">
          
              <Link
                className="font-semibold hover:text-primary duration-300"
                href='/'
              >
               Home
              </Link>

              {user &&     <Link
                className="font-semibold hover:text-primary duration-300"
                href='/profile'
              >
               Profile
              </Link>}
         
          </div>
        </div>
        <div className="navbar-end">
          <div className="flex space-x-3 items-center">
        { user? <LogoutLink>Log Out</LogoutLink>:
          <LoginLink>Sign in</LoginLink>}
          </div>
        </div>
      </div>
    </div>
  );
};


export default Navbar;  

// please implement conditional login and logout and if login show profile page  