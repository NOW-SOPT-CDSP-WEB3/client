import styled from 'styled-components';

import IconVector from '@/assets/svg/vector2.svg?react';

import CardBox from './_components/CardBox';
import HomeCardArea from './_components/HomeCardArea';

function Home() {
  return (
    <HomeCardAreaBox>
      <HomeCardArea />
      <IconVector />
      <HomeCardArea />
    </HomeCardAreaBox>
  );
}

const HomeCardAreaBox = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
`;
export default Home;
