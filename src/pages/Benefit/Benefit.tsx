import styled from 'styled-components';

import BenefitBoardBlue from '@/assets/svg/benefit_banner_01.svg?react';
import BenefitBoardGrey from '@/assets/svg/benefit_board_grey.svg?react';
import BenefitBoardOrange from '@/assets/svg/benefit_board_orange.svg?react';
import GoodFriendShipIcon from '@/assets/svg/benefit_goodfriendship.svg?react';
import TitleIcon from '@/assets/svg/benefit_title_link_ic_next.svg?react';
import WarningIcon from '@/assets/svg/benefit_warning.svg?react';
import GoodFriendShipCheckList from '@/assets/svg/checklist.svg?react';
import NextIcon from '@/assets/svg/ic_next.svg?react';

function Benefit() {
  return (
    <BenefitLayout>
      <BenefitTitle>
        생활 속 특별한 혜택 <br /> 더 풍성한 현대카드 혜택을 확인하세요
      </BenefitTitle>
      <BenefitTitleLinkBox>
        <BenefitTitleLinkParagraph>로그인 후 혜택 확인하기</BenefitTitleLinkParagraph>
        <TitleIcon />
      </BenefitTitleLinkBox>
      <BenefitBoardSection>
        <BenefitBoardBlue />
        <BenefitBoardOrange />
        <BenefitBoardGrey />
      </BenefitBoardSection>
      <GoodFriendShipSection>
        <GoodFriendShipIconBox>
          <GoodFriendShipIcon />
          <GoodFriendShipCheckList />
        </GoodFriendShipIconBox>
        <GoodFriendShipLinkBox>
          <GoodFriendShipLinkParagraph>
            GOOD FRIENDSHIP 대상 여부를 확인해 보세요
          </GoodFriendShipLinkParagraph>
          <NextIcon />
        </GoodFriendShipLinkBox>
      </GoodFriendShipSection>
      <CurrentEvenSection>
        <CurrentEventTitle>진행중인 이벤트</CurrentEventTitle>
        <CurrentEventBox>성희 컴포넌트 들어갈 자리</CurrentEventBox>
      </CurrentEvenSection>
      <InfoSection>
        <WarningIcon />
      </InfoSection>
    </BenefitLayout>
  );
}

export default Benefit;

const BenefitLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.COLORS.HD_BLK};
`;

const BenefitTitle = styled.h1`
  font-size: ${({ theme }) => theme.FONT_SIZE.HEAD_02};
  color: ${({ theme }) => theme.COLORS.HD_BLK};
  line-height: normal;
  text-align: center;
  margin-top: 4.4rem;
`;

const BenefitTitleLinkBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-top: 2.25rem;
`;

const BenefitTitleLinkParagraph = styled.p`
  font-size: ${({ theme }) => theme.FONT_SIZE.BODY_01_BOLD};
  color: ${({ theme }) => theme.COLORS.HD_BLUE_02};
  line-height: normal;
`;

const BenefitBoardSection = styled.section`
  display: flex;
  width: 91.6rem;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 5.85rem;
`;

const GoodFriendShipSection = styled.section``;

const GoodFriendShipIconBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 12.3rem;
  gap: 2.4rem;
`;

const GoodFriendShipLinkBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
  margin-top: 2.65rem;
`;

const GoodFriendShipLinkParagraph = styled.p`
  font-size: ${({ theme }) => theme.FONT_SIZE.BODY_01_BOLD};
`;

const CurrentEvenSection = styled.div`
  margin-top: 10.45rem;
  width: 91rem;
`;

const CurrentEventTitle = styled.h2`
  font-size: ${({ theme }) => theme.FONT_SIZE.HEAD_03};
`;

const CurrentEventBox = styled.div`
  margin-top: 2rem;
  height: 91rem;
  background-color: aquamarine;
`;

const InfoSection = styled.section`
  margin: 10.5rem 0 12rem 0;
`;
