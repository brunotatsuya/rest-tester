import React from "react";

import Topbar from "./topbar/topbar";

const App: React.FC = () => {
  return (
    <div className="h-screen bg-zinc-900">
      <Topbar></Topbar>
    </div>
  );
}

export default App;