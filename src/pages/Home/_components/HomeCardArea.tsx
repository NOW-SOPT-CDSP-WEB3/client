import styled from 'styled-components';

import CardBox from '@/pages/Home/_components/CardBox';
import CardExplanation from '@/pages/Home/_components/CardExplanationBox';
import { CardInfo } from '@/pages/Home/type';

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
