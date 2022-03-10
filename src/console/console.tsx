import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import React from "react";

const Console: React.FC = () => {

  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

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
          <input className="h-12 w-full bg-zinc-800 text-sm outline-none" placeholder="https://your.amazing/test"></input>
        </div>
        <div className="grid justify-items-center col-span-2 md:col-span-2 lg:col-span-1 bg-zinc-900">
          <button className="h-full w-5/6 font-bold text-white bg-orange-500 hover:bg-orange-600 transition-colors rounded-md">
            SEND
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 mt-6 gap-4">
        <div className="col-span-12 md:col-span-6 h-96 bg-zinc-800">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <Box sx={{ width: '100%', typography: 'body1' }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className="text-white">
                  <TabList onChange={handleChange} aria-label="lab API tabs example">
                    <Tab label="Parameters" value="1" />
                    <Tab label="Body" value="2" />
                    <Tab label="Headers" value="3" />
                    <Tab label="Authorization" value="4" />
                  </TabList>
                </Box>
                <TabPanel value="1">Item One</TabPanel>
                <TabPanel value="2">Item Two</TabPanel>
                <TabPanel value="3">Item Three</TabPanel>
                <TabPanel value="4">Item Four</TabPanel>
              </TabContext>
            </Box>

          </div></div>
        <div className="col-span-12 md:col-span-6 h-96 bg-zinc-800"></div>
      </div>

    </>
  )
}

export default Console;