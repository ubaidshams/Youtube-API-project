import React from "react";
import AuthBlock from "./AuthBlock";
import Logo from "./Logo";
import Search from "./Search";

const Header = () => {
  return (
    <header className="navbarBlock bg-white h-[70px] shadow-sm w-screen">
      <article className="flex items-center w-[95%] m-auto h-[70px] justify-between">
        <Logo />
        <Search />
        <AuthBlock />
      </article>
    </header>
  );
};

export default Header;
