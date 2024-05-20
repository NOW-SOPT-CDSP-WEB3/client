import { useEffect, useState } from 'react';
import styled from 'styled-components';

import Event from '@/components/event/Event';

import { axiosEventsData } from '@/api/axios/Home/homeAxios';

interface EventBoxProps {
  isShowPeriod: boolean;
}

interface EventData {
  id: number;
  image: string;
  name: string;
  description: string;
  period: string;
}

function EventBox({ isShowPeriod }: EventBoxProps) {
  const [eventData, setEventData] = useState<EventData[]>([]);

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const eventData = await axiosEventsData();
        setEventData(eventData);
        console.log(eventData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEventData();
  }, []);

  return (
    <EventBoxLayout>
      {eventData.map(({ id, image, name, description, period }) => (
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
