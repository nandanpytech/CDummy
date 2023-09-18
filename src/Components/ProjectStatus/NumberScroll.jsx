import React, { useEffect, useRef, useState } from "react";

export default function NumberScroll({ number, View }) {
  // View is true or false
  const numbers = View ? Array.from({ length: number }, (_, index) => index + 1) : Array.from({ length: number }, (_, index) => number - index);
  const scrollRef = useRef(null);

  const [scrollingEnabled, setScrollingEnabled] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setScrollingEnabled((prev) => !prev);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [View]);

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    // Scroll both containers to the bottom gradually
    const scrollHeight = scrollContainer.scrollHeight - scrollContainer.clientHeight;
    const scrollDuration = 100;
    const interval = 20;
    let currentTime = 0;

    const animateScroll = () => {
      currentTime += interval;

      const ease = (currentTime / scrollDuration) ** 2;
      scrollContainer.scrollTop = View ? ease * scrollHeight : scrollHeight - ease * scrollHeight;

      if (currentTime < scrollDuration) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  }, );

  console.log(View +"view");
  console.log("scrollingEnabled" + scrollingEnabled);
  return (
    <>
      <div className={`counter_up_container ${number===15?'ml-[28px]':'ml-[40px]'} w-max`}>
        <div className="counter_up h-[50px]">
          <div
            ref={scrollRef}
            className="number_scroll h-[50px] "
            style={{ overflow: (!scrollingEnabled) ? "scroll" : "hidden" }}
          >
            <div  className="htext1 text-[40px] font-semibold flex-shrink-0 w-max">
              {numbers.map((number) => (
                <li key={number}>{number * 10}</li>
              ))}
            </div>
          </div>
          <div className="plus flex items-center">
            <h1 className="htext1 text-[40px] font-semibold">+</h1>
          </div>
        </div>

        <h1 className=" text-[#00000066] font-semibold  text-center text-[8px]">
          projects
        </h1>
      </div>
    </>
  );
}
