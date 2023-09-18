import React from 'react'

import Evolution from './Evolution';

export default function Community() {

  return (
    <>
        <div className="community_container ml-4 w-[358px] h-[132px] rounded-[4px] mb-[20px]  bg-[#fff]">
            <div className="present_year_container w-[81px] h-[21px]">

              <div className="present_year w-[81px] h-[21px]">
                  <h1 className='text-[10px] font-bold text-[#fff]'>2019 - Present</h1>
              </div> 

            </div>
            <div className="community_count w-[160px] flex gap-[10px] items-center mt-[30px] ml-[30px] h-[60px]">
              <h1 className='extra-bold text-[50px]  htext'>50</h1>
              <h1 className=' extra-bold text-[50px]  text-[#F7B314] '>Plus</h1>
            </div>

            <div className="community_discover_desc ml-[30px]">
                <h1 className='underline decoration-0 underline-offset-2  text-[10px] texfont-semibold'>Discover our presence in 50 plus Gated Communities.</h1>
            </div>
        </div>

        {/* year comparision  */}

        <div className="evolution_desc w-[358px] text-[#fff] text-[12px] rounded-[4px]">
            <h1 className='inline font-semibold '>Comparing the evolution:</h1>
            <p className='inline ml-1'>No.of Gated Communities we are present 2019 vs 2023</p>
        </div>

        <Evolution/> 

        <div className="auto_scroll_text h-[31px]">
            <p className="text-[12px] ml-[16px]">Gated community we are present (Auto scroll text)</p>
        </div>

    </>
  )
}
