import { useAtom } from 'jotai';
import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

import { memberIdAtom } from '@/store/globalStore';

import { CATEGORY_BOX_DATA } from '@/pages/Card/_constants/cardData';
import { CardCategory, CardDetail } from '@/pages/Card/_interfaces/CardInterface';

import { postBookmark } from '@/api/axios/Card/cardAxios';

import CardBox from './CardBox';

interface CategoryBoxProps {
  categoryData: CardCategory;
}

function CategoryBox({ categoryData }: CategoryBoxProps) {
  const { cardCategory, card } = categoryData;
  const [groupedCards, setGroupedCards] = useState<{ [key: string]: CardDetail[] }>({});
  const [bookmarkedCards, setBookmarkedCards] = useState<Set<number>>(new Set());
  const [memberId] = useAtom(memberIdAtom);

  // 카테고리 태그 별로
  const groupCategoryData = useCallback(() => {
    const grouped = card.reduce(
      (acc, card) => {
        const tag = card.cardTags[1];
        acc[tag] = acc[tag] ? [...acc[tag], card] : [card];
        return acc;
      },
      {} as { [key: string]: CardDetail[] },
    );
    setGroupedCards(grouped);
  }, [card]);

  useEffect(() => {
    groupCategoryData();
  }, [groupCategoryData]);

  // 북마크 상태 변경
  const toggleBookmark = async (cardId: number) => {
    try {
      const response = await postBookmark({ memberId, cardId });
      if (response?.success) {
        setBookmarkedCards((prev) => {
          const updated = new Set(prev);
          if (updated.has(cardId)) {
            updated.delete(cardId);
          } else {
            updated.add(cardId);
          }
          return updated;
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const categoryInfoMap = {
    HYUNDAI_ORIGINALS: CATEGORY_BOX_DATA.HYUNDAI,
    CHAMPION_BRANDS: CATEGORY_BOX_DATA.CHAMPION,
    MY_BUSINESS: CATEGORY_BOX_DATA.BUSINESS,
  };
  const categoryInfoText = categoryInfoMap[cardCategory as keyof typeof categoryInfoMap];

  // 카테고리 이름 변환
  const categoryNameMap: { [key: string]: string } = {
    HYUNDAI_ORIGINALS: 'Hyundai Originals',
    CHAMPION_BRANDS: 'Champion Brands',
    AFFILIATE: '제휴카드',
    MY_BUSINESS: 'My Business',
  };
  const displayCategoryName = categoryNameMap[cardCategory] || cardCategory;

  return (
    <CategoryBoxLayout>
      <CategoryBoxTitle>{displayCategoryName}</CategoryBoxTitle>
      {categoryInfoText && <CategoryInfo>{categoryInfoText}</CategoryInfo>}
      {Object.keys(groupedCards).map((tag, index) => (
        <CardBox
          key={tag}
          tag={tag}
          cards={groupedCards[tag]}
          isLast={index === Object.keys(groupedCards).length - 1}
          isBookmarked={(cardId) => bookmarkedCards.has(cardId)}
          onToggleBookmark={toggleBookmark}
        />
      ))}
    </CategoryBoxLayout>
  );
}

export default CategoryBox;

const CategoryBoxLayout = styled.section`
  display: flex;
  flex-direction: column;

  margin-top: 6rem;
`;

const CategoryBoxTitle = styled.h1`
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  color: ${({ theme }) => theme.COLORS.HD_BLK};
  font-size: ${({ theme }) => theme.FONT_SIZE.HEAD_01};
`;

const CategoryInfo = styled.p`
  margin-top: 1rem;

  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  color: ${({ theme }) => theme.COLORS.HD_BLK};
  font-size: ${({ theme }) => theme.FONT_SIZE.BODY_01_MED};
`;
