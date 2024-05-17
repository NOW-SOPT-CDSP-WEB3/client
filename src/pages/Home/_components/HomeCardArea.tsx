import styled from 'styled-components';

import { CARD_DATA } from '@/pages/Home/_constants/cardData';

import CardBox from './CardBox';
import CardExplanation from './CardExplanationBox';

function HomeCardArea() {
  return (
    <HomeCardAreaLayout>
      <CardExplanation />
      <CardBox />
    </HomeCardAreaLayout>
  );
}

const HomeCardAreaLayout = styled.div`
  width: 85.4rem;
  height: 32.8rem;
  display: flex;
  padding-bottom: 1.5rem;
  justify-content: space-between;
  align-items: flex-start;
  margin: 5rem 0;
`;

export default HomeCardArea;
