import React, { useState } from "react";
import { initialColumns } from "./data";

const DynamicCol = ({updateColumns, setColDropdown}) => {
    const [selectedCols, setSelectedCols] = useState([])
    
    function applyColumns() {
        updateColumns(selectedCols);
        setColDropdown(false);
    }


    function updateSelectedCols ({value, checked}) {
        console.log(value, checked);
        if(checked){
            setSelectedCols([...selectedCols, value])
        }else {
            const filteredCols = selectedCols.filter((e)=> value !== e);
            setSelectedCols(filteredCols); 
        }
    }

  return (
    <>
      <div className="flex flex-col absolute right-5 z-10 items-center justify-center p-4">
        {/* <button
          id="dropdownDefault"
          data-dropdown-toggle="dropdown"
          className="text-text bg-gray-200 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          type="button"
        >
          Filter by category
          <svg
            className="w-4 h-4 ml-2"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button> */}

        <div
          id="dropdown"
          className="z-10  w-56 p-3 bg-white rounded-lg shadow dark:bg-gray-700"
        >
          <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
            Edit Columns
          </h6>
          <span className="text-xs font-light block mt-[-10px] mb-[10px]">Select the columns to rearrange</span>
          <ul className="space-y-2 text-sm " aria-labelledby="dropdownDefault">
            {initialColumns.map((col) => (
              <li className="flex items-center">
                <input
                  id={col}
                  type="checkbox"
                  onChange={(e)=> updateSelectedCols({value: e.target.value, checked: e.target.checked})}
                  value={col}
                  className="w-4 h-4 bg-gray-800 border-gray-800 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />

                <label
                  for={col}
                  className="border-2 w-[200px] p-1 rounded-lg ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                >
                  {col}
                </label>
              </li>
            ))}
          </ul>

          <div className="flex justify-between gap-4 p-2 m-1">
            <button className="border-2 text-xs p-2 rounded-md w-[150px]">Reset to Default</button>
            <button onClick={applyColumns} className="border-2 bg-gray-900 rounded-md text-xs text-white pr-2 pl-2">Apply</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DynamicCol;