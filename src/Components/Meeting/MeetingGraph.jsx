import { React, useState } from "react";
import Bg_lines from '../../assets/BG lines.png'
import { InView } from "react-intersection-observer";
import { throttle } from "../../const/CustomThrottle";

export default function MeetingGraph() {
  const [inView,setInView]=useState(true)
  const handleView = throttle((inView) => setInView(inView), 100);


  return (
    <>
      <InView onChange={handleView}>
        <div   className="meeting_graph_container m-4 w-[358px] h-[275px] rounded-[4px] bg-[#fff] border-[.4px] border-solid border-[rgba(0, 0, 0, 0.2)]">
          <div className="meeting_graph_header mt-[10px] ml-[12px] mb-[25.7px]">
            <h1 className="text-[#000000CCtext-[14px] font-semibold ">
              No.of Meetings
            </h1>
          </div>

          {/* chart  */}
          <div className="chart flex">
            {/* chart days */}
            <div className="chart_days flex flex-col-reverse justify-end text=[#000] gap-[12px] font-semibold text-[8px] ml-[21px]">
              <span className="day">10</span>
              <span className="day">20</span>
              <span className="day">30</span>
              <span className="day">40</span>
              <span className="day">50</span>
              <span className="day">60</span>
              <span className="day">70</span>

            </div>

            {/* chart Lines  */}
            <div className="inside_chart relative">
              <img src={Bg_lines} alt="" />
              <div className="absolute flex gap-[20px] flex-wrap-reverse bottom-[8px] left-[8px]">
                <div
                  style={{ height: `${inView ? "50px" : "3px"}` }}
                  className="bar bg-[#000]  w-[31px] h-[40px] rounded-[2px] transition-height duration-500"
                ></div>
                <div
                  style={{ height: `${inView ? "40px" : "3px"}` }}
                  className="bar bg-[#000] w-[31px] h-[4px] rounded-[2px] transition-height duration-500"
                ></div>
                <div
                  style={{ height: `${inView ? "72px" : "3px"}` }}
                  className="bar   bg-[#FEE7A1] w-[31px] h-[4px] rounded-[2px] transition-height duration-500"
                ></div>
                <div
                  style={{ height: `${inView ? "20px" : "3px"}` }}
                  className="bar bg-[#000] w-[31px] h-[4px] rounded-[2px] transition-height duration-500"
                ></div>
                <div
                  style={{ height: `${inView ? "10px" : "3px"}` }}
                  className="bar bg-[#000] w-[31px] h-[4px] rounded-[2px] transition-height duration-500"
                ></div>
                <div
                  style={{ height: `${inView ? "2px" : "3px"}` }}
                  className="bar bg-[#000] w-[31px] h-[4px] rounded-[2px] transition-height duration-500"
                ></div>

                <div className="box_over absolute flex justify-center top-[-25px] left-[115px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="25" viewBox="0 0 50 25" fill="none">
                      <path d="M0 1C0 0.447715 0.447715 0 1 0H49C49.5523 0 50 0.447715 50 1V20.7391C50 21.2914 49.5523 21.7391 49 21.7391H9.23084C8.89648 21.7391 8.58425 21.9062 8.39879 22.1844L6.93776 24.376C6.73985 24.6728 6.30362 24.6728 6.10571 24.376L4.64469 22.1844C4.45923 21.9062 4.147 21.7391 3.81264 21.7391H1C0.447716 21.7391 0 21.2914 0 20.7391V1Z" fill="#FEE7A1"/>
                    </svg>

                    <h1 className="htext absolute top-0 text-[14px] font-semibold">38</h1>
                </div>

              </div>

              
            </div>
          </div>

          {/* chart bottom months  */}
          <div className="chart_months htext flex mb-[6px] text-[8px] ml-[36px] gap-[18px] font-semibold">
            <span className="month">JAN-FEB</span>
            <span className="month">MAR-APR</span>
            <span className="month">MAY-JUN</span>
            <span className="month">JUL-AUG</span>
            <span className="month">SEP-OCT</span>
            <span className="month">NEV-DEC</span>
          </div>

          {/* seperate line  */}
          <hr className="w-[254px] h-[.5px] bg-[rgba(0, 0, 0, 0.30)] ml-[16px] mb-[12px]" />
        </div>
      </InView>
    </>
  );
}
