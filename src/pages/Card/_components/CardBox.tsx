import { useState } from 'react';
import styled from 'styled-components';

import CardContent from '@/pages/Card/_components/CardContent';
import { CARD_DATA } from '@/pages/Card/_constants/cardData';

interface CardBoxProps {
  cardBoxTitle: string;
}

function CardBox({ cardBoxTitle }: CardBoxProps) {
  // 북마크 상태를 관리하는 상태 배열 초기화
  const [bookmarked, setBookmarked] = useState(new Array(CARD_DATA.length).fill(false));

  // 북마크 상태를 변경하는 함수
  const handleBookmarkClick = (index: number) => {
    const updatedBookmarked = [...bookmarked];
    updatedBookmarked[index] = !updatedBookmarked[index];
    setBookmarked(updatedBookmarked);
  };

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
            isBookmarked={bookmarked[index]}
            onBookmarkClick={() => handleBookmarkClick(index)}
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

  width: 91.7rem;
  margin-top: 6.5rem;
  margin-left: 3.6rem;
`;

const CardBoxTitle = styled.h1`
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  color: ${({ theme }) => theme.COLORS.HD_BLK};
  font-size: ${({ theme }) => theme.FONT_SIZE.HEAD_02};
`;

const CardGridBox = styled.div`
  display: grid;
  gap: 7.8rem 5.3rem;
  margin-top: 4.4rem;
  grid-template-columns: repeat(5, 1fr);
`;

const CardBoxLine = styled.div`
  width: 100%;
  height: 0.1rem;
  margin-top: 4.4rem;

  background-color: ${({ theme }) => theme.COLORS.HD_GRAY_03};
`;
