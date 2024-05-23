import { useQuery } from '@tanstack/react-query';

import { getEventsData } from '@/api/axios/Home/homeAxios';
import { EventData } from '@/api/axios/Home/homeInterface';

export const useGetEvents = (searchWord?: string) => {
  const { data, error, isError } = useQuery<EventData[], Error>({
    queryKey: ['events', searchWord],
    queryFn: () => getEventsData(searchWord || ''),
  });

  return { data, error, isError };
};
