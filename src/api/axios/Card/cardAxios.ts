import { isAxiosError } from 'axios';

import instance from '@/api/axios/instance';

const AUTH_URL = {
  POST_BOOKMARK_URL: '/api/bookmarks',
};

const MESSAGES = {
  UNKNOWN_ERROR: '알수없는 오류가 발생했습니다. 다시 시도해주세요.',
};

interface BookmarkData {
  memberId: number;
  cardId: number;
}

export const postBookmark = async (bookmarkData: BookmarkData) => {
  try {
    const response = await instance.post(AUTH_URL.POST_BOOKMARK_URL, bookmarkData);
    console.log('북마크 API 응답:', response);
    return response;
  } catch (error) {
    if (isAxiosError(error)) throw error;
    else alert(MESSAGES.UNKNOWN_ERROR);
  }
};
