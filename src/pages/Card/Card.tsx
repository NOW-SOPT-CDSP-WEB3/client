import styled from 'styled-components';

import CardBanner from '@/pages/Card/_components/CardBanner';
import CardInfo from '@/pages/Card/_components/CardInfo';
import CategoryBox from '@/pages/Card/_components/CategoryBox';
import SidebarFilter from '@/pages/Card/_components/SidebarFilter';
import { CARD_DATA } from '@/pages/Card/_constants/cardData';

function Card() {
  return (
    <CardLayout>
      <SidebarFilter />
      <CardBoxContainer>
        {CARD_DATA.map((categoryData, index) => (
          <div key={categoryData.category}>
            <CategoryBox categoryBoxTitle={categoryData.category} />
            {index === 0 && <CardBanner />} {/* 첫 번째 카테고리 박스 밑에만 CardBanner 표시 */}
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
