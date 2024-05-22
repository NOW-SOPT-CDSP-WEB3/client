import styled from 'styled-components';

import { CardDetail } from '@/pages/Card/_interfaces/CardInterface';

import BookMarkIcon from '@/assets/svg/ic_bookmark.svg?react';
import BookMarkActiveIcon from '@/assets/svg/ic_bookmark_active.svg?react';

import CardHover from './CardHover';

interface CardContentProps {
  card: CardDetail;
  isBookmarked: boolean;
  onToggleBookmark: (cardId: number) => void;
}

function CardContent({ card, isBookmarked, onToggleBookmark }: CardContentProps) {
  return (
    <CardContentLayout>
      <CardContentTitle>{card.name}</CardContentTitle>
      <CardContentImgBox>
        <CardContentImg src={card.image} alt={card.name} />
        <CardHover hoverInfo1={card.visaFee} hoverInfo2={card.domesticFee} />
        <BookmarkIconBox onClick={() => onToggleBookmark(card.id)}>
          {isBookmarked ? <BookMarkActiveIcon /> : <BookMarkIcon />}
        </BookmarkIconBox>
      </CardContentImgBox>
      <CardContentTargetParagraph>
        {card.invitation ? 'Invitation Only' : 'Open to All'}
      </CardContentTargetParagraph>
      <CardContentInfoParagraph>{card.description}</CardContentInfoParagraph>
      {card.hasEvent && <CardContentEvent>Welcome 이벤트</CardContentEvent>}
    </CardContentLayout>
  );
}

export default CardContent;

const CardContentLayout = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const CardContentImg = styled.img`
  width: 14.1rem;
  height: 22.1rem;
  margin-top: 1.3rem;
`;

const CardContentTitle = styled.h2`
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  color: ${({ theme }) => theme.COLORS.HD_BLK};
  font-size: ${({ theme }) => theme.FONT_SIZE.BODY_01_BOLD};
`;

const CardContentTargetParagraph = styled.p`
  margin-top: 1.3rem;

  font-family: ${({ theme }) => theme.FONTS.BOLD};
  color: ${({ theme }) => theme.COLORS.HD_BLK};
  font-size: ${({ theme }) => theme.FONT_SIZE.BODY_03_BOLD};
`;

const CardContentInfoParagraph = styled.p`
  max-width: 12rem;
  margin-top: 1.3rem;

  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  color: ${({ theme }) => theme.COLORS.HD_BLK};
  font-size: ${({ theme }) => theme.FONT_SIZE.BODY_04_MED_17};
  line-height: 1.5rem;
  white-space: pre-wrap;
  word-break: break-all;
`;

const CardContentImgBox = styled.div`
  position: relative;
  z-index: 1;
  &:hover div {
    opacity: 1;
  }
`;

const BookmarkIconBox = styled.div`
  position: absolute;
  top: 2.1rem;
  right: 0.4rem;
  cursor: pointer;
`;

const CardContentEvent = styled.div`
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  color: ${({ theme }) => theme.COLORS.HD_GRAY_01};
  font-size: ${({ theme }) => theme.FONT_SIZE.DETAIL_02_BOLD};
  text-align: center;
  background-color: ${({ theme }) => theme.COLORS.HD_GRAY_04};
  padding: 0.4rem 0.7rem;

  margin-top: 1.3rem;
  border-radius: 10px;
`;
