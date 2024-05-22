import { useMutation } from '@tanstack/react-query';
import { AxiosError, isAxiosError } from 'axios';
import { useAtom } from 'jotai';

import { memberIdAtom } from '@/store/globalStore';

import { userLogin } from '@/api/axios/Auth/authAxios';
import { ILoginResponse, IloginData } from '@/api/axios/Auth/authInterfaces';

const MESSAGES = {
  LOGIN: {
    SUCCESS: '로그인에 성공하였습니다.',
    ERROR: '로그인에 실패했습니다. 아이디 또는 비밀번호를 확인해주세요.',
  },
  UNKNOWN_ERROR: '알수없는 오류가 발생했습니다. 다시 시도해주세요.',
};

export const useUserLogin = () => {
  const [, setMemberId] = useAtom(memberIdAtom);

  const mutation = useMutation<ILoginResponse, AxiosError, IloginData>({
    mutationFn: userLogin,
    onSuccess: (data) => {
      const { userId } = data.data;
      setMemberId(userId);
      alert(MESSAGES.LOGIN.SUCCESS);
    },
    onError: (e) => {
      if (isAxiosError(e)) alert(MESSAGES.LOGIN.ERROR);
      else alert(MESSAGES.UNKNOWN_ERROR);
    },
  });

  return mutation;
};
