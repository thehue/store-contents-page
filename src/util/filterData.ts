import { ContentsListItem } from 'src/services/types';

type FilterDataParams = {
  pricingOptions: string[];
  data: ContentsListItem[];
  page: number;
  renderingSize: number;
};

export const filterData = ({
  pricingOptions,
  data,
  page,
  renderingSize,
}: FilterDataParams) => {
  return data
    .filter(({ pricingOption }) =>
      pricingOptions.length > 0
        ? pricingOptions.includes(pricingOption.toString())
        : true,
    )
    .slice(0, (page + 1) * renderingSize);
};
