import styled from 'styled-components';

import Divider from '@/assets/svg/Vertical Divider.svg?react';
import ApplePayIcon from '@/assets/svg/logo_applepay.svg?react';
import HyundaiCardIcon from '@/assets/svg/logo_hyundaicard_scr.svg?react';

function LayoutHeaderTopLeft() {
  return (
    <HeaderTopLeftSection>
      <HeaderTopNav>
        <LogoBox>
          <HyundaiCardIcon />
        </LogoBox>
        <HeaderTopLeftNavList>
          <HeaderTopLeftNavItem>My Account</HeaderTopLeftNavItem>
          <HeaderTopLeftNavItem>카드</HeaderTopLeftNavItem>
          <HeaderTopLeftNavItem>혜택</HeaderTopLeftNavItem>
          <HeaderTopLeftNavItem>금융</HeaderTopLeftNavItem>
          <HeaderTopLeftNavItem>컬쳐</HeaderTopLeftNavItem>
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
  padding: 22px 0 15px;
`;

const HeaderTopLeftNavItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 12px;

  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  font-size: ${({ theme }) => theme.FONT_SIZE.BODY_01_MED};
  font-weight: 500;
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
