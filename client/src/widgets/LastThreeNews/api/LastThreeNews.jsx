import { $host } from "../../../shared/api/hostAPI";

export const fetchLastThreeNews = async (limit, currentPage) => {
  const { data } = await $host.get(
    `api/news?limit=${limit}&page=${currentPage}`
  );
  return data;
};
