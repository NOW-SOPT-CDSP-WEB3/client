import styled from 'styled-components';

import { CARD_DATA } from '@/pages/Home/_constants/cardData';

import Card from './Card';

function CardBox() {
  return (
    <CardBoxLayout>
      {CARD_DATA.map(({ title, imgSrc }) => (
        <Card key={title} imgSrc={imgSrc} title={title} />
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
  flex-shrink: 0;
`;
export default CardBox;
