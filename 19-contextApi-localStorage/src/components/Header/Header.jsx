import React from 'react';

const Header = () => {
  return (
    <nav className="flex justify-between items-center w-[90%] max-w-[900px] mx-auto my-[15px] px-[18px] py-[8px] rounded-full border border-slate-200 bg-white shadow-sm">

      {/* Musawer Personal Brand Button */}
      <button
        className="flex items-center gap-[6px] px-[10px] py-[5px] border border-slate-200 rounded-full bg-white text-slate-800 transition-transform duration-200 hover:scale-105 active:scale-95"
        onClick={() => {
          window.open('https://www.linkedin.com/in/musawerxd/')
        }}
      >
        <img
          src="../../Public/linkedin.webp"
          alt="LinkedIn"
          className="w-[21px] h-[21px] rounded-full object-cover"
        />
        <p className="text-sm font-medium">Built by musawerxd</p>
      </button>

      <div className="flex items-center gap-2">
        <button
          className="px-4 py-1.5 text-sm font-medium border border-slate-200 rounded-full hover:bg-slate-50 transition-colors text-black"
        >
          Todo App with React Context APi Local Storage
        </button>
      </div>

    </nav>
  );
};

export default Header;