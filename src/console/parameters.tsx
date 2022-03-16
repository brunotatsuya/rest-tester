import React from 'react';


const Parameters: React.FC = () => {
  const [params, setParams] = React.useState([{ key: 'A', value: 'B' },{ key: 'A', value: 'B' }]);

  return (
    <>
    {params.map((element, index) => {
      return (
        <div className="grid grid-cols-2 gap-1 py-1" key={index}>
          <div className="col-span-1" >
            <input className=" w-full bg-zinc-700 text-gray-200 py-2 pl-2 focus:outline-none" type="text" placeholder="Key"/>
          </div>
          <div className="col-span-1">
            <input className=" w-full bg-zinc-700 text-gray-200 py-2 pl-2 focus:outline-none" type="text" placeholder="Value"/>
          </div>
        </div>
        )
      })}
    </>
  )
}

export default Parameters;