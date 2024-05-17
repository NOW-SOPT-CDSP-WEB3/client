import styled from 'styled-components';

import { CARD_DATA } from '@/pages/Home/_constants/cardData';

import IconVector from '@/assets/svg/vector2.svg?react';

import HomeCardArea from './_components/HomeCardArea';

function Home() {
  return (
    <HomeCardAreaBox>
      <HomeCardArea
        cardTitle='Hyundai Originals'
        cards={CARD_DATA}
        cardDetail='현대카드의 오리지널리티를 담은 진정한 현대카드'
        hashtags={['프리미엄', '쓸 때마다 할인', '어디서나 포인트적립', '3F 시스템 혜택']}
      />
      <IconVector />
      <HomeCardArea
        cardTitle='Champion Brands'
        cards={CARD_DATA}
        cardDetail='현대카드의 오리지널리티를 담은 진정한 현대카드'
        hashtags={['프리미엄', '쓸 때마다 할인', '어디서나 포인트적립', '3F 시스템 혜택']}
      />
    </HomeCardAreaBox>
  );
}

const HomeCardAreaBox = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
`;
export default Home;
