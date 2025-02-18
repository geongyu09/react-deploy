import { useMutation } from '@tanstack/react-query';

import type { UserAccountInput } from '@/types';

import { BASE_URL, fetchInstance } from '../instance';

// 해당 코드 부분 또한.. 코드의 통일성을 위하여 해당 패턴으로 작성하였습니다.

export const getPostUserLoginPath = () => `${BASE_URL}/api/members/login`;

export interface PostUserLoginResponse {
  email: string;
  token: string;
}
export const postUserLogin = async (userInput: UserAccountInput) => {
  const response = await fetchInstance.post<PostUserLoginResponse>(
    getPostUserLoginPath(),
    userInput,
  );

  return response.data;
};

export const usePostUserLogin = () => {
  return useMutation({
    mutationKey: [getPostUserLoginPath()],
    mutationFn: (userInput: UserAccountInput) => postUserLogin(userInput),
  });
};
