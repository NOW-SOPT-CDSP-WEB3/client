import styled from 'styled-components';

import Event from '@/components/event/Event';
import { EventInfo } from '@/components/type';

interface EventBoxProps {
  isShowPeriod: boolean;
  events: EventInfo[];
}

function EventBox({ isShowPeriod, events }: EventBoxProps) {
  return (
    <EventBoxLayout>
      {events.map(({ id, image, name, description, period }) => (
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
  width: 91rem;
  padding-top: 1.2rem;
  align-items: flex-start;
  align-content: flex-start;
  gap: 3.8rem 1.8rem;
  flex-wrap: wrap;
`;
export default EventBox;
