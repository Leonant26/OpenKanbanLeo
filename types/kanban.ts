export type ThemeType = "light" | "dark" | "playful";

export interface HistoryLogType {
  timestamp: number;
  userId: string;
  message: string;
}

export interface CardType {
  id: string;
  title: string;
  description: string;
  columnId: string;
  priority: "low" | "medium" | "high";
  history: HistoryLogType[];
}

export interface ColumnType {
  id: string;
  title: string;
  color?: string;
  cards: CardType[];
}

export interface BoardType {
  id: string;
  name: string;
  backgroundColor: string;
  columns: ColumnType[];
  activityLog: HistoryLogType[];
}
