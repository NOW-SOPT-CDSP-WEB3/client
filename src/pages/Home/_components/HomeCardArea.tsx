import styled from 'styled-components';

import CardBox from '@/pages/Home/_components/HomeCardBox';
import CardExplanation from '@/pages/Home/_components/HomeCardExplanationBox';

interface HomeCardAreaProps {
  cardTitle: string;
  cards: {
    imgSrc: string;
    title: string;
  }[];
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
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  width: 85.4rem;
  height: 32.8rem;
  margin: 5rem 0;
  padding-bottom: 1.5rem;
`;

export default HomeCardArea;
