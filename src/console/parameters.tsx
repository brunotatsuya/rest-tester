import React from 'react';
import { TiPlus } from 'react-icons/ti';
import { ImCross } from 'react-icons/im';
import { MdCheckBox } from 'react-icons/md';

interface Parameter {
  key?: string;
  value?: string;
}

const Parameters: React.FC = () => {

  const [params, setParams] = React.useState([{ key: '', value: '' }]);

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
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-semibold text-gray-200">Query parameters</h4>
        <button className="font-bold text-gray-300 hover:text-white py-1 px-1 inline-flex items-center" onClick={handleAddParameterClick} >
          <TiPlus />
        </button>
      </div>
      {params.map((element, index) => {
        return (
            <div className="grid grid-cols-11 gap-1 pb-1" key={index}>
              <div className="col-span-5" >
                <input className="bg-zinc-700 text-gray-200 focus:outline-none appearance-none w-full text-sm rounded-md py-2 pl-4 shadow-sm" type="text" placeholder="New key" value={element.key} onChange={(e) => handleParameterChange(index, e.target.value)}></input>
              </div>
              <div className="col-span-5">
                <input className="bg-zinc-700 text-gray-200 focus:outline-none appearance-none w-full text-sm rounded-md py-2 pl-4 shadow-sm" type="text" placeholder="New value" value={element.value} onChange={(e) => handleParameterChange(index, undefined, e.target.value)}></input>
              </div>
              <div className="col-span-1 flex gap-4 items-center justify-end">
              <button className="text-2xl text-green-600 hover:text-green-500 text-center">
                  <MdCheckBox />
                </button>
                <button className="text-red-600 hover:text-red-500 text-center" onClick={() => handleDeleteParameterClick(index)}>
                  <ImCross />
                </button>
              </div>
            </div>
        )
      })}

    </>
  )
}

export default Parameters;