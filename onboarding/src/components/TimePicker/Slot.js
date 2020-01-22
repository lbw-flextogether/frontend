import React, { useState, useEffect } from "react";

const Slot = ({ day, slot, selectTime }) => {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    selectTime(day, slot, clicked);
  }, [clicked, day, slot, selectTime]);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div
      onMouseDown={() => handleClick()}
      onMouseOver={e => {
        if (e.buttons === 1) {
          handleClick();
        }
      }}
      className={!clicked ? "slot" : "slot selected-slot"}
    >
      {slot}
    </div>
  );
};

export default Slot;
