import { useMemo } from 'react';
import { useRootState } from 'src/modules';
import { filterData } from 'src/util/filterData';
import { useGetContentsListQuery } from './contentsList';

export function useContentsList({ page }: { page: number }) {
  const { pricingOptions } = useRootState(state => state.filter);
  const { isLoading, data, error } = useGetContentsListQuery();

  const filteredData = useMemo(
    () =>
      data
        ? filterData({ pricingOptions, data, page, renderingSize: 12 })
        : data,
    [pricingOptions, data, page],
  );

  return { isLoading, data: filteredData, error };
}
