import styled from 'styled-components';

import Event from '@/components/event/Event';

import { useGetEvents } from '@/api/axios/Home/homeAxios';

interface EventBoxProps {
  isShowPeriod: boolean;
  searchWord?: string;
}

function EventBox({ isShowPeriod, searchWord }: EventBoxProps) {
  const { data: eventData, error, isError } = useGetEvents(searchWord);

  if (isError) {
    console.error(error);
  }

  return (
    <EventBoxLayout>
      {eventData?.map(({ id, image, name, description, period }) => (
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
