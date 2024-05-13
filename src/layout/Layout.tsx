import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

function Layout() {
  return (
    <Container>
      <header style={{ backgroundColor: 'aquamarine' }}>헤더</header>
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
