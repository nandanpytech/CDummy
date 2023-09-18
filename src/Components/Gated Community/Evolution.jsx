import React, {useState }  from 'react'
import { InView } from 'react-intersection-observer'
import { throttle } from '../../const/CustomThrottle'

export default function Evolution() {
    const isSquare=false
    const [inViewCommunity,setInViewCommunity]=useState(true)

    const handleView = throttle((inViewCommunity) => setInViewCommunity(inViewCommunity), 100);


  return (
    <>
         {/* <InView onChange={handleView}> */}
            <div  className="evolution_graph relative w-[358px] h-[364px] ml-[16px] mb-[16px] flex item gap-[10px]">
                {/* 2019  */}
                <div className="side-2019 w-[174px] border-[1px] border-dashed border-[#000]">
                    <h1 className='evolution_text extra-bold text-[50px] mb-[30px] text-transparent text-center bg-clip-text'>2019</h1>
                    <InView onChange={handleView}>
                      <div className='flex flex-col gap-[35px] items-end float-right'>
                          <div className={`round_horizontal_bar1 ${inViewCommunity ? 'w-[40px]':'w-[0px]'} ${isSquare && "square-bars"} h-[24px] mr-[25px]`}>
                          </div>

                          <div className={`round_horizontal_bar1  ${inViewCommunity ? 'w-[61px]':'w-[0px] '} ${isSquare && "square-bars"} h-[24px] mr-[25px]`}>
                          </div>

                          <div className={`round_horizontal_bar1  ${inViewCommunity ? 'w-[84px]':'w-[0px]'} ${isSquare && "square-bars"} h-[24px] mr-[25px]`}>
                          </div>

                          <div className={`round_horizontal_bar1  ${inViewCommunity ? 'w-[99px]':'w-[0px]'} ${isSquare && "square-bars"} h-[24px] mr-[25px]`}>
                          </div>

                      </div>
                    </InView>
                </div>

                {/* vs  */}
                <div className="vs-text absolute left-[156px] bg-[#fff] inline-flex p-[5px] mt-[10px] mb-[7px]">
                  <h1 className='htext extra-bold text-[30px]'>Vs</h1>
                </div>

              {/* middle Q  */}
              <InView onChange={handleView}>
                <div className="custom_shadow absolute top-[63px] left-[147px] rounded-[8px] bg-[#fff]  w-[64px] h-[275px]">
                    <ul className={`extra-bold ${inViewCommunity?'pt-[33px]':'pt-[40px]'} text-[#141414] flex flex-col gap-[32px] justify-center items-center text-[20px] transition-all duration-500 `}>
                      <li className={` ${inViewCommunity ? 'quarter':'opacity-20'} `}>Q1</li>
                      <li className={` ${inViewCommunity ? 'quarter':'opacity-20'}`}>Q2</li>
                      <li className={` ${inViewCommunity ? 'quarter':'opacity-20'}`}>Q3</li>
                      <li className={` ${inViewCommunity ? 'quarter':'opacity-20'}`}>Q4</li>
                    </ul>
                </div>
                </InView>

              {/* 2023 */}
                <div className="side_2023 w-[174px] border-[1px] border-dashed border-[#000]">
                  <h1 className='evolution_text extra-bold text-[50px] text-transparent text-center mb-[30px]  bg-clip-text '>2023</h1>
                  <InView onChange={handleView}>
                  <div className='flex flex-col gap-[35px] ml-[25px]'>
                        <div className={`round_horizontal_bar2  ${inViewCommunity ? 'w-[55px]':'w-[0px]'} ${isSquare && "square-bars"} h-[24px]`}>
                        </div>

                        <div className={`round_horizontal_bar2  ${inViewCommunity ? 'w-[109px]':'w-[0px]'} ${isSquare && "square-bars"} h-[24px]`}>
                        </div>

                        <div className={`round_horizontal_bar2  ${inViewCommunity ? 'w-[80px]':'w-[0px]'} ${isSquare && "square-bars"} h-[24px]`}>
                        </div>
                        
                        <div className={`round_horizontal_bar2  ${inViewCommunity ? 'w-[128px]':'w-[0px]'} ${isSquare && "square-bars"} h-[24px]`}>
                        </div>

                    </div>
                    </InView>
                </div>

            </div>
        {/* </InView> */}
    </>
  )
}
