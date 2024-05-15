import LayoutHeaderTop from '@/layout/_components/LayoutHeaderTop';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

function Layout() {
  return (
    <Container>
      <Header>
        <LayoutHeaderTop />
        <HeaderBottomBox></HeaderBottomBox>
      </Header>
      <Wrapper>
        <Outlet />
      </Wrapper>
      <footer style={{ backgroundColor: 'aquamarine' }}>fdsaf푸터</footer>
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

const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 102px;

  background-color: ${({ theme }) => theme.COLORS.HD_WHITE};
`;

const HeaderBottomBox = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 42px;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.HD_GRAY_03};
`;
