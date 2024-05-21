export interface Card {
  id: number;
  cardTitle: string;
  cardSrc: string;
  cardTarget: string;
  cardInfo: string;
  hasEvent: boolean;
  tags: string[];
  hoverInfo1: number;
  hoverInfo2: number;
}
