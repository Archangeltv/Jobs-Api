import { Collapse } from "react-collapse";
import data from "./FaqsData";
import { useState } from "react";

const FAQs = () => {
  return (
    <section className="padding py-10">
      <h2 className="text-2xl text-center mb-10 font-bold">FAQs</h2>
      <div className="flex flex-col gap-7">
        {data.map((item) => {
          return <CollapseCard {...item} key={item.id} />;
        })}
      </div>
    </section>
  );
};

const CollapseCard = ({ id, question, answer }) => {
  const [isCollapseOpened, setIsCollapseOpened] = useState(false);

  function toggleCollapse() {
    setIsCollapseOpened((prev) => !prev);
  }

  return (
    <div
      onClick={toggleCollapse}
      className={`myshadow cursor-pointer py-5 px-5 sm:px-10 rounded-3xl border-brandblack border-2 ${
        !isCollapseOpened ? "bg-[#F3F3F3]" : "bg-brandgreen"
      } duration-500 `}
    >
      <div className="flex items-center justify-between">
        <h2 className="flex items-center">
          <span className="text-3xl mr-3 sm:mr-5">0{id}</span>
          <span className=" text-lg sm:text-xl ">{question}</span>
        </h2>
        <button className="h-10 w-10 text-3xl font-semibold bg-[#F3F3F3] rounded-full">
          {isCollapseOpened ? "-" : "+"}
        </button>
      </div>
      <Collapse isOpened={isCollapseOpened}>
        <div className=" px-7 sm:px-12">
          <span className="w-full h-1 my-5  bg-brandblack block"></span>
          <p className="text-base">{answer}</p>
        </div>
      </Collapse>
    </div>
  );
};

export default FAQs;
