import { useEffect, useState } from 'react';
import styled from 'styled-components';

import CardBanner from '@/pages/Card/_components/CardBanner';
import CardInfo from '@/pages/Card/_components/CardInfo';
import CategoryBox from '@/pages/Card/_components/CategoryBox';
import SidebarFilter from '@/pages/Card/_components/SidebarFilter';

import { getAllCard, getFilteringCard } from '@/api/axios/Card/cardAxios';

import { CardCategory } from './_interfaces/CardInterface';

function Card() {
  const [cardData, setCardData] = useState<CardCategory[]>([]);

  const getCard = async () => {
    try {
      const response = await getAllCard();
      if (response && response.data) {
        console.log('전체카드', response.data.cards);
        setCardData(response.data.cards);
      }
    } catch (error) {
      console.error('카드를 불러오는 중 오류가 발생했습니다', error);
    }
  };

  const fetchFilteredCards = async ({ category, tags }: { category: string; tags: string }) => {
    try {
      const response = await getFilteringCard(category, tags);
      if (response && response.data) {
        console.log('필터링된 카드', response.data.cards);
        setCardData(response.data.cards);
      }
    } catch (error) {
      console.error('카드를 불러오는 중 오류가 발생했습니다', error);
    }
  };

  useEffect(() => {
    getCard(); // 초기에는 전체 카드를 가져옴
  }, []);

  return (
    <CardLayout>
      {/* SidebarFilter에 onAllCheck prop으로 getAllCard 함수 전달 */}
      <SidebarFilter onFilterChange={fetchFilteredCards} onAllCheck={getCard} />
      <CardBoxContainer>
        {cardData.map((categoryData, index) => (
          <div key={categoryData.cardCategory}>
            <CategoryBox categoryData={categoryData} />
            {index === 0 && <CardBanner />} {/* 첫 번째 카테고리 박스 밑에만 CardBanner 표시 */}
          </div>
        ))}
        <CardInfo />
      </CardBoxContainer>
    </CardLayout>
  );
}

export default Card;

/*function Card() {
  const [cardData, setCardData] = useState<CardCategory[]>([]);

  useEffect(() => {
    const getCard = async () => {
      try {
        const response = await getAllCard();
        if (response && response.data) {
          console.log('전체카드', response.data.cards);
          setCardData(response.data.cards);
        }
      } catch (error) {
        console.error('카드를 불러오는 중 오류가 발생했습니다', error);
      }
    };
    getCard();
  }, []);

  return (
    <CardLayout>
      <SidebarFilter />
      <CardBoxContainer>
        {cardData.map((categoryData, index) => (
          <div key={categoryData.cardCategory}>
            <CategoryBox categoryData={categoryData} />
            {index === 0 && <CardBanner />} 
          </div>
        ))}
        <CardInfo />
      </CardBoxContainer>
    </CardLayout>
  );
}

export default Card;*/

const CardLayout = styled.div`
  display: flex;

  width: 100%;
`;

const CardBoxContainer = styled.div`
  flex-direction: column;
  flex-grow: 1;

  margin-left: 3.6rem;
`;
