import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const SortButton = () => {
  const [open, setOpen] = useState();
  
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="sort-button bg-blue-500 text-white w-fit rounded-[10px] ">
        <button
          type="button"
          className="flex flex-row 
         items-center gap-2 py-2 px-6"
          onClick={toggle}
        >
          <span>Sort By</span> <IoIosArrowDown />
        </button>
      </div>
      {open ? (
        <ul
          className="dropdown bg-white rounded-md cursor-pointer w-fit"
          onClick={toggle}
        >
          <li className="hover:bg-slate-300 w-32 text-center py-1">
            Low to High
          </li>
          <li className="hover:bg-slate-300 w-32 text-center py-1">
            High to Low
          </li>
          <li className="hover:bg-slate-300 w-32 text-center py-1">Latest</li>
        </ul>
      ) : null}
    </>
  );
};

export { SortButton };
