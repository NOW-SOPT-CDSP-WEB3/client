import { useState } from 'react';
import styled from 'styled-components';

import { CARD_DATA } from '@/pages/Card/_constants/cardData';

import CategoryBox from './_components/CategoryBox';
import SidebarFilter from './_components/SidebarFilter';

function Card() {
  return (
    <CardLayout>
      <SidebarFilter />
      <CardBoxContainer>
        {CARD_DATA.map((categoryData) => (
          <CategoryBox key={categoryData.category} categoryBoxTitle={categoryData.category} />
        ))}
      </CardBoxContainer>
    </CardLayout>
  );
}

export default Card;

const CardLayout = styled.div`
  display: flex;

  width: 100%;
  height: 100vh;
`;

const CardBoxContainer = styled.div`
  flex-grow: 1;
`;
