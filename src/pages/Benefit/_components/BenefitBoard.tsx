import styled from 'styled-components';

import BenefitBoardBlue from '@/assets/svg/benefit_banner_01.svg?react';
import BenefitBoardGrey from '@/assets/svg/benefit_board_grey.svg?react';
import BenefitBoardOrange from '@/assets/svg/benefit_board_orange.svg?react';

function BenefitBoard() {
  return (
    <BenefitBoardSection>
      <BenefitBoardBlue />
      <BenefitBoardOrange />
      <BenefitBoardGrey />
    </BenefitBoardSection>
  );
}

export default BenefitBoard;
const BenefitBoardSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  align-items: center;

  width: 91.6rem;
  margin-top: 5.85rem;
`;
