import styled from 'styled-components';

import { CardInfo } from '@/pages/Home/type';

import Card from './Card';

interface CardBoxProps {
  cards: CardInfo[];
}

function CardBox({ cards }: CardBoxProps) {
  return (
    <CardBoxLayout>
      {cards.map(({ title, imgSrc }, index) => (
        <Card key={index} imgSrc={imgSrc} title={title} />
      ))}
    </CardBoxLayout>
  );
}

const CardBoxLayout = styled.div`
  display: flex;
  width: 62.6rem;
  align-items: flex-start;
  align-content: flex-start;
  gap: 3.6rem 2.2rem;
  flex-wrap: wrap;
`;
export default CardBox;
