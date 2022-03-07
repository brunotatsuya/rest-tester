import React from "react";

const Topbar: React.FC = () => {
  return (
    <div className="w-screen bg-zinc-900 p-3 border-b border-zinc-800">
      <a className="font-extrabold text-sm p-3 hover:bg-zinc-800 text-slate-100 transition-all" href="/">
        <span className="inline-block align-middle">REST TESTER</span>
      </a>
    </div>
  )
}

export default Topbar;