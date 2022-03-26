import React from "react";

const Topbar: React.FC = () => {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-zinc-800">
      <div>
        <a href="/" className="flex items-center">
          <img
            className="h-8 w-8 mr-3"
            src="../src/favicon.svg"
            alt="Workflow"
          />
          <span className="text-white font-semibold text-lg tracking-tight">
            REST TESTER
          </span>
        </a>
      </div>
    </div>
  );
};


export default Topbar;