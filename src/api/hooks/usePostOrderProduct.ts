import { useMutation } from '@tanstack/react-query';

import { BASE_URL, fetchWithToken } from '../instance';

export type PostOrderProductRequestParams = {
  optionId: number;
  quantity: number;
  points: number;
  message: string;
};

export const getPostOrderProductPath = () => `${BASE_URL}/api/order`;

export const postOrderProduct = async (params: PostOrderProductRequestParams) => {
  const response = await fetchWithToken.post(getPostOrderProductPath(), params);
  return response.data;
};

export const usePostOrderProduct = () => {
  return useMutation({
    mutationFn: postOrderProduct,
  });
};
