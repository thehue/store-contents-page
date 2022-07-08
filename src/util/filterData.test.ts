import { ContentsListItem } from 'src/services/types';
import { it, expect, describe } from 'vitest';
import { filterData, FilterDataParams } from './filterData';

describe('filterData()', () => {
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
  ] as ContentsListItem[];

  const defaultInputParam: FilterDataParams = {
    pricingOptions: [],
    data: sampleData,
    page: 1,
    renderingSize: 3,
    keyword: '',
  };

  it('should be filtered by pricing options, if pricing options are provided', () => {
    const inputParam = { ...defaultInputParam, pricingOptions: ['0'] };

    const result = filterData(inputParam);

    expect(result).toStrictEqual([sampleData[0]]);
  });

  it('should be filtered by keyword, if keyword is provided', () => {
    const titleInputParam = { ...defaultInputParam, keyword: 'bag' };
    const creatorInputParam = { ...defaultInputParam, keyword: 'adam' };

    const titleSearchResult = filterData(titleInputParam);
    const creatorSearchResult = filterData(creatorInputParam);

    expect(titleSearchResult).toStrictEqual([sampleData[2]]);
    expect(creatorSearchResult).toStrictEqual([sampleData[0]]);
  });

  it('should be original data, if keyword is not provided', () => {
    const inputParam = { ...defaultInputParam, keyword: '' };

    const result = filterData(inputParam);

    expect(result).toStrictEqual(sampleData);
  });

  it('should be original data, if pricing options are not provided', () => {
    const inputParam = defaultInputParam;

    const result = filterData(inputParam);

    expect(result).toStrictEqual(sampleData);
  });

  it('should be the same size, if renderingSize is given', () => {
    const inputParam = {
      ...defaultInputParam,
      renderingSize: 1,
    };

    const result = filterData(inputParam);

    expect(result).length(1);
  });
});
