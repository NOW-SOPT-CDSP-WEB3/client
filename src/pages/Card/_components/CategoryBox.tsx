import { useAtom } from 'jotai';
import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

import { memberIdAtom } from '@/store/globalStore';

import CardBox from '@/pages/Card/_components/CardBox';
import { CATEGORY_BOX_DATA } from '@/pages/Card/_constants/cardData';
import { CardCategory, CardDetail } from '@/pages/Card/_interfaces/CardInterface';

import { postBookmark } from '@/api/axios/Card/cardAxios';

interface CategoryBoxProps {
  categoryData: CardCategory;
  selectedTags: string[];
}

function CategoryBox({ categoryData, selectedTags }: CategoryBoxProps) {
  const { cardCategory, card } = categoryData;
  const [groupedCards, setGroupedCards] = useState<{ [key: string]: CardDetail[] }>({});
  const [bookmarkedCards, setBookmarkedCards] = useState<Set<number>>(new Set());
  const [memberId] = useAtom(memberIdAtom);
  const [selectedTag, setSelectedTag] = useState('All');

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

  useEffect(() => {
    if (['AFFILIATE', 'MY_BUSINESS'].includes(cardCategory)) {
      setSelectedTag('All');
    } else if (selectedTags.length > 0) {
      setSelectedTag(selectedTags[0]);
    } else {
      setSelectedTag('All');
    }
  }, [selectedTags, cardCategory]);

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
  const categoryNameMap: { [key: string]: string } = {
    HYUNDAI_ORIGINALS: 'Hyundai Originals',
    CHAMPION_BRANDS: 'Champion Brands',
    AFFILIATE: '제휴카드',
    MY_BUSINESS: 'My Business',
  };

  const displayCategoryName = categoryNameMap[cardCategory] || cardCategory;
  const isSpecialCategory = ['AFFILIATE', 'MY_BUSINESS'].includes(cardCategory);
  let displayTags;
  if (isSpecialCategory) {
    displayTags = Object.keys(groupedCards);
  } else {
    displayTags = selectedTags.length > 0 ? selectedTags : ['All'];
  }

  const shouldShowAllTagButton = selectedTags.length === 0 || selectedTags.includes('ALL');

  return (
    <CategoryBoxLayout>
      <CategoryBoxTitle>{displayCategoryName}</CategoryBoxTitle>
      {categoryInfoText && <CategoryInfo>{categoryInfoText}</CategoryInfo>}
      {isSpecialCategory && (
        <TagButtonsLayout>
          {shouldShowAllTagButton && (
            <TagButton selected={selectedTag === 'All'} onClick={() => setSelectedTag('All')}>
              All
            </TagButton>
          )}
          {displayTags.map((tag) => (
            <TagButton
              key={tag}
              selected={selectedTag === tag || selectedTags.includes(tag)}
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </TagButton>
          ))}
        </TagButtonsLayout>
      )}
      {isSpecialCategory ? (
        selectedTag === 'All' ? (
          <CardBox
            key='all-cards'
            tag='All'
            cards={card}
            isBookmarked={(cardId) => bookmarkedCards.has(cardId)}
            onToggleBookmark={toggleBookmark}
            showTitle={false}
          />
        ) : (
          groupedCards[selectedTag] && (
            <CardBox
              key={selectedTag}
              tag={selectedTag}
              cards={groupedCards[selectedTag]}
              isBookmarked={(cardId) => bookmarkedCards.has(cardId)}
              onToggleBookmark={toggleBookmark}
              showTitle={false}
            />
          )
        )
      ) : (
        Object.keys(groupedCards).map((tag) => (
          <CardBox
            key={tag}
            tag={tag}
            cards={groupedCards[tag]}
            isBookmarked={(cardId) => bookmarkedCards.has(cardId)}
            onToggleBookmark={toggleBookmark}
            showTitle={true}
          />
        ))
      )}
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
  margin-top: 2rem;

  font-family: ${({ theme }) => theme.FONTS.HEAD_01};
  color: ${({ theme }) => theme.COLORS.HD_BLK};
  font-size: ${({ theme }) => theme.FONT_SIZE.HEAD_01};
  -webkit-text-stroke-width: 0.3rem;
  -webkit-text-stroke-color: ${({ theme }) => theme.COLORS.HD_BLK};
`;

const CategoryInfo = styled.p`
  margin-top: 1rem;

  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  color: ${({ theme }) => theme.COLORS.HD_BLK};
  font-size: ${({ theme }) => theme.FONT_SIZE.BODY_01_MED};
`;

const TagButtonsLayout = styled.div`
  display: flex;
  align-items: center;

  margin-top: 4.4rem;

  & > div:not(:last-child)::after {
    display: inline-block;

    width: 0.1rem;
    height: 1rem;
    margin-left: 1rem;

    background-color: ${({ theme }) => theme.COLORS.HD_GRAY_04};
    content: '';
  }
`;

const TagButton = styled.div<{ selected: boolean }>`
  margin-right: 1rem;

  font-family: ${({ theme }) => theme.FONTS.BOLD};
  color: ${({ selected, theme }) => (selected ? theme.COLORS.HD_BLK : theme.COLORS.HD_GRAY_02)};
  font-size: ${({ theme }) => theme.FONT_SIZE.BODY_04_BOLD};

  cursor: pointer;
`;
