import { ContentsListItem } from 'src/services/types';

export type FilterDataParams = {
  pricingOptions: string[];
  data: ContentsListItem[];
  page: number;
  renderingSize: number;
  keyword: string;
};

export const filterData = ({
  pricingOptions,
  data,
  page,
  renderingSize,
  keyword,
}: FilterDataParams) => {
  return data
    .filter(({ pricingOption }) =>
      pricingOptions.length > 0
        ? pricingOptions.includes(pricingOption.toString())
        : true,
    )
    .filter(({ creator, title }) =>
      keyword
        ? creator.toLocaleLowerCase().includes(keyword) ||
          title.toLocaleLowerCase().includes(keyword)
        : true,
    )
    .slice(0, page * renderingSize);
};
