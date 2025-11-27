"use client";

import React, { useState, useEffect } from "react";
import { CardType } from "@/types/kanban";
import HistoryFeed from "./HistoryFeed";

interface DetailDrawerProps {
  card: CardType;
  onClose: () => void;
  onUpdate: (updatedCard: CardType) => void;
  onDelete: (cardId: string) => void;
}

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

const IconTrash = ({ className }: { className?: string }) => (
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
    <path d="M3 6h18" />
    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
  </svg>
);

const IconHistory = ({ className }: { className?: string }) => (
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
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
    <path d="M3 3v5h5" />
    <path d="M12 7v5l4 2" />
  </svg>
);

export default function DetailDrawer({ card, onClose, onUpdate, onDelete }: DetailDrawerProps) {
  const [title, setTitle] = useState(card.title);
  const [description, setDescription] = useState(card.description);
  const [priority, setPriority] = useState(card.priority);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setTitle(card.title);
    setDescription(card.description);
    setPriority(card.priority);
  }, [card]);

  const handleSave = () => {
    if (title.trim()) {
      onUpdate({
        ...card,
        title: title.trim(),
        description: description.trim(),
        priority,
      });
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setTitle(card.title);
    setDescription(card.description);
    setPriority(card.priority);
    setIsEditing(false);
  };

  const handleDelete = () => {
    if (confirm("¿Estás seguro de que deseas eliminar esta tarjeta?")) {
      onDelete(card.id);
      onClose();
    }
  };

  const priorityColors = {
    low: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    medium: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
    high: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  };

  const priorityLabels = {
    low: "Baja",
    medium: "Media",
    high: "Alta",
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-40 transition-opacity"
        onClick={onClose}
      />
      
      <div className="fixed right-0 top-0 h-full w-full md:w-2/3 lg:w-1/2 xl:w-1/3 bg-white dark:bg-gray-800 shadow-2xl z-50 overflow-y-auto transition-transform">
        <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-slate-200 dark:border-gray-700 px-6 py-4 flex items-center justify-between z-10">
          <h2 className="text-xl font-bold text-slate-800 dark:text-white">
            Detalles de la Tarjeta
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          >
            <IconX className="w-5 h-5 text-slate-600 dark:text-slate-300" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2">
              Título
            </label>
            {isEditing ? (
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-3 border-2 border-slate-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 dark:bg-gray-700 dark:text-white text-lg font-semibold"
                autoFocus
              />
            ) : (
              <h3
                className="text-2xl font-bold text-slate-800 dark:text-white cursor-pointer hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                onClick={() => setIsEditing(true)}
              >
                {card.title}
              </h3>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2">
              Prioridad
            </label>
            <div className="flex gap-2">
              {(["low", "medium", "high"] as const).map((p) => (
                <button
                  key={p}
                  onClick={() => {
                    setPriority(p);
                    setIsEditing(true);
                  }}
                  className={`flex-1 px-4 py-2 rounded-xl font-semibold text-sm transition-all ${
                    priority === p
                      ? p === "low"
                        ? "bg-blue-500 text-white"
                        : p === "medium"
                        ? "bg-orange-500 text-white"
                        : "bg-red-500 text-white"
                      : "bg-slate-100 dark:bg-gray-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-gray-600"
                  }`}
                >
                  {priorityLabels[p]}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2">
              Descripción
            </label>
            {isEditing ? (
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Añade una descripción detallada..."
                rows={6}
                className="w-full px-4 py-3 border-2 border-slate-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 dark:bg-gray-700 dark:text-white resize-none"
              />
            ) : (
              <div
                className="min-h-[100px] px-4 py-3 bg-slate-50 dark:bg-gray-700 rounded-xl text-slate-700 dark:text-slate-200 cursor-pointer hover:bg-slate-100 dark:hover:bg-gray-600 transition-colors whitespace-pre-wrap"
                onClick={() => setIsEditing(true)}
              >
                {card.description || (
                  <span className="text-slate-400 dark:text-slate-500 italic">
                    Haz clic para añadir una descripción...
                  </span>
                )}
              </div>
            )}
          </div>

          {isEditing && (
            <div className="flex gap-3">
              <button
                onClick={handleSave}
                className="flex-1 px-4 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-xl font-semibold transition-colors"
              >
                Guardar Cambios
              </button>
              <button
                onClick={handleCancel}
                className="px-4 py-3 bg-slate-100 dark:bg-gray-700 hover:bg-slate-200 dark:hover:bg-gray-600 text-slate-700 dark:text-slate-200 rounded-xl font-semibold transition-colors"
              >
                Cancelar
              </button>
            </div>
          )}

          <div className="border-t border-slate-200 dark:border-gray-700 pt-6">
            <div className="flex items-center gap-2 mb-4">
              <IconHistory className="w-5 h-5 text-slate-600 dark:text-slate-300" />
              <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                Historial de Cambios
              </h3>
            </div>
            <HistoryFeed history={card.history} />
          </div>

          <div className="border-t border-slate-200 dark:border-gray-700 pt-6">
            <button
              onClick={handleDelete}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-red-50 dark:bg-red-900/20 hover:bg-red-100 dark:hover:bg-red-900/30 text-red-600 dark:text-red-400 rounded-xl font-semibold transition-colors"
            >
              <IconTrash className="w-5 h-5" />
              Eliminar Tarjeta
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
