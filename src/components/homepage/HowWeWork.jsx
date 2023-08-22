import { Link } from "react-router-dom";
import data from "./HowWeWorkData";

const HowWeWork = () => {
  return (
    <section className="relative  py-10 padding">
      <img
        src="/Group 9.svg"
        className="absolute w-12 md:w-28 lg:w-auto top-0 right-0 sm:right-20 -z-1"
      />
      <div className="relative flex flex-col md:flex-row gap-5">
        <h2 className="bg-brandgreen w-fit h-fit font-semibold p-1 rounded-sm text-xl">
          Services
        </h2>
        <p className="text-lg max-w-2xl">
          Our mission is to empower professionals, entrepreneurs, and businesses
          to thrive in the digital landscape. We're not just a marketplace –
          we're your strategic partner in success.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-7 mt-10">
        {data.map((item) => {
          return <Card {...item} key={item.id} />;
        })}
      </div>
    </section>
  );
};

const Card = ({ id, text, textbg, color, svg, link }) => {
  return (
    <div
      className={`${color} grid lg:grid-cols-2 justify-between border-brandblack myshadow rounded-2xl border-2 gap-7 p-10`}
    >
      <aside className="flex flex-col justify-between">
        <h3 className={`text-xl ${textbg}   font-semibold p-1 `}>{text}</h3>
        <Link
          className="flex items-center mt-7 lg:mt-0  hover:underline gap-2 "
          to={link}
        >
          <div
            className={`${
              id === 3 ? "bg-white" : "bg-brandblack"
            } p-2 rounded-full text font-semibold`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`w-4  h-4 ${
                id === 3 ? "stroke-brandblack" : "stroke-brandgreen"
              } `}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </div>
          <span
            className={` text-base md:text-lg font-semibold ${
              id === 3 ? "text-white" : "text-brandblack"
            }`}
          >
            Learn More
          </span>
        </Link>
      </aside>
      <div className="flex items-end justify-end">
        <img src={svg} alt={text} className=" w-[50%] lg:w-full" />
      </div>
    </div>
  );
};

export default HowWeWork;
