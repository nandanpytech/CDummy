import React from "react";
import RpCard from "./RpCard";
import Commission from "./Commission";
import Closure from "./Closure";

export default function Carousel() {
  return (
    <>
      <div className="card_carousel ml-4 w-[358px]  flex gap-[15px] overflow-x-auto mb-[20px]">
        <RpCard />
        <Commission />
        <Closure />
      </div>
    </>
  );
}
