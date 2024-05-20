export interface Card {
  id: number;
  cardTitle: string;
  cardSrc: string;
  cardTarget: string;
  cardInfo: string;
  hasEvent: boolean;
  tags: string[];
}

export interface CategoryData {
  category: string;
  card: Card[];
}
