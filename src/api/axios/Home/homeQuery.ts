import { useQuery } from '@tanstack/react-query';

import { EventData } from '@/api/axios/Home/HomeInterface';
import { getEventsData } from '@/api/axios/Home/homeAxios';

export const useGetEvents = (searchWord?: string) => {
  const { data, error, isError } = useQuery<EventData[], Error>({
    queryKey: ['events', searchWord],
    queryFn: () => getEventsData(searchWord || ''),
  });

  return { data, error, isError };
};
