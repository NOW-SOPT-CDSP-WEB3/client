import styled from 'styled-components';

import EventBox from '@/components/event/EventBox';

function BenefitEvent() {
  return (
    <CurrentEvenSection>
      <CurrentEventTitle>진행중인 이벤트</CurrentEventTitle>
      <EventBox isShowPeriod={true} />
    </CurrentEvenSection>
  );
}

export default BenefitEvent;

const CurrentEvenSection = styled.div`
  width: 91rem;
  margin-top: 10.45rem;
`;

const CurrentEventTitle = styled.h2`
  font-size: ${({ theme }) => theme.FONT_SIZE.HEAD_03};
  margin-bottom: 2rem;
`;
