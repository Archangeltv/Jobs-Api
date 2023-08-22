import { useState, useEffect } from "react";
import Hamburger from "./Hamburger";
import logo from "/Icon.svg";
import { Link } from "react-router-dom";

const NavbarLinks = [
  {
    id: 1,
    link: "/find-job",
    text: "Find Jobs",
    style: "navbarLinks",
  },
  {
    id: 2,
    link: "/create-job",
    text: "Create a Job",
    style: "navbarLinks",
  },
  {
    id: 3,
    link: "/docs",
    text: "Docs",
    style: "navbarLinks",
  },
  {
    id: 4,
    link: "/login",
    text: "Login",
    style: "highlightedBtn md:hidden",
  },
  {
    id: 5,
    link: "/signup",
    text: "Get Started",
    style: "basicBtn md:hidden",
  },
];

function NavbarLandingPage() {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  function onHamburgerClick() {
    setIsHamburgerOpen((prev) => !prev);
  }

  return (
    <header className=" bg-white text-brandblack z-40  sticky top-0 font-medium text-xl md:text-lg padding py-3 items-center flex justify-between">
      <Link to="/" className="flex gap-1 items-center">
        <img src={logo} alt="" className="w-7" />
        Jobs Api
      </Link>
      <nav
        className={`absolute  md:relative  -z-10 left-0  py-10 md:py-0 md:left-auto md:top-auto bg-brandblack w-screen md:w-auto md:bg-transparent duration-300 ${
          isHamburgerOpen ? "top-16" : "-top-[100vh]"
        }  `}
      >
        <ul className="flex flex-col text-xl md:text-lg text-white md:text-brandblack md:flex-row items-center gap-7">
          {NavbarLinks.map((item) => {
            return (
              <Link className={item.style} to={item.link} key={item.id}>
                {item.text}
              </Link>
            );
          })}
        </ul>
      </nav>
      <nav className="md:flex hidden items-center gap-7">
        {NavbarLinks.slice(3, 5).map((item) => {
          return (
            <Link
              className={item.style + "md:block"}
              to={item.link}
              key={item.id}
            >
              {item.text}
            </Link>
          );
        })}
      </nav>
      <Hamburger
        className="md:hidden"
        isOpen={isHamburgerOpen}
        onClick={onHamburgerClick}
      />
    </header>
  );
}
export default NavbarLandingPage;
