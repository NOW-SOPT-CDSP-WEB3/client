import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import Divider from '@/assets/svg/Vertical Divider.svg?react';
import ApplePayIcon from '@/assets/svg/logo_applepay.svg?react';
import HyundaiCardIcon from '@/assets/svg/logo_hyundaicard_scr.svg?react';

import { MAIN_ROUTES } from '@/constants/routes';

interface ILayoutHeaderTopLeft {
  pathname: string;
}

function LayoutHeaderTopLeft({ pathname }: ILayoutHeaderTopLeft) {
  return (
    <HeaderTopLeftSection>
      <HeaderTopNav>
        <LogoBox>
          <HeaderTopLeftLink to={MAIN_ROUTES.HOME.path}>
            <HyundaiCardIcon />
          </HeaderTopLeftLink>
        </LogoBox>
        <HeaderTopLeftNavList>
          <HeaderTopLeftNavItem>My Account</HeaderTopLeftNavItem>
          <HeaderTopLeftNavItem $isCurrentPath={MAIN_ROUTES.CARD.path === pathname}>
            <HeaderTopLeftLink to={MAIN_ROUTES.CARD.path}>
              {MAIN_ROUTES.CARD.title}
            </HeaderTopLeftLink>
          </HeaderTopLeftNavItem>
          <HeaderTopLeftNavItem $isCurrentPath={MAIN_ROUTES.BENEFIT.path === pathname}>
            <HeaderTopLeftLink to={MAIN_ROUTES.BENEFIT.path}>
              {MAIN_ROUTES.BENEFIT.title}
            </HeaderTopLeftLink>
          </HeaderTopLeftNavItem>
          <HeaderTopLeftNavItem>금융</HeaderTopLeftNavItem>
          <HeaderTopLeftNavItem $isCurrentPath={MAIN_ROUTES.CULTURE.path === pathname}>
            <HeaderTopLeftLink to={MAIN_ROUTES.CULTURE.path}>
              {MAIN_ROUTES.CULTURE.title}
            </HeaderTopLeftLink>
          </HeaderTopLeftNavItem>
          <HeaderTopLeftNavItem>고객지원</HeaderTopLeftNavItem>
          <DividerBox>
            <Divider />
          </DividerBox>
          <HeaderTopLeftNavItem>
            <ApplePayIcon />
          </HeaderTopLeftNavItem>
        </HeaderTopLeftNavList>
      </HeaderTopNav>
    </HeaderTopLeftSection>
  );
}

export default LayoutHeaderTopLeft;

const HeaderTopLeftSection = styled.section``;

const HeaderTopNav = styled.nav`
  display: flex;
`;

const HeaderTopLeftNavList = styled.ul`
  display: flex;
`;

const HeaderTopLeftNavItem = styled.li<{ $isCurrentPath?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 2.2rem 1.2rem 1.5rem;

  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  font-size: ${({ theme }) => theme.FONT_SIZE.BODY_01_MED};

  ${({ $isCurrentPath, theme }) =>
    $isCurrentPath &&
    css`
      border-bottom: 0.1rem solid ${theme.COLORS.HD_BLK};
    `}

  &:hover {
    border-bottom: 0.1rem solid ${({ theme }) => theme.COLORS.HD_BLK};
  }
`;

const HeaderTopLeftLink = styled(Link)`
  color: ${({ theme }) => theme.COLORS.HD_BLK};
`;

const DividerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoBox = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 2rem 2.8rem 1.9rem 2.9rem;
`;
