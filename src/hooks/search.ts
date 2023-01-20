import { useEffect, useMemo } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import { LoaderData } from './root';

// eslint-disable-next-line import/prefer-default-export
export const useSearch = () => {
  const { q } = useLoaderData() as LoaderData;
  const { location } = useNavigation();
  const searching = useMemo(
    () => (location ? new URLSearchParams(location.search).has('q') : false),
    [location]
  );

  useEffect(() => {
    const searchInput = document.getElementById('q');
    if (searchInput) {
      (searchInput as HTMLInputElement).value = q || '';
    }
  }, [q]);

  return { q, searching };
};
