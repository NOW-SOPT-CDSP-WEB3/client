import styled from 'styled-components';

import CardContent from '../_components/CardContent';
import { CARD_DATA } from '../_constants/cardData';

interface CardBoxProps {
  cardBoxTitle: string;
}

function CardBox({ cardBoxTitle }: CardBoxProps) {
  return (
    <CardBoxLayout>
      <CardBoxTitle>{cardBoxTitle}</CardBoxTitle>
      <CardGridBox>
        {CARD_DATA.map((data, index) => (
          <CardContent
            key={index}
            cardTitle={data.cardTitle}
            cardSrc={data.cardSrc}
            cardTarget={data.cardTarget}
            cardInfo={data.cardInfo}
          />
        ))}
      </CardGridBox>
      <CardBoxLine />
    </CardBoxLayout>
  );
}

export default CardBox;

const CardBoxLayout = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 2.25rem;
  width: 57.3125rem;
`;

const CardBoxTitle = styled.h1`
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.HEAD_02};
  color: ${({ theme }) => theme.COLORS.HD_BLK};
`;

const CardGridBox = styled.div`
  margin-top: 2.75rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 4.875rem;
  column-gap: 3.3125rem;
`;

const CardBoxLine = styled.div`
  width: 100%;
  height: 0.1rem;
  background-color: ${({ theme }) => theme.COLORS.HD_GRAY_03};
  margin-top: 2.75rem;
`;
