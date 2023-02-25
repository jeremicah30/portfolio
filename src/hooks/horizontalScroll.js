import React, { useRef } from "react";

const HorizontalScroll = ({ children }) => {
  const containerRef = useRef(null);

  const handleWheel = (e) => {
    const container = containerRef.current;
    if (container) {
      let scrollAmount = e.deltaY > 0 ? 500 : -500; // set scroll amount to 100 pixels
      if (e.deltaX < 0) {
        // if scrolling left, increase the scroll amount to make it faster
        scrollAmount = scrollAmount * 2;
      }
      container.scrollLeft += scrollAmount;
    }
  };

  return (
    <div className="horizontal-scroll" onWheel={handleWheel} ref={containerRef}>
      {children}
    </div>
  );
};

export default HorizontalScroll;
