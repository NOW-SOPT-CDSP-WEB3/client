import styled from 'styled-components';

import TitleIcon from '@/assets/svg/benefit_title_link_ic_next.svg?react';

function BenefitTitle() {
  return (
    <BenefitTitleSection>
      <BenefitTitleHead>
        생활 속 특별한 혜택 <br /> 더 풍성한 현대카드 혜택을 확인하세요
      </BenefitTitleHead>
      <BenefitTitleLinkBox>
        <BenefitTitleLinkParagraph>로그인 후 혜택 확인하기</BenefitTitleLinkParagraph>
        <TitleIcon />
      </BenefitTitleLinkBox>
    </BenefitTitleSection>
  );
}

export default BenefitTitle;

const BenefitTitleSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BenefitTitleHead = styled.h1`
  margin-top: 4.4rem;

  color: ${({ theme }) => theme.COLORS.HD_BLK};
  font-size: ${({ theme }) => theme.FONT_SIZE.HEAD_02};
  text-align: center;
  line-height: normal;
`;

const BenefitTitleLinkBox = styled.div`
  display: flex;
  gap: 0.4rem;
  align-items: center;

  margin-top: 2.25rem;
`;

const BenefitTitleLinkParagraph = styled.p`
  color: ${({ theme }) => theme.COLORS.HD_BLUE_02};
  font-size: ${({ theme }) => theme.FONT_SIZE.BODY_01_BOLD};
  line-height: normal;
`;
