import styled from 'styled-components';

import GoodFriendShipIcon from '@/assets/svg/benefit_goodfriendship.svg?react';
import GoodFriendShipCheckList from '@/assets/svg/checklist.svg?react';
import NextIcon from '@/assets/svg/ic_next.svg?react';

function BenefitFriendShip() {
  return (
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
  );
}

export default BenefitFriendShip;

const GoodFriendShipSection = styled.section``;

const GoodFriendShipIconBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  justify-content: center;
  align-items: center;

  margin-top: 12.3rem;
`;

const GoodFriendShipLinkBox = styled.div`
  display: flex;
  gap: 0.2rem;
  justify-content: center;
  align-items: center;

  margin-top: 2.65rem;
`;

const GoodFriendShipLinkParagraph = styled.p`
  font-size: ${({ theme }) => theme.FONT_SIZE.BODY_01_BOLD};
`;
