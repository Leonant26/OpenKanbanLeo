"use client";

import React from "react";

// --- Icons ---
const IconPlus = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M5 12h14" />
    <path d="M12 5v14" />
  </svg>
);

const IconFilter = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
  </svg>
);

const IconMoreHorizontal = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="1" />
    <circle cx="19" cy="12" r="1" />
    <circle cx="5" cy="12" r="1" />
  </svg>
);

export default function BoardHeader() {
  return (
    <header className="h-20 px-8 flex items-center justify-between bg-white border-b border-slate-100 flex-shrink-0 z-10">
      {/* Left: Board Info */}
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-md shadow-cyan-200">
          <span className="text-white font-bold text-lg">M</span>
        </div>
        <div>
          <h1 className="text-xl font-bold text-slate-800 leading-tight">
            OpenKanban Master Project
          </h1>
          <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              Active
            </span>
            <span className="text-slate-300">•</span>
            <span>Last updated 2h ago</span>
          </div>
        </div>
      </div>

      {/* Right: Actions & Users */}
      <div className="flex items-center gap-6">
        {/* User Avatars */}
        <div className="flex -space-x-3">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-9 h-9 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden hover:z-10 hover:scale-110 transition-transform duration-200 cursor-pointer"
            >
               <img 
                 src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}&backgroundColor=c0aede`} 
                 alt={`User ${i}`} 
                 className="w-full h-full"
               />
            </div>
          ))}
          <div className="w-9 h-9 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-500 hover:bg-slate-200 cursor-pointer transition-colors">
            +5
          </div>
        </div>

        <div className="h-8 w-px bg-slate-200"></div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button className="p-2.5 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-slate-700 transition-colors border border-transparent hover:border-slate-200">
            <IconFilter className="w-5 h-5" />
          </button>
          
          <button className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2.5 rounded-2xl font-semibold shadow-lg shadow-cyan-500/25 transition-all active:scale-95">
            <IconPlus className="w-5 h-5" />
            <span>Crear Tarea</span>
          </button>

          <button className="p-2.5 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-slate-700 transition-colors">
            <IconMoreHorizontal className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
