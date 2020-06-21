import { useEffect, useReducer, useState } from 'react';

const reposFetchReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return { ...state, isFetching: true, isError: false };

    case 'FETCH_SUCCESS':
      return {
        ...state,
        isFetching: false,
        isError: false,
        repos: action.payload,
      };

    case 'FETCH_FAILURE':
      return { ...state, isFetching: false, isError: true };

    default:
      throw new Error();
  }
};

const useFetchRepos = (codeLanguageQuery, timePeriodQuery) => {
  const initialState = {
    isFetching: false,
    isError: false,
    repos: [],
  };
  const [state, dispatch] = useReducer(reposFetchReducer, initialState);
  const [reload, setReload] = useState(0);

  const retry = () => {
    setReload(reload + 1);
  };

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT' });
      try {
        const response = await fetch(
          `https://ghapi.huchen.dev/repositories?language=${codeLanguageQuery}&since=${timePeriodQuery}`
        );

        let repos = await response.json();
        repos = repos.map((repo) => ({
          author: repo.author,
          name: repo.name,
          avatar: repo.avatar,
          url: repo.url,
          description: repo.description,
          stars: repo.stars,
          forks: repo.forks,
          language: repo.language,
          languageColor: repo.languageColor,
        }));

        dispatch({ type: 'FETCH_SUCCESS', payload: repos });
      } catch (e) {
        if (abortController.signal.aborted) return;
        dispatch({ type: 'FETCH_FAILURE' });
      }
    };

    fetchData();
    return () => abortController.abort();
  }, [codeLanguageQuery, timePeriodQuery, reload]);

  return [state, retry];
};

export default useFetchRepos;
