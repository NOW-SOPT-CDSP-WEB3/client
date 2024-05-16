import styled from 'styled-components';

import { MAIN_ROUTES } from '@/constants/routes';

import LayoutHeaderBottom from '@/layout/_components/LayoutHeaderBottom';
import LayoutHeaderTop from '@/layout/_components/LayoutHeaderTop';

interface ILayoutHeader {
  pathname: string;
}

function LayoutHeader({ pathname }: ILayoutHeader) {
  return (
    <Header>
      <LayoutHeaderTop />
      {pathname !== MAIN_ROUTES.HOME.path && <LayoutHeaderBottom pathname={pathname} />}
    </Header>
  );
}

export default LayoutHeader;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.HD_WHITE};
`;
