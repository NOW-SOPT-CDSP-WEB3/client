import { isAxiosError } from 'axios';

import instance from '@/api/axios/instance';

const AUTH_URL = {
  getEventsUrl: '/api/events',
};

const MESSAGES = {
  UNKNOWN_ERROR: '알수없는 오류가 발생했습니다. 다시 시도해주세요.',
};

interface EventData {
  id: number;
  image: string;
  name: string;
  description: string;
  period: string;
}

export const axiosEventsData = async (searchContent = ''): Promise<EventData[]> => {
  try {
    const response = await instance.get(AUTH_URL.getEventsUrl, {
      params: {
        content: searchContent,
      },
    });
    return response.data.data.events;
  } catch (error) {
    if (isAxiosError(error)) throw error;
    else throw new Error(MESSAGES.UNKNOWN_ERROR);
  }
};
