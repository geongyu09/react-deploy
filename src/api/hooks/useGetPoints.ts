import { useQuery } from '@tanstack/react-query';

import { BASE_URL, fetchWithToken } from '../instance';

interface PointsData {
  points: number;
}

interface PointsResponseData extends PointsData {}

export const getPointsPath = () => `${BASE_URL}/api/members/points`;

export const getPoints = async () => {
  const response = await fetchWithToken.get<PointsResponseData>(getPointsPath());
  return response.data;
};

export const useGetPoints = () => {
  return useQuery({
    queryKey: [getPointsPath()],
    queryFn: getPoints,
  });
};
