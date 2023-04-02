import React, { useState, useRef, useEffect } from 'react';
import { UserAuth } from '../../../context/AuthContext';

// Dropdown made from: 
// TK. (2022, July 24). Dropdown menu - react tutorial for Beginners. YouTube. Retrieved March 25, 2023, from https://www.youtube.com/watch?v=KROfo7vuIGY 
// TK. (2022, August 6). Click outside to close - react hook. YouTube. Retrieved March 25, 2023, from https://www.youtube.com/watch?v=HfZ7pdhS43s 


/** Returns HTML for the navigation bar. */
const NavBar = () => {
  const { logOut, user } = UserAuth();
  const [ dropdown, setDropdown] = useState(false);

  // log out and log any errors to console
  const handleLogout = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  // close dropdown when user clicks outside of it
  let menuRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    }

  });

  return(
    <div className="h-14 bg-gray-200 inline">
      <div className="flex float-left">
        <a className="h-14 w-14 ml-2 object-cover" href="/home">
            <img src="graveyard.png" className="" alt="User Pic" />
        </a>
        <a className="h-14 ml-6 mt-4 object-cover" href="/about">
          ABOUT
        </a>
        <a className="h-14 ml-8 mt-4 object-cover" href="/writing-entries">
          WRITING ENTRIES
        </a>
      </div>
      <div className="float-right" ref={menuRef}>
        <button className="m-2 block h-10 w-10 mr-4 object-cover" onClick={()=>setDropdown(!dropdown)}>
          <img src={user?.photoURL} className="rounded-full" alt="User Pic" />
         </button>
        {dropdown && 
            <div className="w-36 absolute right-0 z-10">
              <ul className="bg-gray-100 border w-full">
            <li key="logout">
              <button className="p-4" onClick={handleLogout}>Log out</button>
            </li>
          </ul>

        </div>

        }
          
      </div>
    </div>
    )
};


export default NavBar; 