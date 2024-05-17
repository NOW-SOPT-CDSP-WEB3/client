import styled from 'styled-components';

import WarningIcon from '@/assets/svg/benefit_warning.svg?react';

function BenefitInfo() {
  return (
    <InfoSection>
      <WarningIcon />
    </InfoSection>
  );
}

export default BenefitInfo;

const InfoSection = styled.section`
  margin: 10.5rem 0 12rem;
`;
