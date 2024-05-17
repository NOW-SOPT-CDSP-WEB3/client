import styled from 'styled-components';

import { CardInfo } from '@/pages/Home/type';

import CardBox from './CardBox';
import CardExplanation from './CardExplanationBox';

interface HomeCardAreaProps {
  cardTitle: string;
  cards: CardInfo[];
  cardDetail: string;
  hashtags: string[];
}

function HomeCardArea({ cardTitle, cards, cardDetail, hashtags }: HomeCardAreaProps) {
  return (
    <HomeCardAreaLayout>
      <CardExplanation cardTitle={cardTitle} cardDetail={cardDetail} hashtags={hashtags} />
      <CardBox cards={cards} />
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
