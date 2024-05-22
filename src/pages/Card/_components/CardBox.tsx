import styled from 'styled-components';

import CardContent from '@/pages/Card/_components/CardContent';
import { CardDetail } from '@/pages/Card/_interfaces/CardInterface';

interface CardBoxProps {
  tag: string;
  cards: CardDetail[];
  isLast: boolean;
  isBookmarked: (cardId: number) => boolean;
  onToggleBookmark: (cardId: number) => void;
}

interface CardBoxProps {
  tag: string;
  cards: CardDetail[];
  isLast: boolean;
  isBookmarked: (cardId: number) => boolean;
  onToggleBookmark: (cardId: number) => void;
}

function CardBox({
  tag,
  cards,
  isLast,
  isBookmarked,
  onToggleBookmark,
  showTitle = true,
}: CardBoxProps & { showTitle?: boolean }) {
  return (
    <CardBoxLayout>
      {showTitle && <CardBoxTitle>{tag}</CardBoxTitle>}
      <CardGridBox>
        {cards.map((card) => (
          <CardContent
            key={card.id}
            card={card}
            isBookmarked={isBookmarked(card.id)}
            onToggleBookmark={onToggleBookmark}
          />
        ))}
      </CardGridBox>
      {!isLast && <CardBoxLine />}
    </CardBoxLayout>
  );
}
export default CardBox;

const CardBoxLayout = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 91.7rem;
  //margin-top: 6.5rem;
`;

const CardBoxTitle = styled.h1`
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  color: ${({ theme }) => theme.COLORS.HD_BLK};
  font-size: ${({ theme }) => theme.FONT_SIZE.HEAD_02};
  margin-top: 6.5rem;
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
