import React from 'react';

interface Parameter {
  key?: string;
  value?: string;
}

const Parameters: React.FC = () => {

  const [params, setParams] = React.useState(Array<Parameter>());

  const handleAddParameterClick = () => {
    setParams(params.concat([{ key: '', value: '' }]));
  };

  const handleParameterChange = (index: number, key?: string, value?: string) => {
    const newParams = params.map((param, i) => {
      if (i === index) {
        return { key: key ? key : param.key, value: value ? value : param.value };
      } else {
        return param;
      }
    });
    setParams(newParams);
  };

  const handleDeleteParameterClick = (index: number) => {
    const newParams = params.slice();
    newParams.splice(index, 1);
    setParams(newParams);
  };

  return (
    <>
      <button className="h-full w-10 font-bold text-white bg-orange-500 hover:bg-orange-600 transition-colors rounded-md" onClick={handleAddParameterClick} >
        Add Parameter
      </button>
      {params.map((element, index) => {
        return (
          <div className="grid grid-cols-10 gap-1 pb-1" key={index}>
            <div className="col-span-4" >
              <input className=" w-full bg-zinc-700 text-gray-200 py-2 pl-2 focus:outline-none" type="text" placeholder="Key" value={element.key} onChange={(e) => handleParameterChange(index, e.target.value)} />
            </div>
            <div className="col-span-4">
              <input className=" w-full bg-zinc-700 text-gray-200 py-2 pl-2 focus:outline-none" type="text" placeholder="Value" value={element.value} onChange={(e) => handleParameterChange(index, undefined, e.target.value)} />
            </div>
            <div className="col-span-2">
              <button className="h-full w-full font-bold text-white bg-red-500 hover:bg-red-600 transition-colors rounded-md" onClick={() => handleDeleteParameterClick(index)}>
                Delete
              </button>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Parameters;