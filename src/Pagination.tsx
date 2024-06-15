import React, { useEffect, useState } from "react";
import { returnPaginationRange } from "./PaginationUtils";

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface PaginationProps {
  page: number;
  limit: number;
  totalPage: number;
  handlePageChange: (page: number) => void;
}
const Pagination: React.FC<PaginationProps> = (props) => {
  const { totalPage, page, limit, handlePageChange } = props;
  const Siblings: number = 1;
  const arr: (number | string)[] = returnPaginationRange(
    totalPage,
    page,
    Siblings
  ) as (number | string)[];
  const [inputValue, setInputValue] = useState<number|string>(page);

  useEffect(() => {
    setInputValue(page);
  }, [page]);
  return (
    <div className="mt-14 justify-center w-full   mx-auto ">
      <hr className="h-px  mb-5 bg-gray-100 border-0 dark:bg-gray-700" />
      <section className="flex justify-between items-center">
        <p 
        onClick={() => handlePageChange(page - 1)}
        className={`relative   cursor-pointer md:ml-0 ml-10 ${page===1?"cursor-not-allowed text-gray-400":"select-none md:hover_line"} `}>
            <ArrowBackIcon className="ml-2"/>
            <span className="md:block hidden">Prev Page</span>
            </p>
        <div className=" md:flex hidden">
          {arr.map((item: number | string, index: number) => {
            if (item === "...")
              return (
                <p key={index} className="px-4 select-none">
                  ...
                </p>
              );
            return (
              <p
                key={index}
                onClick={() => handlePageChange(+item)}
                className={`px-4 hover_line cursor-pointer select-none relative hover_line ${
                  page === item ? "active   text-[#978afc] font-bold" : ""
                }
                 `}
              >
                {item}
              </p>
            );
          })}
        </div>
        <div className="md:hidden block my-2">
          <div className="flex items-center mx-auto w-2/3">
            <p className="text-white divide-x">Go to Page</p>
          {/* go to page and so a page number */}
            <input
              type="number"
                className="border-2 border-gray-400 bg-transparent w-[30%] text-center text-white p-2 outline-none rounded-md ml-2"
              value={inputValue}
              onChange={(e) => {
                const value = e.target.value.trim() === "" ? "0" : e.target.value;
                setInputValue(parseInt(value));
                handlePageChange(parseInt(value));
              }}
            />
            <p className="ml-2">of {totalPage}</p>
          </div>
        </div>
        <p
          onClick={() => handlePageChange(page + 1)}
          className={`relative  cursor-pointer md:mr-0 mr-10 select-none ${page === totalPage ? "text-gray-400 cursor-not-allowed " : " md:hover_line"}`}
        >
          <span className="md:block hidden ">Next Page</span>
          <ArrowForwardIcon className="ml-2"/>
        </p>
      </section>
    </div>
  );
};

export default Pagination;
