import { useState } from 'react';
import styled from 'styled-components';

import BookMarkIcon from '@/assets/svg/ic_bookmark.svg?react';
import BookMarkActiveIcon from '@/assets/svg/ic_bookmark_active.svg?react';

interface CardContentProps {
  cardTitle: string;
  cardSrc: string;
  cardTarget: string;
  cardInfo: string;
}

function CardContent({ cardTitle, cardSrc, cardTarget, cardInfo }: CardContentProps) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleBookmarkClick = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <CardContentLayout>
      <CardContentTitle>{cardTitle}</CardContentTitle>
      <CardContentImgBox>
        <CardContentImg src={cardSrc} alt={cardTitle} />
        <BookmarkIconBox onClick={handleBookmarkClick}>
          {/* 북마크 상태에 따라 아이콘 변경 */}
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
  font-size: ${({ theme }) => theme.FONT_SIZE.BODY_01_BOLD};
  color: ${({ theme }) => theme.COLORS.HD_BLK};
`;

const CardContentTargetParagraph = styled.p`
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.BODY_03_BOLD};
  color: ${({ theme }) => theme.COLORS.HD_BLK};
  margin-top: 0.8125rem;
`;

const CardContentInfoParagraph = styled.p`
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  font-size: ${({ theme }) => theme.FONT_SIZE.BODY_04_MED_17};
  color: ${({ theme }) => theme.COLORS.HD_BLK};
  margin-top: 0.8125rem;
  max-width: 7.7rem;
  word-break: break-all; /* 텍스트가 길어질 경우 단어 단위로 줄바꿈 */
  white-space: pre-wrap; /* 공백과 줄바꿈 문자도 유지 */
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
