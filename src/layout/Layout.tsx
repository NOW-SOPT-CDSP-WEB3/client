import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import LayoutFooter from '@/layout/_components/LayoutFooter';
import LayoutHeader from '@/layout/_components/LayoutHeader';

function Layout() {
  const { pathname }: { pathname: string } = useLocation();

  return (
    <Container>
      <LayoutHeader pathname={pathname} />
      <Wrapper>
        <Outlet />
      </Wrapper>
      <LayoutFooter pathname={pathname} />
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
