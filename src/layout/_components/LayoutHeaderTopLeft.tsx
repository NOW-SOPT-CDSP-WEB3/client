import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Divider from '@/assets/svg/Vertical Divider.svg?react';
import ApplePayIcon from '@/assets/svg/logo_applepay.svg?react';
import HyundaiCardIcon from '@/assets/svg/logo_hyundaicard_scr.svg?react';

import { MAIN_ROUTES } from '@/constants/routes';

function LayoutHeaderTopLeft() {
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
          <HeaderTopLeftNavItem>
            <HeaderTopLeftLink to={MAIN_ROUTES.CARD.path}>
              {MAIN_ROUTES.CARD.title}
            </HeaderTopLeftLink>
          </HeaderTopLeftNavItem>
          <HeaderTopLeftNavItem>
            <HeaderTopLeftLink to={MAIN_ROUTES.BENEFIT.path}>
              {MAIN_ROUTES.BENEFIT.title}
            </HeaderTopLeftLink>
          </HeaderTopLeftNavItem>
          <HeaderTopLeftNavItem>금융</HeaderTopLeftNavItem>
          <HeaderTopLeftNavItem>
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

const HeaderTopLeftNavItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 22px 12px 15px;

  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  font-size: ${({ theme }) => theme.FONT_SIZE.BODY_01_MED};

  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.HD_BLK};
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

  padding: 20px 28px 19px 29px;
`;
