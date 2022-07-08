import { useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';
import debounce from 'lodash/debounce';
import { useDispatch } from 'react-redux';
import { filterActions } from 'src/modules/filter';
import { useRootState } from 'src/modules';
import { useGetContentsListQuery } from 'src/services/contentsList';
import { filterData } from 'src/util/filterData';
import Item from './Item';
import ListSkeleton from './ListSkeleton';

const INTERSECTION_THRESHOLD = 5;
const LOAD_DELAY_MS = 500;
const NUM_PER_PAGE = 12;

export default function ContentsList() {
  const dispatch = useDispatch();
  const page = useRootState(({ filter }) => filter.page);
  const pricingOptions = useRootState(({ filter }) => filter.pricingOptions);
  const { data, error, isLoading, totalCount } = useGetContentsListQuery(
    undefined,
    {
      refetchOnMountOrArgChange: true,
      selectFromResult: ({ data, error, isLoading }) => ({
        totalCount: data?.length,
        data: data
          ? filterData({
              pricingOptions,
              data,
              page,
              renderingSize: NUM_PER_PAGE,
            })
          : data,
        error,
        isLoading,
      }),
    },
  );

  const { increasePage } = filterActions;

  if (error) {
    return <ErrorText>오류가 발생했습니다 :(</ErrorText>;
  }
  const triggerRef = useRef<HTMLDivElement>(null);

  const _handleEntry = (entry: IntersectionObserverEntry) => {
    const boundingRect = entry.boundingClientRect;
    const intersectionRect = entry.intersectionRect;

    if (
      !isLoading &&
      totalCount &&
      entry.isIntersecting &&
      intersectionRect.bottom - boundingRect.bottom <= INTERSECTION_THRESHOLD
    ) {
      if (page < Math.ceil(totalCount / NUM_PER_PAGE)) {
        dispatch(increasePage());
      }
    }
  };
  const handleEntry = debounce(_handleEntry, LOAD_DELAY_MS);

  const onIntersect = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      handleEntry(entries[0]);
    },
    [handleEntry],
  );

  useEffect(() => {
    if (triggerRef.current) {
      const container = triggerRef.current;
      const observer = new IntersectionObserver(onIntersect);

      observer.observe(container);

      return () => {
        observer.disconnect();
      };
    }
  }, [triggerRef, onIntersect]);

  return (
    <>
      <ItemList>
        {data?.map(
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
        {isLoading && <ListSkeleton />}
      </ItemList>
      <div ref={triggerRef}></div>
    </>
  );
}

export const ItemList = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin: 0 -12px;
  margin-top: 60px;
`;

const ErrorText = styled.p`
  font-size: 2rem;
  text-align: center;
  margin-top: 20%;
`;
