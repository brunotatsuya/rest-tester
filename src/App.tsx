import React from "react";
import Topbar from "./topbar/topbar";
import Console from "./console/console";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Topbar></Topbar>
      <Console></Console>
    </div>
  );
}

export default App;