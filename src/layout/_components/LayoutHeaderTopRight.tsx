import styled from 'styled-components';

import Divider from '@/assets/svg/Vertical Divider.svg?react';
import SearchIcon from '@/assets/svg/ic_gnb_input_search.svg?react';

import { HEADER_TOP_RIGHT_NAV_ITEMS } from '@/layout/_constants/header';

const INPUT_PLACEHOLDER = '카드, 메뉴, 혜택을 검색해 보세요';

function LayoutHeaderTopRight() {
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
          <HeaderInputBox>
            <SearchIcon />
            <HeaderInput placeholder={INPUT_PLACEHOLDER} />
          </HeaderInputBox>
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
  gap: 0 12px;
  align-items: center;

  padding: 22px 0 15px;
`;

const HeaderTopRightNavItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 24px;

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
  gap: 4px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  width: 183px;
  height: 31px;
  margin: 0 20px 0 15.77px;
  padding: 4px 9px 4px 6px;
  border: 1px solid ${({ theme }) => theme.COLORS.HD_GRAY_01};
  border-radius: 18px;

  background-color: ${({ theme }) => theme.COLORS.HD_WHITE};
`;

const HeaderInput = styled.input`
  width: 100%;
  height: 17px;
  border: 0;

  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  color: ${({ theme }) => theme.COLORS.HD_GRAY_02};
  font-size: ${({ theme }) => theme.FONT_SIZE.BODY_04_MED};
  font-weight: 500;
  line-height: 17px;
  letter-spacing: -0.4px;

  &:focus {
    outline: none;
  }
`;
