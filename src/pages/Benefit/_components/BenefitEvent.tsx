import styled from 'styled-components';

function BenefitEvent() {
  return (
    <CurrentEvenSection>
      <CurrentEventTitle>진행중인 이벤트</CurrentEventTitle>
      <CurrentEventBox>성희 컴포넌트 들어갈 자리</CurrentEventBox>
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
`;

const CurrentEventBox = styled.div`
  height: 91rem;
  margin-top: 2rem;

  background-color: aquamarine;
`;
