import React from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import TabPanel from './tab-panel';
import Parameters from './parameters';


const Console: React.FC = () => {

  const [value, setValue] = React.useState('Parameters');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className="h-100">
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
          <input className="h-12 w-full bg-zinc-800 text-sm outline-none" placeholder="https://your.amazing/test"></input>
        </div>
        <div className="grid justify-items-center col-span-2 md:col-span-2 lg:col-span-1 bg-zinc-900">
          <button className="h-full w-5/6 font-bold text-white bg-orange-500 hover:bg-orange-600 transition-colors rounded-md">
            SEND
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 mt-6 gap-4 h-100">
        <div className="col-span-12 md:col-span-6 bg-zinc-800">
          <div className="border-gray-200 dark:border-gray-700 text-white">

            <Box sx={{ width: '100%' }}>
              <Box sx={{ width: '100%' }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  textColor="inherit"
                  TabIndicatorProps={{ style: { background: "#F97316" } }}
                >
                  <Tab label="Parameters" value="Parameters" />
                  <Tab label="Body" value="Body" />
                  <Tab label="Headers" value="Headers" />
                  <Tab label="Authorization" value="Authorization" />
                </Tabs>
              </Box>
              <TabPanel value={value} index="Parameters"><Parameters /></TabPanel>
              <TabPanel value={value} index="Body">Item Two</TabPanel>
              <TabPanel value={value} index="Headers">Item Three</TabPanel>
              <TabPanel value={value} index="Authorization">Item Four</TabPanel>
            </Box>

          </div>
        </div>
        <div className="col-span-12 md:col-span-6 bg-zinc-800"></div>
      </div>

    </div>
  )
}

export default Console;