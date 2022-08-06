import { useState } from "react";
import "../App.css";
import logo from "../assets/favicon.svg";
import hamburger from "../assets/hamburger.svg";
import hamburgerActive from "../assets/hamburgerActive.svg";
export default function Header(props) {
  const [openNavbar, setOpenNavbar] = useState(false);
  const toggleNavbar = () => {
    setOpenNavbar(!openNavbar);
    props.toggle();
  };
  return (
    <header className="w-full h-13 bg-white border-bottom-2 flex lg:px-7 py-2 px-5 z-40 gap-x-2">
      <button
        onClick={() => toggleNavbar()}
        class="flex items-center justify-center leading-none whitespace-nowrap select-none hover:opacity-80 text-current w-10 h-10 lg:hidden"
        aria-label="Menu"
      >
        {!openNavbar ? (
          <img src={hamburger} alt="hamburger" />
        ) : (
          <img src={hamburgerActive} alt="hamburger" />
        )}
      </button>
      <a href="/#" className="flex gap-x-2 items-center">
        <img src={logo} alt="site logo" />
        <span className="text-2xl font-bold leading-none sr-only lg:not-sr-only heading">
          Minswap
        </span>
      </a>
    </header>
  );
}
