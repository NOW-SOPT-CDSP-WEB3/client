import styled from 'styled-components';

import LayoutHeaderBottom from '@/layout/_components/LayoutHeaderBottom';
import LayoutHeaderTop from '@/layout/_components/LayoutHeaderTop';

function LayoutHeader() {
  return (
    <Header>
      <LayoutHeaderTop />
      <LayoutHeaderBottom />
    </Header>
  );
}

export default LayoutHeader;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 102px;

  background-color: ${({ theme }) => theme.COLORS.HD_WHITE};
`;
