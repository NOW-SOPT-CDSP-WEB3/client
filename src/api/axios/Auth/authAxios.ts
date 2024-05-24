import { IloginData } from '@/api/axios/Auth/authInterfaces';
import instance from '@/api/axios/instance';

const AUTH_URL = {
  LOGIN: '/api/auth/login',
};

export const userLogin = async (loginData: IloginData) => {
  const { data } = await instance.post(AUTH_URL.LOGIN, loginData);
  return data;
};
