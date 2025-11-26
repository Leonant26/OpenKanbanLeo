"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import BoardHeader from "@/components/BoardHeader";
import Column from "@/components/Column";
import { ColumnType, CardType } from "@/types/kanban";

const initialColumns: ColumnType[] = [
  {
    id: "col-1",
    title: "Pendiente",
    cards: [
      {
        id: "card-1",
        title: "Diseñar nueva landing page",
        description: "Crear mockups y prototipos para la nueva página de inicio",
        columnId: "col-1",
        priority: "high",
      },
      {
        id: "card-2",
        title: "Investigar competidores",
        description: "Análisis de mercado y benchmarking",
        columnId: "col-1",
        priority: "medium",
      },
      {
        id: "card-3",
        title: "Actualizar documentación",
        description: "",
        columnId: "col-1",
        priority: "low",
      },
    ],
  },
  {
    id: "col-2",
    title: "En Proceso",
    cards: [
      {
        id: "card-4",
        title: "Implementar autenticación",
        description: "Configurar OAuth y JWT para el sistema de login",
        columnId: "col-2",
        priority: "high",
      },
      {
        id: "card-5",
        title: "Optimizar base de datos",
        description: "Mejorar queries y añadir índices",
        columnId: "col-2",
        priority: "medium",
      },
    ],
  },
  {
    id: "col-3",
    title: "Hecho",
    cards: [
      {
        id: "card-6",
        title: "Setup del proyecto Next.js",
        description: "Configuración inicial con TypeScript y Tailwind",
        columnId: "col-3",
        priority: "high",
      },
      {
        id: "card-7",
        title: "Crear componentes base",
        description: "Sidebar, Header y estructura principal",
        columnId: "col-3",
        priority: "medium",
      },
    ],
  },
];

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

export default function Home() {
  const [columns, setColumns] = useState<ColumnType[]>(initialColumns);
  const [isAddingColumn, setIsAddingColumn] = useState(false);
  const [newColumnTitle, setNewColumnTitle] = useState("");

  const handleAddNewCard = (columnId: string, title: string) => {
    const newCard: CardType = {
      id: `card-${Date.now()}`,
      title,
      description: "",
      columnId,
      priority: "medium",
    };

    setColumns((prevColumns) =>
      prevColumns.map((col) =>
        col.id === columnId
          ? { ...col, cards: [...col.cards, newCard] }
          : col
      )
    );
  };

  const handleAddNewColumn = (title: string) => {
    const newColumn: ColumnType = {
      id: `col-${Date.now()}`,
      title,
      cards: [],
    };

    setColumns([...columns, newColumn]);
  };

  const handleAddColumn = () => {
    if (newColumnTitle.trim()) {
      handleAddNewColumn(newColumnTitle.trim());
      setNewColumnTitle("");
      setIsAddingColumn(false);
    }
  };

  const handleCancelColumn = () => {
    setNewColumnTitle("");
    setIsAddingColumn(false);
  };

  return (
    <div className="flex h-screen w-full bg-gray-50 overflow-hidden">
      <Sidebar />

      <div className="flex-1 flex flex-col h-full min-w-0">
        <BoardHeader />

        <main className="flex-1 overflow-x-auto overflow-y-hidden bg-gray-50 p-6">
          <div className="h-full inline-flex items-start gap-6">
            {columns.map((column) => (
              <Column
                key={column.id}
                column={column}
                onAddCard={handleAddNewCard}
              />
            ))}

            {isAddingColumn ? (
              <div className="w-80 flex-shrink-0 bg-slate-50 rounded-2xl p-4 border-2 border-cyan-300">
                <input
                  autoFocus
                  type="text"
                  value={newColumnTitle}
                  onChange={(e) => setNewColumnTitle(e.target.value)}
                  placeholder="Título de la lista..."
                  className="w-full px-4 py-2 text-sm font-semibold border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 mb-3"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleAddColumn();
                    }
                    if (e.key === "Escape") {
                      handleCancelColumn();
                    }
                  }}
                />
                <div className="flex gap-2">
                  <button
                    onClick={handleAddColumn}
                    className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-xl font-semibold text-sm transition-colors"
                  >
                    Añadir Lista
                  </button>
                  <button
                    onClick={handleCancelColumn}
                    className="p-2 text-slate-500 hover:bg-slate-100 rounded-xl transition-colors"
                  >
                    <IconX className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setIsAddingColumn(true)}
                className="w-80 flex-shrink-0 h-12 border-2 border-dashed border-slate-300 rounded-2xl flex items-center justify-center text-slate-500 font-semibold hover:border-cyan-400 hover:text-cyan-600 hover:bg-cyan-50 transition-all cursor-pointer group"
              >
                <IconPlus className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Añadir Lista
              </button>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
