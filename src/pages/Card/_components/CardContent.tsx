import styled from 'styled-components';

import CardHover from '@/pages/Card/_components/CardHover';

import BookMarkIcon from '@/assets/svg/ic_bookmark.svg?react';
import BookMarkActiveIcon from '@/assets/svg/ic_bookmark_active.svg?react';

interface CardContentProps {
  cardTitle: string;
  cardSrc: string;
  cardTarget: string;
  cardInfo: string;
  hoverInfo1: number;
  hoverInfo2: number;
  isBookmarked: boolean;
  onBookmarkClick: () => void;
}

function CardContent({
  cardTitle,
  cardSrc,
  cardTarget,
  cardInfo,
  hoverInfo1,
  hoverInfo2,
  isBookmarked,
  onBookmarkClick,
}: CardContentProps) {
  return (
    <CardContentLayout>
      <CardContentTitle>{cardTitle}</CardContentTitle>
      <CardContentImgBox>
        <CardContentImg src={cardSrc} alt={cardTitle} />
        <CardHover hoverInfo1={hoverInfo1} hoverInfo2={hoverInfo2} />
        <BookmarkIconBox onClick={onBookmarkClick}>
          {isBookmarked ? <BookMarkActiveIcon /> : <BookMarkIcon />}
        </BookmarkIconBox>
      </CardContentImgBox>
      <CardContentTargetParagraph>{cardTarget}</CardContentTargetParagraph>
      <CardContentInfoParagraph>{cardInfo}</CardContentInfoParagraph>
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
