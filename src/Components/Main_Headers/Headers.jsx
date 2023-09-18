import React from 'react'

function Headers({name}) {
  return (
    <div className={`header mt-[16px] mb-[${name==="Referral Partner"?"14px":"10px"}] ml-[${name==="Referral Partner"?"28px":"16px"}]`}>
       <h1 className='htext text-[18px] font-bold'>{name}</h1>
    </div>
  )
}

export default Headers