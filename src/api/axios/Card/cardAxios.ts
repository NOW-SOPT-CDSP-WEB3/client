import { isAxiosError } from 'axios';

import instance from '@/api/axios/instance';

const AUTH_URL = {
  POST_BOOKMARK_URL: '/api/bookmarks',
  GET_ALL_CARD_URL: '/api/cards',
  GET_FILTERING_CARD_URL: '/api/cards/filter',
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
    console.log('북마크 API 응답:', response.data);
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) throw error;
    else alert(MESSAGES.UNKNOWN_ERROR);
  }
};

export const getAllCard = async () => {
  try {
    const response = await instance.get(AUTH_URL.GET_ALL_CARD_URL);
    console.log('전체 카드 API 응답:', response.data);
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) throw error;
    else alert(MESSAGES.UNKNOWN_ERROR);
  }
};

export const getFilteringCard = async () => {
  try {
    const response = await instance.get(AUTH_URL.GET_FILTERING_CARD_URL);
    console.log('카드 필터링 API 응답:', response);
    return response;
  } catch (error) {
    if (isAxiosError(error)) throw error;
    else alert(MESSAGES.UNKNOWN_ERROR);
  }
};
