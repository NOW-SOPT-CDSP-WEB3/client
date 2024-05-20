import styled from 'styled-components';

import { CARD_DATA } from '@/pages/Card/_constants/cardData';

import CardBanner from './_components/CardBanner';
import CategoryBox from './_components/CategoryBox';
import SidebarFilter from './_components/SidebarFilter';

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
  flex-grow: 1;
  flex-direction: column;
  margin-left: 3.6rem;
`;
