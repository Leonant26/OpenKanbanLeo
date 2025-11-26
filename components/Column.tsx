"use client";

import React, { useState } from "react";
import { ColumnType } from "@/types/kanban";
import Card from "./Card";

interface ColumnProps {
  column: ColumnType;
  onAddCard: (columnId: string, title: string) => void;
}

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

const IconX = ({ className }: { className?: string }) => (
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
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

export default function Column({ column, onAddCard }: ColumnProps) {
  const [isAddingCard, setIsAddingCard] = useState(false);
  const [newCardTitle, setNewCardTitle] = useState("");

  const handleAddCard = () => {
    if (newCardTitle.trim()) {
      onAddCard(column.id, newCardTitle.trim());
      setNewCardTitle("");
      setIsAddingCard(false);
    }
  };

  const handleCancel = () => {
    setNewCardTitle("");
    setIsAddingCard(false);
  };

  return (
    <div className="w-80 flex-shrink-0 flex flex-col max-h-full bg-slate-50 rounded-2xl p-4">
      <div className="flex items-center justify-between px-2 mb-4">
        <h3 className="font-bold text-slate-800 text-lg">{column.title}</h3>
        <span className="bg-slate-200 text-slate-700 text-xs font-bold px-3 py-1 rounded-full">
          {column.cards.length}
        </span>
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar pr-2 space-y-3 mb-3">
        {column.cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>

      {isAddingCard ? (
        <div className="bg-white p-3 rounded-2xl border-2 border-cyan-300 shadow-sm">
          <input
            autoFocus
            type="text"
            value={newCardTitle}
            onChange={(e) => setNewCardTitle(e.target.value)}
            placeholder="Título de la tarjeta..."
            className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 mb-3"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleAddCard();
              }
              if (e.key === "Escape") {
                handleCancel();
              }
            }}
          />

          <div className="flex gap-2">
            <button
              onClick={handleAddCard}
              className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-white px-3 py-2 rounded-xl font-semibold text-sm transition-colors"
            >
              Añadir
            </button>
            <button
              onClick={handleCancel}
              className="p-2 text-slate-500 hover:bg-slate-100 rounded-xl transition-colors"
            >
              <IconX className="w-5 h-5" />
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsAddingCard(true)}
          className="flex items-center justify-center gap-2 w-full py-2.5 text-slate-600 hover:bg-slate-100 rounded-xl transition-colors font-medium text-sm group"
        >
          <IconPlus className="w-4 h-4 group-hover:scale-110 transition-transform" />
          <span>Agregar Tarjeta</span>
        </button>
      )}
    </div>
  );
}
