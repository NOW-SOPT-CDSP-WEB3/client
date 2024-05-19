import { isAxiosError } from 'axios';

import instance from '@/api/axios/instance';

const AUTH_URL = {
  LOGIN: '/api/auth/login',
};

const MESSAGES = {
  LOGIN: {
    SUCCESS: '로그인에 성공하였습니다.',
    ERROR: '로그인에 실패했습니다. 아이디 또는 비밀번호를 확인해주세요.',
  },
  UNKNOWN_ERROR: '알수없는 오류가 발생했습니다. 다시 시도해주세요.',
};

interface IloginData {
  email: string;
  password: string;
}

export const userLogin = async (loginData: IloginData) => {
  try {
    await instance.post(AUTH_URL.LOGIN, loginData);
    alert(MESSAGES.LOGIN.SUCCESS);
  } catch (e) {
    if (isAxiosError(e)) alert(MESSAGES.LOGIN.ERROR);
    else alert(MESSAGES.UNKNOWN_ERROR);
  }
};
