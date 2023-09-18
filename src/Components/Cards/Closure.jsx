import { React, useState } from "react";
import CardHeader from "./CardHeader";
import { InView } from "react-intersection-observer";
import { throttle } from "../../const/CustomThrottle";

export default function Closure({ View }) {
  const [inView,setInView]=useState(true)

  const handleView = throttle((inView) => setInView(inView), 100);

  return (
    <>
      <InView onChange={handleView}>
      <div
        className="card_name w-[286px] relative h-[349px] rounded-[4px] bg-[#fff] ml-[16px]"
      >
        <CardHeader name={"Closure Done"} />

        <div className="present_year_closure w-[81px] h-[21px]">
          <h1 className="text-[10px] font-bold text-[#fff]  ">
            2019 - Present
          </h1>
        </div>

        <div className="total_course mt-[20px] ml-[21px] w-[105px] h-[72px]">
          <div className="text-[50px] w-[105px] h-[60px]">
            <span className="number extra-bold text-[#262626]">120</span>
            <span className="plus extra-bold text-[#FCC314] font-">+</span>
          </div>
          <p className="course_done text-[10px] font-semibold text-[#00000066]">
            Total Course Done
          </p>
        </div>

        {/* chart  */}
        <div className="chart flex">
          <div className="chart_days text=[#000] gap-[15px] justify-end font-semibold text-[6px]   ml-[17px]">
            {Array.from(
              { length: !inView ? 7 : 8 },
              (_, index) => index + 1
            ).map((e) => {
              return (
                <span key={"line" + e} className="rpcard-day">
                  {e * 2}
                </span>
              );
            })}
          </div>

          <div className="inside_chart relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="244"
              height="177"
              viewBox="0 0 244 177"
              fill="none"
            >
              <line
                x1="4.0357"
                y1="4.37115e-09"
                x2="4.03569"
                y2="176.873"
                stroke="black"
                strokeOpacity="0.2"
                strokeWidth="0.2"
              />
              <line
                x1="4.0357"
                y1="4.37115e-09"
                x2="4.03569"
                y2="176.873"
                stroke="black"
                strokeOpacity="0.2"
                strokeWidth="0.2"
              />
              <line
                x1="23.713"
                y1="4.37115e-09"
                x2="23.713"
                y2="176.873"
                stroke="black"
                strokeOpacity="0.2"
                strokeWidth="0.2"
              />
              <line
                x1="23.713"
                y1="4.37115e-09"
                x2="23.713"
                y2="176.873"
                stroke="black"
                strokeOpacity="0.2"
                strokeWidth="0.2"
              />
              <line
                x1="43.3903"
                y1="4.37115e-09"
                x2="43.3903"
                y2="176.873"
                stroke="black"
                strokeOpacity="0.2"
                strokeWidth="0.2"
              />
              <line
                x1="244"
                y1="3.29531"
                x2="-1.00663e-08"
                y2="3.29529"
                stroke="black"
                strokeOpacity="0.2"
                strokeWidth="0.2"
              />
              <line
                x1="43.3903"
                y1="4.37115e-09"
                x2="43.3903"
                y2="176.873"
                stroke="black"
                strokeOpacity="0.2"
                strokeWidth="0.2"
              />
              <line
                x1="63.068"
                y1="4.37115e-09"
                x2="63.068"
                y2="176.873"
                stroke="black"
                strokeOpacity="0.2"
                strokeWidth="0.2"
              />
              <line
                x1="244"
                y1="24.6068"
                x2="-1.00663e-08"
                y2="24.6068"
                stroke="black"
                strokeOpacity="0.2"
                strokeWidth="0.2"
              />
              <line
                x1="63.068"
                y1="4.37115e-09"
                x2="63.068"
                y2="176.873"
                stroke="black"
                strokeOpacity="0.2"
                strokeWidth="0.2"
              />
              <line
                x1="244"
                y1="24.6068"
                x2="-1.00663e-08"
                y2="24.6068"
                stroke="black"
                strokeOpacity="0.2"
                strokeWidth="0.2"
              />
              <line
                x1="82.7454"
                y1="4.37115e-09"
                x2="82.7454"
                y2="176.873"
                stroke="black"
                strokeOpacity="0.2"
                strokeWidth="0.2"
              />
              <line
                x1="244"
                y1="45.9173"
                x2="-1.00663e-08"
                y2="45.9173"
                stroke="black"
                strokeOpacity="0.2"
                strokeWidth="0.2"
              />
              <line
                x1="82.7454"
                y1="4.37115e-09"
                x2="82.7454"
                y2="176.873"
                stroke="black"
                strokeOpacity="0.2"
                strokeWidth="0.2"
              />
              <line
                x1="244"
                y1="45.9173"
                x2="-1.00663e-08"
                y2="45.9173"
                stroke="black"
                strokeOpacity="0.2"
                strokeWidth="0.2"
              />
              <line
                x1="102.423"
                y1="4.37115e-09"
                x2="102.423"
                y2="176.873"
                stroke="black"
                strokeOpacity="0.2"
                strokeWidth="0.2"
              />
              <line
                x1="244"
                y1="67.2251"
                x2="-1.00663e-08"
                y2="67.225"
                stroke="black"
                strokeOpacity="0.2"
                strokeWidth="0.2"
              />
              <line
                x1="102.423"
                y1="4.37115e-09"
                x2="102.423"
                y2="176.873"
                stroke="black"
                strokeOpacity="0.2"
                strokeWidth="0.2"
              />
              <line
                x1="244"
                y1="67.2251"
                x2="-1.00663e-08"
                y2="67.225"
                stroke="black"
                strokeOpacity="0.2"
                strokeWidth="0.2"
              />
              <line
                x1="122.1"
                y1="4.37115e-09"
                x2="122.1"
                y2="176.873"
                stroke="black"
                strokeOpacity="0.2"
                strokeWidth="0.2"
              />
              <line
                x1="244"
                y1="88.5365"
                x2="-1.00663e-08"
                y2="88.5365"
                stroke="black"
                strokeOpacity="0.2"
                strokeWidth="0.2"
              />
              <line
                x1="122.1"
                y1="4.37115e-09"
                x2="122.1"
                y2="176.873"
                stroke="black"
                strokeOpacity="0.2"
                strokeWidth="0.2"
              />
              <line
                x1="244"
                y1="88.5365"
                x2="-1.00663e-08"
                y2="88.5365"
                stroke="black"
                strokeOpacity="0.2"
                strokeWidth="0.2"
              />
              <line
                x1="141.778"
                y1="4.37115e-09"
                x2="141.778"
                y2="176.873"
                stroke="black"
                strokeOpacity="0.2"
                strokeWidth="0.2"
              />
              <line
                x1="244"
                y1="109.848"
                x2="-1.00663e-08"
                y2="109.848"
                stroke="black"
                strokeOpacity="0.2"
                strokeWidth="0.2"
              />
              <line
                x1="141.778"
                y1="4.37115e-09"
                x2="141.778"
                y2="176.873"
                stroke="black"
                strokeOpacity="0.2"
                strokeWidth="0.2"
              />
              <line
                x1="244"
                y1="109.848"
                x2="-1.00663e-08"
                y2="109.848"
                stroke="black"
                strokeOpacity="0.2"
                strokeWidth="0.2"
              />
              <line
                x1="161.455"
                y1="4.37115e-09"
                x2="161.455"
                y2="176.873"
                stroke="black"
                strokeOpacity="0.2"
                strokeWidth="0.2"
              />
              <line
                x1="244"
                y1="131.157"
                x2="-1.00663e-08"
                y2="131.157"
                stroke="black"
                strokeOpacity="0.2"
                strokeWidth="0.2"
              />
              <line
                x1="161.455"
                y1="4.37115e-09"
                x2="161.455"
                y2="176.873"
                stroke="black"
                strokeOpacity="0.2"
                strokeWidth="0.2"
              />
              <line
                x1="244"
                y1="131.157"
                x2="-1.00663e-08"
                y2="131.157"
                stroke="black"
                strokeOpacity="0.2"
                strokeWidth="0.2"
              />
              <line
                x1="181.132"
                y1="4.37115e-09"
                x2="181.132"
                y2="176.873"
                stroke="black"
                strokeOpacity="0.2"
                strokeWidth="0.2"
              />
              <line
                x1="244"
                y1="152.467"
                x2="-1.00663e-08"
                y2="152.467"
                stroke="black"
                strokeOpacity="0.2"
                strokeWidth="0.2"
              />
              <line
                x1="200.81"
                y1="4.37115e-09"
                x2="200.81"
                y2="176.873"
                stroke="black"
                strokeOpacity="0.2"
                strokeWidth="0.2"
              />
              <line
                x1="244"
                y1="173.778"
                x2="-1.00663e-08"
                y2="173.778"
                stroke="black"
                strokeOpacity="0.2"
                strokeWidth="0.2"
              />
              <line
                x1="220.487"
                y1="4.37115e-09"
                x2="220.487"
                y2="176.873"
                stroke="black"
                strokeOpacity="0.2"
                strokeWidth="0.2"
              />
              <line
                x1="240.164"
                y1="4.37115e-09"
                x2="240.164"
                y2="176.873"
                stroke="black"
                strokeOpacity="0.2"
                strokeWidth="0.2"
              />
            </svg>

            <div className="chart_bars gap-[16px]">
              <div
                style={{ height: `${inView ? "20px" : "4px"}` }}
                className="bar"
              ></div>
              <div
                style={{ height: `${inView ? "50px" : "4px"}` }}
                className="bar"
              ></div>
              <div
                style={{ height: `${inView ? "40px" : "4px"}` }}
                className="bar"
              ></div>
              <div
                style={{ height: `${inView ? "40px" : "4px"}` }}
                className="bar"
              ></div>
              <div
                style={{
                  height: `${inView ? "110px" : "4px"}`,
                  background: "#FFDF7A",
                }}
                className="bar"
              ></div>

              <div className="box_over absolute flex justify-center top-[-25px] right-[0px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="24"
                  viewBox="0 0 34 24"
                  fill="none"
                >
                  <path
                    d="M0 4C0 1.79086 1.79086 0 4 0H30C32.2091 0 34 1.79086 34 4V16C34 18.2091 32.2091 20 30 20H19.4113C19.0147 20 18.6556 20.2344 18.4959 20.5975L17.3662 23.1671C17.2261 23.4858 16.7739 23.4858 16.6338 23.1671L15.5041 20.5975C15.3444 20.2344 14.9853 20 14.5887 20H4C1.79086 20 0 18.2091 0 16V4Z"
                    fill="#FFDF7A"
                  />
                </svg>

                <h1 className="htext absolute top-0 text-[14px] font-semibold">
                  10
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="chart_months htext flex mb-[8px] text-[8px] ml-[43px] gap-[32px] font-semibold">
          <span className="month">Apr</span>
          <span className="month">May</span>
          <span className="month">Jun</span>
          <span className="month">Jul</span>
          <span className="month">Aug</span>
        </div>
        <hr className="w-[254px] h-[.5px] bg-[rgba(0, 0, 0, 0.30)] ml-[16px] mb-[12px]" />
      </div>
      </InView>
    </>
  );
}
