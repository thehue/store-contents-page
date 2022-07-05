import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ContentsListItem } from './types';

export const contentsListApi = createApi({
  reducerPath: 'contentsListApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://closet-sample.azurewebsites.net/api/',
  }),
  endpoints: (builder) => ({
    getContentsList: builder.query<ContentsListItem[], void>({
      query: () => 'data',
    }),
  }),
});

export const { useGetContentsListQuery } = contentsListApi;
