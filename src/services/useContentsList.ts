import { useEffect, useMemo, useState } from 'react';
import { useRootState } from 'src/modules';
import { filterData } from 'src/util/filterData';
import { useGetContentsListQuery } from './contentsList';

export function useContentsList() {
  const { pricingOptions, page } = useRootState(state => state.filter);
  const { isLoading, data, error } = useGetContentsListQuery();
  const [contentsList, setContentsList] = useState(data || []);

  useEffect(() => {
    if (data) {
      const filteredData = filterData({
        pricingOptions,
        data,
        page,
        renderingSize: 12,
      });
      setContentsList(() => filteredData);
    }
  }, [pricingOptions, data, page]);

  return {
    isLoading,
    data: contentsList,
    error,
    totalCount: data ? data.length : 0,
  };
}
