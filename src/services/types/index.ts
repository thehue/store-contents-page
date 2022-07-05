import { PricingOption } from 'src/constants';

export type PricingOption = typeof PricingOption[keyof typeof PricingOption];

export type ContentsListItem = {
  id: string;
  creator: string;
  title: string;
  pricingOption: PricingOption;
  imagePath: string;
  price: number;
};
