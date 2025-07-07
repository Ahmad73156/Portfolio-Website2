"use client";
import CountUp from "react-countup";

const statsObject = [
  { num: 2, text: "Fresher in Web Development" },
  { num: 5, text: "Projects Completed" },
  { num: 6, text: "Technologies Mastered" },
  { num: 50, text: "Code Commits" },
];

const Stats = () => {
  return (
    <section className="mt-[-70px] pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-y-8 gap-x-6 justify-center xl:justify-between max-w-[80vw] xl:max-w-none mx-auto">
          {statsObject.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center xl:flex-row xl:items-center gap-2 xl:gap-4 text-center xl:text-left"
            >
              <div className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-[#00ff99]">
                <CountUp end={item.num} duration={4} delay={2.9} />
              </div>
              <p className="text-sm sm:text-base max-w-[160px]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
