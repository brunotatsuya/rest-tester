import React from "react";

const Console: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-12 mt-6">
        <div className="col-span-3 md:col-span-2 lg:col-span-1 bg-zinc-800 text-white">
          <select className="h-12 w-full pl-4 pr-4 cursor-pointer font-extrabold text-sm bg-zinc-800 border-r border-zinc-600">
            <option value="GET">GET</option>
            <option value="POST">POST</option>
            <option value="PATCH">PATCH</option>
            <option value="PUT">PUT</option>
            <option value="DELETE">DELETE</option>
          </select>
        </div>
        <div className="col-span-7 md:col-span-8 lg:col-span-10 pl-8 bg-zinc-800 text-white">
          <input className="h-12 w-full bg-zinc-800 text-sm outline-none" placeholder="URL"></input>
        </div>
        <div className="grid justify-items-center col-span-2 md:col-span-2 lg:col-span-1 bg-zinc-900">
          <button className="h-full w-5/6 font-bold text-white bg-orange-500 hover:bg-orange-600 transition-colors rounded-md">
            SEND
          </button>
        </div>
      </div>
    </>
  )
}

export default Console;