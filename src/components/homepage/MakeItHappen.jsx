const MakeItHappen = () => {
  return (
    <section className="bg-[#F3F3F3]  grid md:grid-cols-2 rounded-2xl p-5 py-8 md:p-10 ">
      <div className=" text-center max-w-lg md:text-start">
        <h2 className="mb-5 text-2xl md:text-3xl font-medium ">
          Let's connect you.
        </h2>
        <p className="mb-5 font-medium">
          Sign up now, Let's connect you with companies looking for your skills
          and professionals looking for your company.
        </p>
        <button className="max-w-[280px] w-full py-3 font-semibold text-lg bg-brandblack text-white rounded-md ">
          Get Started
        </button>
      </div>
      <div className="hidden w-[100%] md:flex justify-end">
        <img src="/Frame 19.svg" alt="" className=" w-[70%] lg:w-[30%]" />
      </div>
    </section>
  );
};

export default MakeItHappen;
