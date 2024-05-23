import { isAxiosError } from 'axios';

import { EventData } from '@/api/axios/Home/HomeInterface';
import instance from '@/api/axios/instance';

const AUTH_URL = {
  GET_EVENT_URL: '/api/events',
};

const MESSAGES = {
  UNKNOWN_ERROR: '알수없는 오류가 발생했습니다. 다시 시도해주세요.',
};

export const getEventsData = async (searchContent = ''): Promise<EventData[]> => {
  try {
    const response = await instance.get(AUTH_URL.GET_EVENT_URL, {
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
