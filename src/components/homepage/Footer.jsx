import { Link } from "react-router-dom";
import logo from "/Icon - Copy.svg";
import { AiOutlineTwitter, AiFillGithub } from "react-icons/ai";

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
    style: "navbarLinks ",
  },
  {
    id: 5,
    link: "/signup",
    text: "Get Started",
    style: "navbarLinks ",
  },
];

const Footer = () => {
  return (
    <footer className="padding text-white bg-brandblack md:bg-transparent">
      <section className="bg-brandblack px-10 py-5 rounded-t-2xl ">
        <nav className="  text-white  font-normal text-xl md:text-lg  py-3 items-center flex flex-col md:flex-row gap-5 justify-between">
          <Link to="/" className="flex gap-1 items-center">
            <img src={logo} alt="" className="w-7" />
            Jobs Api
          </Link>
          <nav>
            <ul className="flex flex-col text-lg md:text-lg text-white  lg:flex-row items-center gap-3 md:gap-7">
              {NavbarLinks.map((item) => {
                return (
                  <Link className={item.style} to={item.link} key={item.id}>
                    {item.text}
                  </Link>
                );
              })}
            </ul>
          </nav>
          <nav className="text-2xl flex items-center gap-5">
            <Link target="_blank" to="https://github.com/Archangeltv/Jobs-Api">
              <AiFillGithub />
            </Link>
            <Link target="_blank" to="https://twitter.com/AimiuwuVictor">
              <AiOutlineTwitter />
            </Link>
          </nav>
        </nav>
        <span className="px-5 bg-white block  w-full h-1 my-6 "></span>
        <p className="text-center">
          Proudly Made by{" "}
          <a
            href="https://twitter.com/AimiuwuVictor"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            @Archangel
          </a>
        </p>
      </section>
    </footer>
  );
};

export default Footer;
