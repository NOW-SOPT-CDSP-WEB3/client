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

interface CardResponse {
  status: number;
  success: boolean;
  message: string;
  data: {
    cards: CardCategory[];
  };
}

interface CardCategory {
  cardCategory: string;
  card: CardDetail[];
}

interface CardDetail {
  id: number;
  name: string;
  invitation: boolean;
  description: string;
  image: string;
  hasEvent: boolean;
  cardTags: string[];
  visaFee: number;
  domesticFee: number;
}
