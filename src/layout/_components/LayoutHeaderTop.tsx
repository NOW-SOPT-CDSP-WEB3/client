import styled from 'styled-components';

import LayoutHeaderTopLeft from '@/layout/_components/LayoutHeaderTopLeft';
import LayoutHeaderTopRight from '@/layout/_components/LayoutHeaderTopRight';

interface ILayoutHeaderTop {
  pathname: string;
}

function LayoutHeaderTop({ pathname }: ILayoutHeaderTop) {
  return (
    <HeaderTopBox>
      <LayoutHeaderTopLeft pathname={pathname} />
      <LayoutHeaderTopRight pathname={pathname} />
    </HeaderTopBox>
  );
}

export default LayoutHeaderTop;

const HeaderTopBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 6rem;

  box-shadow: 0 0.2rem 0.4rem 0 rgb(0 0 0 / 5%);
`;
