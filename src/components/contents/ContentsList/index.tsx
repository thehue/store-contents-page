import styled from 'styled-components';
import Item from './Item';

export const PricingOption = {
  PAID: 0,
  FREE: 1,
  VIEW_ONLY: 2,
} as const;

export type PricingOption = typeof PricingOption[keyof typeof PricingOption];

const sampleData = [
  {
    id: 'content-001',
    creator: 'Adam',
    title: 'Yellow green coat',
    pricingOption: 0,
    imagePath:
      'https://storageaccountcloseb093.blob.core.windows.net/frontend-recruiting-sample/thumbnails/FE%20Test%20Material/thumbnail_1.jpeg',
    price: 50,
  },
  {
    id: 'content-002',
    creator: 'Benny',
    title: 'Brown Anorak',
    pricingOption: 1,
    imagePath:
      'https://storageaccountcloseb093.blob.core.windows.net/frontend-recruiting-sample/thumbnails/FE%20Test%20Material/thumbnail_2.png',
    price: 30,
  },
  {
    id: 'content-003',
    creator: 'Catlin',
    title: 'Block shape mini bag',
    pricingOption: 2,
    imagePath:
      'https://storageaccountcloseb093.blob.core.windows.net/frontend-recruiting-sample/thumbnails/FE%20Test%20Material/thumbnail_3.jpeg',
    price: 15,
  },
  {
    id: 'content-004',
    creator: 'Dan',
    title: 'Tartan mini dress',
    pricingOption: 1,
    imagePath:
      'https://storageaccountcloseb093.blob.core.windows.net/frontend-recruiting-sample/thumbnails/FE%20Test%20Material/thumbnail_4.png',
    price: 300,
  },
  {
    id: 'content-005',
    creator: 'Emily',
    title: 'Pink training suit',
    pricingOption: 2,
    imagePath:
      'https://storageaccountcloseb093.blob.core.windows.net/frontend-recruiting-sample/thumbnails/FE%20Test%20Material/thumbnail_5.png',
    price: 200.5,
  },
] as {
  id: string;
  creator: string;
  title: string;
  pricingOption: PricingOption;
  imagePath: string;
  price: number;
}[];

export default function ContentsList() {
  return (
    <ItemList>
      {sampleData.map(
        ({ id, imagePath, title, creator, price, pricingOption }) => (
          <Item
            key={id}
            imagePath={imagePath}
            title={title}
            creator={creator}
            price={price}
            pricingOption={pricingOption}
          />
        ),
      )}
    </ItemList>
  );
}

const ItemList = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin: 0 -12px;
  margin-top: 60px;
`;
