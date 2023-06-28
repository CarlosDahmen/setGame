export interface Card {
  id: number;
  color: string;
  shape: string;
  fill: string;
  quantity: number;
  selected: boolean;
  set: boolean | null;
}
