import { AxiosError } from 'axios';

import instance from '@/api/axios/instance';

export const getCultureData = async () => {
  try {
    const response = await instance.get(`/api/cultures`);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      const response = error.response;
      return response;
    }
  }
};
