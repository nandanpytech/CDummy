import React, { useState } from 'react'
import CardHeader from './CardHeader'
import Partners from './Partners'
import { InView } from "react-intersection-observer";
import { throttle } from '../../const/CustomThrottle';


export default function RpCard() {
const [inViewRpCard,setInViewRpCard]=useState(false)

const handleView = throttle((inView) => setInViewRpCard(inView), 100);

  return (
       <InView onChange={handleView}>
        <div  className="card_name w-[286px] h-[349px] rounded-[4px] bg-[#fff] ">
            <CardHeader name={'No.of RP Joined'}/>

            {/* chart  */}
            <div className="chart flex items-start">

                  {/* chart days */}
                <div className="chart_days text=[#000] gap-[8px] font-semibold text-[6px] ml-[15px]">
                    {
                      Array.from({ length: !inViewRpCard?7:8}, (_, index) => index + 1).map((e)=>{
                        return <span key={"line"+e} className="rpcard-day">{e*2}</span>
                      })
                    }
                </div>

                  {/* chart Lines  */}
                <div className="inside_chart relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="248" height="143" viewBox="0 0 248 143" fill="none">
                            <line x1="4.1" y1="4.37115e-09" x2="4.09999" y2="143" stroke="black" strokeOpacity="0.2" strokeWidth="0.2"/>
                            <line x1="4.1" y1="4.37115e-09" x2="4.09999" y2="143" stroke="black" strokeOpacity="0.2" strokeWidth="0.2"/>
                            <line x1="24.1" y1="4.37115e-09" x2="24.1" y2="143" stroke="black" strokeOpacity="0.2" strokeWidth="0.2"/>
                            <line x1="24.1" y1="4.37115e-09" x2="24.1" y2="143" stroke="black" strokeOpacity="0.2" strokeWidth="0.2"/>
                            <line x1="44.1" y1="4.37115e-09" x2="44.1" y2="143" stroke="black" strokeOpacity="0.2" strokeWidth="0.2"/>
                            <line x1="248" y1="2.68394" x2="-1.26549e-08" y2="2.68392" stroke="black" strokeOpacity="0.2" strokeWidth="0.2"/>
                            <line x1="44.1" y1="4.37115e-09" x2="44.1" y2="143" stroke="black" strokeOpacity="0.2" strokeWidth="0.2"/>
                            <line x1="64.1" y1="4.37115e-09" x2="64.1" y2="143" stroke="black" strokeOpacity="0.2" strokeWidth="0.2"/>
                            <line x1="248" y1="19.9135" x2="-1.26549e-08" y2="19.9135" stroke="black" strokeOpacity="0.2" strokeWidth="0.2"/>
                            <line x1="64.1" y1="4.37115e-09" x2="64.1" y2="143" stroke="black" strokeOpacity="0.2" strokeWidth="0.2"/>
                            <line x1="248" y1="19.9135" x2="-1.26549e-08" y2="19.9135" stroke="black" strokeOpacity="0.2" strokeWidth="0.2"/>
                            <line x1="84.1" y1="4.37115e-09" x2="84.1" y2="143" stroke="black" strokeOpacity="0.2" strokeWidth="0.2"/>
                            <line x1="248" y1="37.142" x2="-1.26549e-08" y2="37.142" stroke="black" strokeOpacity="0.2" strokeWidth="0.2"/>
                            <line x1="84.1" y1="4.37115e-09" x2="84.1" y2="143" stroke="black" strokeOpacity="0.2" strokeWidth="0.2"/>
                            <line x1="248" y1="37.142" x2="-1.26549e-08" y2="37.142" stroke="black" strokeOpacity="0.2" strokeWidth="0.2"/>
                            <line x1="104.1" y1="4.37115e-09" x2="104.1" y2="143" stroke="black" strokeOpacity="0.2" strokeWidth="0.2"/>
                            <line x1="248" y1="54.3705" x2="-1.26549e-08" y2="54.3705" stroke="black" strokeOpacity="0.2" strokeWidth="0.2"/>
                            <line x1="104.1" y1="4.37115e-09" x2="104.1" y2="143" stroke="black" strokeOpacity="0.2" strokeWidth="0.2"/>
                            <line x1="248" y1="54.3705" x2="-1.26549e-08" y2="54.3705" stroke="black" strokeOpacity="0.2" strokeWidth="0.2"/>
                            <line x1="124.1" y1="4.37115e-09" x2="124.1" y2="143" stroke="black" strokeOpacity="0.2" strokeWidth="0.2"/>
                            <line x1="248" y1="71.6" x2="-1.26549e-08" y2="71.6" stroke="black" strokeOpacity="0.2" strokeWidth="0.2"/>
                            <line x1="124.1" y1="4.37115e-09" x2="124.1" y2="143" stroke="black" strokeOpacity="0.2" strokeWidth="0.2"/>
                            <line x1="248" y1="71.6" x2="-1.26549e-08" y2="71.6" stroke="black" strokeOpacity="0.2" strokeWidth="0.2"/>
                            <line x1="144.1" y1="4.37115e-09" x2="144.1" y2="143" stroke="black" strokeOpacity="0.2" strokeWidth="0.2"/>
                            <line x1="248" y1="88.8295" x2="-1.26549e-08" y2="88.8295" stroke="black" strokeOpacity="0.2" strokeWidth="0.2"/>
                            <line x1="144.1" y1="4.37115e-09" x2="144.1" y2="143" stroke="black" strokeOpacity="0.2" strokeWidth="0.2"/>
                            <line x1="248" y1="88.8295" x2="-1.26549e-08" y2="88.8295" stroke="black" strokeOpacity="0.2" strokeWidth="0.2"/>
                            <line x1="164.1" y1="4.37115e-09" x2="164.1" y2="143" stroke="black" strokeOpacity="0.2" strokeWidth="0.2"/>
                            <line x1="248" y1="106.058" x2="-1.26549e-08" y2="106.058" stroke="black" strokeOpacity="0.2" strokeWidth="0.2"/>
                            <line x1="164.1" y1="4.37115e-09" x2="164.1" y2="143" stroke="black" strokeOpacity="0.2" strokeWidth="0.2"/>
                            <line x1="248" y1="106.058" x2="-1.26549e-08" y2="106.058" stroke="black" strokeOpacity="0.2" strokeWidth="0.2"/>
                            <line x1="184.1" y1="4.37115e-09" x2="184.1" y2="143" stroke="black" strokeOpacity="0.2" strokeWidth="0.2"/>
                            <line x1="248" y1="123.287" x2="-1.26549e-08" y2="123.287" stroke="black" strokeOpacity="0.2" strokeWidth="0.2"/>
                            <line x1="204.1" y1="4.37115e-09" x2="204.1" y2="143" stroke="black" strokeOpacity="0.2" strokeWidth="0.2"/>
                            <line x1="248" y1="140.516" x2="-1.26549e-08" y2="140.516" stroke="black" strokeOpacity="0.2" strokeWidth="0.2"/>
                            <line x1="224.1" y1="4.37115e-09" x2="224.1" y2="143" stroke="black" strokeOpacity="0.2" strokeWidth="0.2"/>
                            <line x1="244.1" y1="4.37115e-09" x2="244.1" y2="143" stroke="black" strokeOpacity="0.2" strokeWidth="0.2"/>
                        </svg>

                        <div className="chart_bars gap-[16px]">
                            <div style={{height:`${inViewRpCard?"140px":"4px"}`,background:"#FFDF7A" }} className="bar"></div>
                            <div style={{height:`${inViewRpCard?"100px":"4px"}`}} className="bar" ></div>
                            <div style={{height:`${inViewRpCard?"2px":"4px"}`}} className="bar"></div>
                            <div style={{height:`${inViewRpCard?"20px":"4px"}`}} className="bar"></div>
                            <div style={{height:`${inViewRpCard?"10px":"4px"}`}} className="bar"></div>
                        </div>


                        <div style={{display:`${inViewRpCard?"block":"none"}`}} className="rp-joined-count absolute">
                            <h1 className='text-center'>RP Joined : 17</h1>
                        </div>
                </div>

            </div>

            {/* chart bottom months  */}
            <div className="chart_months flex text-[#000]   mb-[8px] text-[8px] ml-[43px] gap-[32px] font-semibold">
                    <span className="month">May</span>
                    <span className="month">Jun</span>
                    <span className="month">Jul</span>
                    <span className="month">Aug</span>
                    <span className="month">Sep</span>
            </div>

              {/* seperate line  */}
            <hr className="w-[254px] h-[.5px] bg-[#00000033] ml-[16px] mb-[12px]" />

            <h1 className=" mt-[14px] ml-[26px] mb-[12px] h-[14px] text-[12px] text-[#000] font-semibold">
              Recently Joined
            </h1>

            {/* People Joined  */}
            <Partners name={'Yogesh'} month={'3'}/>
            <hr className="w-[230px] h-[.5px] bg-[#00000033] mb-[10px] ml-[26px]" />
            <Partners name={'Mamta'} month={'6'}/>



        </div>
      </InView>
  )
}
