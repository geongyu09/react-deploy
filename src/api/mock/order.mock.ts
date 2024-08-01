import { rest } from 'msw';

import { getPostOrderProductPath } from '../hooks/usePostOrderProduct';

export const orderMockHandler = [
  rest.post(getPostOrderProductPath(), (_, res, ctx) => {
    return res(ctx.json(ORDER_MOCK_DATA));
  }),
];

const ORDER_MOCK_DATA = {
  id: 1,
  optionId: 1,
  quantity: 2,
  orderDateTime: '2024-07-30T14:43:02',
  message: '주문 API 테스트',
};
