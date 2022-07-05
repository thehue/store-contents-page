import { useMemo } from 'react';
import { useRootState } from 'src/modules';
import { useGetContentsListQuery } from './contentsList';

export function useContentsList({ page }: { page: number }) {
  const { pricingOptions } = useRootState((state) => state.filter);
  const { isLoading, data, error } = useGetContentsListQuery();

  const filteredData = useMemo(() => {
    return data
      ?.filter(({ pricingOption }) =>
        pricingOptions.length > 0
          ? pricingOptions.includes(pricingOption.toString())
          : true,
      )
      .slice(page * 12, (page + 1) * 12);
  }, [pricingOptions, data, page]);

  return { isLoading, data: filteredData, error };
}
