import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
function Header() {
  return (
    <><header>
      <div className="flex flex-row ">
       <div className="flex flex-1">
       <Link to="/">  <img className="w-10 h-10 link-img-h2" src="../../src/assets/robot.png" />
            <h2 className="text-xl sm:text-3xl font-bold mx-3 font-mono link-img-h2">
              Text/Code Utils.AI
            </h2>
            </Link> 
        </div>
        
        <div className="flex items-center justify-end space-x-6 text-xl sm:text-2xl font-mono">
          <a
            className="py-2 px-4 rounded-md sm:py-3 sm:px-6 flex items-center btn-grad"
            href="https://github.com"
          >
            <FaGithub className="mx-2 sm:mx-4"></FaGithub>
            GitHub
          </a>
        </div>
      </div>
    </header></>
  );
}

export default Header;
