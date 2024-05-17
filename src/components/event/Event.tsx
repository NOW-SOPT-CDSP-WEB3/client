import styled from 'styled-components';

import { EventInfo } from '../type';

interface EventProps {
  image: string;
  name: string;
  description: string;
  period: string;
}

function Event({ image, name, description, period }: EventProps) {
  return (
    <EventLayout>
      <EventImg src={image} />
      <EventVeiwTitle>
        <EventName>{name}</EventName>
        <EventDescription>{description}</EventDescription>
      </EventVeiwTitle>
      <EventPeriod>{period}</EventPeriod>
    </EventLayout>
  );
}

const EventLayout = styled.div`
  width: 21.4rem;
`;

const EventImg = styled.img`
  border-radius: 12px;
  margin-bottom: 1.2rem;
`;

const EventVeiwTitle = styled.div`
  line-height: 1.7rem;
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  color: ${({ theme }) => theme.COLORS.HD_BLK};
  font-size: ${({ theme }) => theme.FONT_SIZE.BODY_03_MED_17};
  font-weight: 700;
`;

const EventName = styled.p``;
const EventDescription = styled.p``;
const EventPeriod = styled.p`
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  color: ${({ theme }) => theme.COLORS.HD_GRAY_02};
  font-size: ${({ theme }) => theme.FONT_SIZE.BODY_03_BOLD};
  margin-top: 0.6rem;
`;
export default Event;
