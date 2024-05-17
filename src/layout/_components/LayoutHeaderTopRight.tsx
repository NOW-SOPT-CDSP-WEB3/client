import styled from 'styled-components';

import Divider from '@/assets/svg/Vertical Divider.svg?react';
import SearchIcon from '@/assets/svg/ic_gnb_input_search.svg?react';

import { MAIN_ROUTES } from '@/constants/routes';

import { HEADER_TOP_RIGHT_NAV_ITEMS } from '@/layout/_constants/header';

import LayoutAuthButtons from './LayoutAuthButtons';

interface ILayoutHeaderTopRight {
  pathname: string;
}

const INPUT_PLACEHOLDER = '카드, 메뉴, 혜택을 검색해 보세요';

function LayoutHeaderTopRight({ pathname }: ILayoutHeaderTopRight) {
  return (
    <HeaderTopRightSection>
      <HeaderTopNav>
        <HeaderTopRightNavList>
          {HEADER_TOP_RIGHT_NAV_ITEMS.map((item, index) =>
            item === 'DIVIDER' ? (
              <DividerBox key={`divider-${index}`}>
                <Divider />
              </DividerBox>
            ) : (
              <HeaderTopRightNavItem key={item}>{item}</HeaderTopRightNavItem>
            ),
          )}

          {pathname === MAIN_ROUTES.HOME.path ? (
            <AuthButtonBox>
              <LayoutAuthButtons />
            </AuthButtonBox>
          ) : (
            <HeaderInputBox>
              <SearchIcon />
              <HeaderInput placeholder={INPUT_PLACEHOLDER} />
            </HeaderInputBox>
          )}
        </HeaderTopRightNavList>
      </HeaderTopNav>
    </HeaderTopRightSection>
  );
}

export default LayoutHeaderTopRight;

const HeaderTopRightSection = styled.section`
  display: flex;
`;

const HeaderTopNav = styled.nav`
  display: flex;
`;

const HeaderTopRightNavList = styled.ul`
  display: flex;
  gap: 0 1.2rem;
  align-items: center;

  padding: 2.2rem 0 1.5rem;
`;

const HeaderTopRightNavItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 2.4rem;

  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  color: ${({ theme }) => theme.COLORS.HD_GRAY_01};
  font-size: ${({ theme }) => theme.FONT_SIZE.DETAIL_01_MED};
`;

const DividerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderInputBox = styled.div`
  display: flex;
  gap: 0.4rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  width: 18.3rem;
  height: 3.1rem;
  margin: 0 2rem 0 1.577rem;
  padding: 0.4rem 0.9rem 0.4rem 0.6rem;
  border: 0.1rem solid ${({ theme }) => theme.COLORS.HD_GRAY_01};
  border-radius: 18px;

  background-color: ${({ theme }) => theme.COLORS.HD_WHITE};
`;

const HeaderInput = styled.input`
  width: 100%;
  height: 1.7rem;
  border: 0;

  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  color: ${({ theme }) => theme.COLORS.HD_GRAY_02};
  font-size: ${({ theme }) => theme.FONT_SIZE.BODY_04_MED};
  font-weight: 500;
  line-height: 1.7rem;
  letter-spacing: -0.04rem;

  &:focus {
    outline: none;
  }
`;

const AuthButtonBox = styled.div`
  margin-left: 2.4rem;
`;
