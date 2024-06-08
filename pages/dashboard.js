import React, { useReducer, useState } from "react";
import Sidebar from "../components/Sidebar";
import Table from "../components/Table";
import {data, initialColumns} from "../components/data";
import DynamicCols from "../components/DynamicCols";
import filterDataByColumns from "../helper"



const reducer = (state, action) => {
  switch (action.type) {
    case 'changeColumn':
      const newData = filterDataByColumns(action.payload.data, action.payload.filteredCols)
      return newData;
    case 'scheduleDate':
      return filterDataByDate(action.payload.data, action.payload.filter);
    default:
      return state;
  }
};


const dashboard = () => {
    const [columns, setColumns] = useState(initialColumns);
    const [colDropdown, setColDropdown] = useState(false)
    const [showFilter, setShowFilter] = useState(false);

    const [filteredData, dispatch] = useReducer(reducer, data);
    // console.log(helperFunctions)

    const handleDateFilterChange = (filter) => {
      // console.log(filter);
      dispatch({ type: 'scheduleDate', payload: { data, filter } });
    };

    const updateColumns = (filteredCols) => {
        setColumns(filteredCols);
      
        // Filter the data based on the selected columns
        // const newData = filterDataByColumns(data, filteredCols)
        // setFilteredData(newData);

        dispatch({ type: 'changeColumn', payload: { data, filteredCols } });
      };

  // console.log(filteredData);
  return (
    <>
    <div id="overlay" className="display-none"></div>
    <div className="h-screen flex flex-row justify-start relative">
      <Sidebar />
      <div className="bg-white flex-auto w-64 p-4 text-text border-1 max-h-screen overflow-scroll">
        Waitlist
        {/* Threeinputs */}
        <div className="grid gap-6 mb-6 md:grid-cols-3">
          <div>
            <input
              type="text"
              id="first_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John"
              required
            />
          </div>
          <div>
            <input
              type="text"
              id="last_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Doe"
              required
            />
          </div>
          <div>
            <input
              type="text"
              id="last_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Doe"
              required
            />
          </div>
        </div>
        <div className="flex justify-between flex-row lg:flex-row sm:flex sm:flex-col" id="filter_section">
          {/* Add filter btn */}
          <div className="flex items-start justify-start p-4 relative ">
            <button
              id="dropdownDefault"
              onClick={()=>setShowFilter(!showFilter)}
              data-dropdown-toggle="dropdown"
              class="text-text bg-gray-200 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              type="button"
            >
              <svg
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.6667 1H1.33333L6.66666 7.30667V11.6667L9.33333 13V7.30667L14.6667 1Z"
                  stroke="#334155"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Add Filter
              <svg
                class="w-4 h-4 ml-2"
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
            </button>
          </div>

          {/* Search */}
          <div className="flex items-end justify-end md:justify-start p-4">
            <label for="simple-search" class="sr-only">
              Search
            </label>
            <div class="relative w-full md:w-[60%]">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100%] ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search branch name..."
                required
              />
            </div>

            <div className="flex justify-end items-center pb-2">
              <button>
                <svg
                  width="36"
                  height="32"
                  viewBox="0 0 36 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 9.33337V13.3334H16"
                    stroke="#334155"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M24 16C23.9989 14.8422 23.6629 13.7095 23.0325 12.7384C22.4021 11.7673 21.5041 10.9993 20.447 10.5272C19.3899 10.055 18.2187 9.89873 17.0748 10.0773C15.9308 10.2558 14.863 10.7615 14 11.5334L12 13.3334"
                    stroke="#334155"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M24 22.6666V18.6666H20"
                    stroke="#334155"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 16C12.0011 17.1578 12.3371 18.2905 12.9675 19.2616C13.5979 20.2327 14.4959 21.0007 15.553 21.4729C16.6101 21.9451 17.7813 22.1013 18.9252 21.9228C20.0692 21.7442 21.137 21.2385 22 20.4667L24 18.6667"
                    stroke="#334155"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <div className="relative">
              <button onClick={() => setColDropdown(!colDropdown)}>
                <svg
                  width="36"
                  height="32"
                  viewBox="0 0 36 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.6667 10H13.3333C12.597 10 12 10.597 12 11.3333V20.6667C12 21.403 12.597 22 13.3333 22H22.6667C23.403 22 24 21.403 24 20.6667V11.3333C24 10.597 23.403 10 22.6667 10Z"
                    stroke="#334155"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18 10V22"
                    stroke="#334155"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              {colDropdown && <DynamicCols updateColumns={updateColumns} setColDropdown={setColDropdown}/>}
              </div>
              <button >
                <svg
                  width="36"
                  height="32"
                  viewBox="0 0 36 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 18V20.6667C24 21.0203 23.8595 21.3594 23.6095 21.6095C23.3594 21.8595 23.0203 22 22.6667 22H13.3333C12.9797 22 12.6406 21.8595 12.3905 21.6095C12.1405 21.3594 12 21.0203 12 20.6667V18M14.6667 14.6667L18 18M18 18L21.3333 14.6667M18 18V10"
                    stroke="#334155"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>

              
              
            </div>
          </div>
        </div>
       
        {data && <Table data={filteredData} columns={columns} />}
        
      </div>
    </div>
    </>

    
  );
};

export default dashboard;