import styled from 'styled-components';

import Event from '@/components/event/Event';

import { EVENT_DATA } from '@/constants/eventData';

interface EventBoxProps {
  isShowPeriod: boolean;
}

function EventBox({ isShowPeriod }: EventBoxProps) {
  return (
    <EventBoxLayout>
      {EVENT_DATA.map(({ id, image, name, description, period }) => (
        <Event
          key={id}
          image={image}
          name={name}
          description={description}
          period={period}
          isShowPeriod={isShowPeriod}
        />
      ))}
    </EventBoxLayout>
  );
}

const EventBoxLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3.8rem 1.8rem;
  align-items: flex-start;
  align-content: flex-start;

  width: 91rem;
  padding-top: 1.2rem;
`;
export default EventBox;
