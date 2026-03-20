import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useGitHubRepos = () => {
  const { data, error } = useSWR('/api/v1/github/repos', fetcher);
  return {
    repos: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export const usePortfolioData = () => {
  const { data, error } = useSWR('/api/v1/portfolio', fetcher);
  return {
    portfolio: data,
    isLoading: !error && !data,
    isError: error,
  };
};
