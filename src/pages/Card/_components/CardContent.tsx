import styled from 'styled-components';

import BookMarkIcon from '@/assets/svg/ic_bookmark.svg?react';
import BookMarkActiveIcon from '@/assets/svg/ic_bookmark_active.svg?react';

interface CardContentProps {
  cardTitle: string;
  cardSrc: string;
  cardTarget: string;
  cardInfo: string;
  isBookmarked: boolean;
  onBookmarkClick: () => void;
}

function CardContent({
  cardTitle,
  cardSrc,
  cardTarget,
  cardInfo,
  isBookmarked,
  onBookmarkClick,
}: CardContentProps) {
  return (
    <CardContentLayout>
      <CardContentTitle>{cardTitle}</CardContentTitle>
      <CardContentImgBox>
        <CardContentImg src={cardSrc} alt={cardTitle} />
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
  width: 8.8125rem;
  height: 13.8125rem;
  margin-top: 0.8125rem;
`;

const CardContentTitle = styled.h2`
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  color: ${({ theme }) => theme.COLORS.HD_BLK};
  font-size: ${({ theme }) => theme.FONT_SIZE.BODY_01_BOLD};
`;

const CardContentTargetParagraph = styled.p`
  margin-top: 0.8125rem;

  font-family: ${({ theme }) => theme.FONTS.BOLD};
  color: ${({ theme }) => theme.COLORS.HD_BLK};
  font-size: ${({ theme }) => theme.FONT_SIZE.BODY_03_BOLD};
`;

const CardContentInfoParagraph = styled.p`
  max-width: 7.7rem;
  margin-top: 0.8125rem;

  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  color: ${({ theme }) => theme.COLORS.HD_BLK};
  font-size: ${({ theme }) => theme.FONT_SIZE.BODY_04_MED_17};
  line-height: 1rem;
  white-space: pre-wrap;
  word-break: break-all;
`;

const CardContentImgBox = styled.div`
  position: relative;
`;

const BookmarkIconBox = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 0.4rem;

  cursor: pointer;
`;
