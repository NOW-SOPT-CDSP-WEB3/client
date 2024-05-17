import styled from 'styled-components';

import Event from '@/components/event/Event';

import { EVENT_DATA } from '@/constants/eventData';

function EventBox() {
  return (
    <EventBoxLayout>
      {EVENT_DATA.map(({ id, image, name, description, period }) => (
        <Event key={id} image={image} name={name} description={description} period={period} />
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
