import styled from 'styled-components';

import Card from '@/pages/Home/_components/Card';
import { CardInfo } from '@/pages/Home/type';

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
  flex-wrap: wrap;
  gap: 3.6rem 2.2rem;
  align-items: flex-start;
  align-content: flex-start;

  width: 62.6rem;
`;
export default CardBox;
