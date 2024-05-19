import styled from 'styled-components';

interface EventProps {
  image: string;
  name: string;
  description: string;
  period: string;
  isShowPeriod: boolean;
}

function Event({ image, name, description, period, isShowPeriod }: EventProps) {
  return (
    <EventLayout>
      <EventImg src={image} alt={name} />
      <EventVeiwTitle>
        <EventText>{name}</EventText>
        <EventText>{description}</EventText>
      </EventVeiwTitle>
      {isShowPeriod && <EventPeriod>{period}</EventPeriod>}
    </EventLayout>
  );
}

const EventLayout = styled.div`
  width: 21.4rem;

  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-1rem);
  }
`;

const EventImg = styled.img`
  margin-bottom: 1.2rem;
  border-radius: 12px;
`;

const EventVeiwTitle = styled.div`
  line-height: 1.7rem;
`;

const EventText = styled.p`
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  color: ${({ theme }) => theme.COLORS.HD_BLK};
  font-size: ${({ theme }) => theme.FONT_SIZE.BODY_03_MED_17};
  font-weight: 700;
  letter-spacing: -0.1rem;
`;

const EventPeriod = styled.p`
  margin-top: 0.6rem;

  font-family: ${({ theme }) => theme.FONTS.BOLD};
  color: ${({ theme }) => theme.COLORS.HD_GRAY_02};
  font-size: ${({ theme }) => theme.FONT_SIZE.BODY_03_BOLD};
`;
export default Event;
