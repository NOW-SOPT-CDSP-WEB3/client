import styled from 'styled-components';

import CardBox from '@/pages/Card/_components/CardBox';
import { CARD_BOX_DATA } from '@/pages/Card/_constants/cardData';

import SidebarFilter from './_components/SidebarFilter';

function Card() {
  return (
    <CardLayout>
      <SidebarFilter />
      <CardBoxContainer>
        {CARD_BOX_DATA.map((data, index) => (
          <CardBox key={index} cardBoxTitle={data.cardBoxTitle} />
        ))}
      </CardBoxContainer>
    </CardLayout>
  );
}

export default Card;

const CardLayout = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
`;

const CardBoxContainer = styled.div`
  flex-grow: 1;
`;
