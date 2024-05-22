import { AxiosError } from 'axios';

import instance from '@/api/axios/instance';

const API_URL = {
  GET_CULTURE_DATA: `/api/cultures`,
};

export const getCultureData = async () => {
  try {
    const response = await instance.get(API_URL.GET_CULTURE_DATA);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      const response = error.response;
      return response;
    }
  }
};
