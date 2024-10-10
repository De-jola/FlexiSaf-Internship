import React from "react";
import { RxAvatar } from "react-icons/rx";

function Header() {
  return (
    <nav className="p-4 flex justify-between items-center">
      <h1 className="text-red-500 text-3xl font-bold">NUFLIX</h1>

      <div>
        <RxAvatar className="text-white text-4xl cursor-pointer" />
      </div>
    </nav>
  );
}
export default Header;
