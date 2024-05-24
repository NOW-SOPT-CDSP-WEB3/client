import styled from 'styled-components';

import Card from '@/pages/Home/_components/HomeCard';

interface HomeCardBoxProps {
  cards: {
    imgSrc: string;
    title: string;
  }[];
}

function HomeCardBox({ cards }: HomeCardBoxProps) {
  return (
    <HomeCardBoxLayout>
      {cards.map(({ title, imgSrc }, index) => (
        <Card key={index} imgSrc={imgSrc} title={title} />
      ))}
    </HomeCardBoxLayout>
  );
}

const HomeCardBoxLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3.6rem 2.2rem;
  align-items: flex-start;
  align-content: flex-start;

  width: 62.6rem;
`;
export default HomeCardBox;
