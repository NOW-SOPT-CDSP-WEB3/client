import styled from 'styled-components';

import BenefitBoard from '@/pages/Benefit/_components/BenefitBoard';
import BenefitEvent from '@/pages/Benefit/_components/BenefitEvent';
import BenefitFriendShip from '@/pages/Benefit/_components/BenefitFriendShip';
import BenefitInfo from '@/pages/Benefit/_components/BenefitInfo';
import BenefitTitle from '@/pages/Benefit/_components/BenefitTitle';

function Benefit() {
  return (
    <BenefitLayout>
      <BenefitTitle />
      <BenefitBoard />
      <BenefitFriendShip />
      <BenefitEvent />
      <BenefitInfo />
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
