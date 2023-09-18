import React from 'react'
export default function NavBar() {

  return (
    <>
        <div className="nav_header w-max mb-[8px] h-[56px] bg-[#fff]">
            <div className="arrow-back w-[40px] p-[8px] mr-[12.13px] rounded-[21.5px] bg-[#F6F6F6]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                            <mask id="mask0_1_722" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="24">
                                <rect x="0.0411377" width="24" height="24" fill="#D9D9D9" />
                                            </mask>
                            <g mask="url(#mask0_1_722)">
                                <path d="M7.86614 13L13.4661 18.6L12.0411 20L4.04114 12L12.0411 4L13.4661 5.4L7.86614 11H20.0411V13H7.86614Z" fill="#1C1B1F" />
                            </g>
                    </svg>
            </div>
            <div className="portfolio">
                <h1 className='text-[17px] font-semibold text-[#0E0E0E]'>Portfolio</h1>
            </div>
        </div>
    </>
  )
}
