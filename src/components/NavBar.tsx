//import React from "react";

function Navbar() {
    return(
      <div className="bg-gray-200 dark:bg-gray-800 flex justify-between items-center h-20 w-full fixed top-0 left-0">
          <h1 className="text-3xl ml-8">Project Management App</h1>
          <div className="flex flex-row mr-8 ">
              <button className="h-9 w-20 bg-green-600  rounded-md mr-5">Sign Up</button>
              <button className="h-9 w-20 bg-blue-500 rounded-md">Log In</button>
          </div>
      </div>
    );
}

export default Navbar;