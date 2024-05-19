import styled from 'styled-components';

import Carousel from '@/pages/Home/_components/Carousel';
import HomeCardArea from '@/pages/Home/_components/HomeCardArea';
import Input from '@/pages/Home/_components/Input';
import { HOME_CARD_DATA } from '@/pages/Home/_constants/homeCardData';

import EventBox from '@/components/event/EventBox';

import IconVector from '@/assets/svg/vector2.svg?react';

function Home() {
  return (
    <HomePageLayout>
      <Input />
      <Carousel />
      <HomeCardSection>
        <HomeCardArea
          cardTitle='Hyundai Originals'
          cards={HOME_CARD_DATA}
          cardDetail='현대카드의 오리지널리티를 담은 진정한 현대카드'
          hashtags={['프리미엄', '쓸 때마다 할인', '어디서나 포인트적립', '3F 시스템 혜택']}
        />
        <IconVector />
        <HomeCardArea
          cardTitle='Champion Brands'
          cards={HOME_CARD_DATA}
          cardDetail='현대카드의 오리지널리티를 담은 진정한 현대카드'
          hashtags={['프리미엄', '쓸 때마다 할인', '어디서나 포인트적립', '3F 시스템 혜택']}
        />
      </HomeCardSection>
      <EventSection>
        <EventBox isShowPeriod={false} />
      </EventSection>
    </HomePageLayout>
  );
}

const HomePageLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HomeCardSection = styled.section`
  margin-top: 4.5rem;

  > :first-child {
    margin-bottom: 5rem;
  }

  > :last-child {
    margin-top: 5rem;
  }
`;

const EventSection = styled.section`
  margin: 8rem 0 11.3rem;
`;
export default Home;
