"use client";

import React from "react";
import { CardType } from "@/types/kanban";

interface CardProps {
  card: CardType;
}

const priorityColors = {
  low: "bg-blue-100 text-blue-700",
  medium: "bg-orange-100 text-orange-700",
  high: "bg-red-100 text-red-700",
};

const priorityLabels = {
  low: "Baja",
  medium: "Media",
  high: "Alta",
};

export default function Card({ card }: CardProps) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 cursor-pointer hover:shadow-md transition-all duration-200 group">
      <div className="flex items-start justify-between mb-2">
        <span
          className={`text-xs font-bold px-3 py-1 rounded-full ${
            priorityColors[card.priority]
          }`}
        >
          {priorityLabels[card.priority]}
        </span>
      </div>

      <h4 className="font-semibold text-slate-800 mb-2 leading-snug">
        {card.title}
      </h4>

      {card.description && (
        <p className="text-sm text-slate-500 mb-3 line-clamp-2">
          {card.description}
        </p>
      )}

      <div className="flex items-center justify-between mt-3 pt-3 border-t border-slate-100">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-slate-200 overflow-hidden border-2 border-white">
            <img
              src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${card.id}`}
              alt="User"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
