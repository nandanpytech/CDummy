import {React,useState} from "react";
import ProgressBar from "./ProgressBar";
import NumberScroll from "./NumberScroll";
import { InView } from "react-intersection-observer";
import { throttle } from "../../const/CustomThrottle";

export default function ProjectContainer() {
  const [inView,setInView]=useState(false)
  const handleView = throttle((inView) => setInView(inView), 100);


  return (
    <>
     <InView onChange={handleView}>
        <div className="mt-[16px] relative flex gap-[10px] ml-[16px]">
          {/* project ongoing  */}
          <div className="project relative project-ongoing px-[12px]   w-[174px] h-[174px]">
            <div className="project_header flex justify-between mb-[13px]">
              {/* status left-side  */}
              <div className="project_status">
                <h1 className="htext1 text-[14px] font-semibold">
                  {" "}
                  No.of ongoing projects
                </h1>
              </div>

              <div className="project_status-img">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <mask
                    id="mask0_90_364"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                  >
                    <rect width="24" height="24" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_90_364)">
                    <path
                      d="M12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C13.0667 20 14.0917 19.8 15.075 19.4C16.0583 19 16.925 18.425 17.675 17.675L12 12V4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z"
                      fill="#FFD040"
                    />
                  </g>
                </svg>
              </div>
            </div>

              <NumberScroll number={15} View={inView}/>


            <div className="semi_circle_bar">
              <ProgressBar name={"ongoing"} />
            </div>
          </div>

          {/* project completed  */}

          <div className="project project-completed  px-[12px]  w-[174px] h-[174px]">
            <div className="project_header flex justify-between mb-[13px]">
              {/* status left-side  */}
              <div className="project_status">
                <h1 className="htext1 text-[14px] font-semibold">
                  {" "}
                  No.of Completed projects
                </h1>
              </div>

              <div className="project_status-img">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <mask
                    id="mask0_90_344"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                  >
                    <rect width="24" height="24" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_90_344)">
                    <path
                      d="M12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.0833 2 14.1083 2.15833 15.075 2.475C16.0417 2.79167 16.9333 3.23333 17.75 3.8L16.3 5.275C15.6667 4.875 14.9917 4.5625 14.275 4.3375C13.5583 4.1125 12.8 4 12 4C9.78333 4 7.89583 4.77917 6.3375 6.3375C4.77917 7.89583 4 9.78333 4 12C4 14.2167 4.77917 16.1042 6.3375 17.6625C7.89583 19.2208 9.78333 20 12 20C14.2167 20 16.1042 19.2208 17.6625 17.6625C19.2208 16.1042 20 14.2167 20 12C20 11.7 19.9833 11.4 19.95 11.1C19.9167 10.8 19.8667 10.5083 19.8 10.225L21.425 8.6C21.6083 9.13333 21.75 9.68333 21.85 10.25C21.95 10.8167 22 11.4 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM10.6 16.6L6.35 12.35L7.75 10.95L10.6 13.8L20.6 3.775L22 5.175L10.6 16.6Z"
                      fill="#FDC61D"
                    />
                  </g>
                </svg>
              </div>
            </div>

            <NumberScroll number={4} View={inView}/>

            <div className="semi_circle_bar">
              <ProgressBar name={"completed"} />
            </div>
          </div>
        </div>
      </InView>
    </>
  );
}
