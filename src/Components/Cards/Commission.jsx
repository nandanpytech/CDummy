import React from 'react'
import CardHeader from './CardHeader'
import dashlines from '../../assets/Vector 444.png'
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Commission() {
    const percentage=1
  return (
    <>
    <div className="card_name  w-[286px] h-[349px] rounded-[4px] bg-[#fff] ml-[16px]">
       <CardHeader name={'Commission Panel'}/>

       <div className="commission_graph relative ml-[16px] mr-[16px] w-[254px] h-[198px] rounded-[8px] bg-[#FFE9A1]">
            <div className="sub-header-commission w-max ml-[12px] mt-[12px] flex gap-[2px]">
                <h1 className="htext text-center w-[24px] h-[10px] text-[20px] font-semibold">₹</h1>
                <span className='htext text-[20px] font-semibold'>00,000.0000</span>
            </div>
            <div className="small_heading">
                <h1 className='ml-[12px] mb-[36px] text-[10px] font-semibold   text-[#00000066]'>Overall Commission</h1>
            </div>


            <div className="horizontal_lines flex flex-col  text-[#000000B2] gap-[25px] ml-[5px]">
                <div className="line-1 flex items-center">
                    <span className="ruppes text-[6px] font-semibold  ">10 Lakhs</span>
                    <div className='w-[220px] h-[0.8px] bg-[#0000004D] ml-auto'/>
                </div>
                <div className="line-1 flex gap-[4px] items-center">
                    <span className="ruppes  text-[6px] font-semibold  ">5 Lakhs</span>
                    <div className='w-[220px] h-[0.8px] bg-[#0000004D] ml-auto'/>
                </div>
                <div className="line-1 flex gap-[4px] items-center">
                    <span className="ruppes  text-[6px] font-semibold  ">0 Lakhs</span>
                    <div className='w-[220px] h-[0.8px] bg-[#0000004D] ml-auto'/>
                </div>
            </div>

            <div className="duration htext text-[6px] mt-[8px] ml-[48px] flex gap-[26px] font-semibold">
                <span>1D</span>
                <span>1W</span>
                <span>1M</span>
                <span>3M</span>
                <span>6M</span>
                <span>1Y</span>
            </div>

            {/* cross_line  */}
            <div className="cross_line  absolute top-[123px] left-[35px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="139" height="41" viewBox="0 0 140 43" fill="none">
                        <path d="M1.1549 42C-1.23898 28.3333 23.1786 1 140 1" stroke="black"/>
                </svg>
                <svg className='absolute top-0 right-[55px]' xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 5 5" fill="none">
                    <circle cx="2.5" cy="2.5" r="2" fill="#FFEEFE" stroke="black"/>
                </svg>
            </div>
            
            {/* big black dot  */}
            <div className="black-dot absolute top-[122px] right-[72px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 5 5" fill="none">
                    <circle cx="2.5" cy="2.5" r="2.5" fill="#010101"/>
                </svg>
            </div>

            {/* multiple dotted lines  */}
            <div className="dotted-lines absolute top-[122px] right-[7px]">
                <img src={dashlines} alt="" />
            </div>

       </div>


        <div className="commission-footer flex mt-[10px] ml-[16px] gap-[10px]">
            <div className="commission-percentage relative w-[67px] h-[67px] flex items-center justify-center rounded-[8px] bg-[#0F0F0F]">
                <div className="" style={{ width: "60%", height: "60%" }}>
                      <CircularProgressbar styles={buildStyles({ textSize: '30px', textColor: '#fff',pathColor:`rgba(246, 186, 0, 1`})} value={percentage} text={`${percentage<10?'0':''}${percentage}%`} />;
                </div> 
            </div>

            <div className="commission-monthly w-[177px] h-[67px] bg-[#FFEDB7] rounded-[8px]">
                <div className='text-[20px] htext flex font-semibold ml-[14px] mt-[16px] mb-[2px]'>
                        <h1 className="htext w-[24px] text-center h-auto text-[20px] font-semibold">₹</h1>
                        <span className='htext text-[20px] font-semibold'>00,000.0000</span>
                </div>
            
                <p className='ml-[16px] text-[8px]'>Monthly Commission</p>
            </div>
        </div>

      
    </div>
    </>
  )
}
