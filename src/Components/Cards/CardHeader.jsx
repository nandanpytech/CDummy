import React from "react";

export default function CardHeader({name}) {
  return (
    <>
        <h1 className={`htext mt-[14px] ml-[28px] mb-[14px] h-[14px] text-[12px] font-semibold`}>
          {name}
        </h1>
      <hr className={`w-[286px] h-[.5px] bg-[rgba(0, 0, 0, 0.20)] ${name==="Commission Panel"?'mb-[16px]':'mb-[4px]'} ` }/>
    </>
  );
}
