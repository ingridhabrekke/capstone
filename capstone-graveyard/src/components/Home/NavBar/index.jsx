import React, { useState, useRef, useEffect } from 'react';
import { UserAuth } from '../../../context/AuthContext';

// dropdown: https://www.youtube.com/watch?v=KROfo7vuIGY
// https://www.youtube.com/watch?v=HfZ7pdhS43s


function NavBar() {
  const { logOut, user } = UserAuth();
  const [ dropdown, setDropdown] = useState(false);

  const handleLogout = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setDropdown(false);
        console.log(menuRef.current);
      }
    };

    document.addEventListener("mousedown", handler);


    return () => {
      document.removeEventListener("mousedown", handler);
    }

  });

  return(

    <div className="h-14 bg-gray-200 inline">
      <div className="float-left">
        <button className="block h-14 w-14 ml-2 object-cover" href="/home">
            <img src="graveyard.png" className="" alt="User Pic" />
        </button>
      </div>
      <div className="float-right " ref={menuRef}>
        <button className="m-2 block h-10 w-10 mr-4 object-cover" onClick={()=>setDropdown(!dropdown)}>
          <img src={user?.photoURL} className="rounded-full" alt="User Pic" />
         </button>
        {dropdown && 
            <div className="w-36 absolute right-0 z-10">
              <ul className="bg-gray-100 border w-full">
            <li>
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