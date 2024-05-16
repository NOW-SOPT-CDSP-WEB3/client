import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import LayoutFooter from '@/layout/_components/LayoutFooter';
import LayoutHeader from '@/layout/_components/LayoutHeader';

function Layout() {
  return (
    <Container>
      <LayoutHeader />
      <Wrapper>
        <Outlet />
      </Wrapper>
      <LayoutFooter />
    </Container>
  );
}

export default Layout;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 1366px;
  min-height: 100vh;
  margin: 0 auto;

  background-color: ${({ theme }) => theme.COLORS.HD_WHITE};
`;

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;
