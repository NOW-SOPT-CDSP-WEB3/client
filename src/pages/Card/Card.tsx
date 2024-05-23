import { useEffect, useState } from 'react';
import styled from 'styled-components';

import CardBanner from '@/pages/Card/_components/CardBanner';
import CardInfo from '@/pages/Card/_components/CardInfo';
import CategoryBox from '@/pages/Card/_components/CategoryBox';
import SidebarFilter from '@/pages/Card/_components/SidebarFilter';
import { CardCategory } from '@/pages/Card/_interfaces/CardInterface';

import { getAllCard, getFilteringCard } from '@/api/axios/Card/cardAxios';

function Card() {
  const [cardData, setCardData] = useState<CardCategory[]>([]);
  const [isAllCards, setIsAllCards] = useState(true);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const getCard = async () => {
    try {
      const response = await getAllCard();
      if (response && response.data) {
        setCardData(response.data.cards);
        setIsAllCards(true);
      }
    } catch (error) {
      console.error('카드를 불러오는 중 오류가 발생했습니다', error);
    }
  };

  const fetchFilteredCards = async ({ category, tags }: { category: string; tags: string }) => {
    try {
      const response = await getFilteringCard(category, tags);
      if (response && response.data) {
        setCardData(response.data.cards);
        setIsAllCards(false);
      }
    } catch (error) {
      console.error('카드를 불러오는 중 오류가 발생했습니다', error);
    }
  };

  useEffect(() => {
    getCard();
  }, []);

  const handleSetSelectedTags = (tags: string[]) => {
    setSelectedTags(tags);
  };

  return (
    <CardLayout>
      <SidebarFilter
        onFilterChange={fetchFilteredCards}
        onAllCheck={getCard}
        setSelectedTags={handleSetSelectedTags} // 함수를 전달
      />
      <CardBoxContainer>
        {cardData.map((categoryData, index) => (
          <div key={categoryData.cardCategory}>
            <CategoryBox categoryData={categoryData} selectedTags={selectedTags} />
            {isAllCards && index === 0 && <CardBanner />}
          </div>
        ))}
        <CardInfo />
      </CardBoxContainer>
    </CardLayout>
  );
}

export default Card;

const CardLayout = styled.div`
  display: flex;

  width: 100%;
`;

const CardBoxContainer = styled.div`
  flex-direction: column;
  flex-grow: 1;

  margin-left: 3.6rem;
`;
