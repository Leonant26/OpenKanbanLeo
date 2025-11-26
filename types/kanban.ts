export type Priority = 'low' | 'medium' | 'high';

export interface CardType {
  id: string;
  title: string;
  description: string;
  columnId: string;
  priority: Priority;
}

export interface ColumnType {
  id: string;
  title: string;
  cards: CardType[];
}
