import styled from 'styled-components';
import Item from './Item';
import ListSkeleton from './ListSkeleton';
import { useContentsList } from 'src/services/useContentsList';
import { useRootState } from 'src/modules';
import { filterActions } from 'src/modules/filter';
import { useCallback, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

export default function ContentsList() {
  const dispatch = useDispatch();
  const { data, error, isLoading, totalCount } = useContentsList();
  const page = useRootState(state => state.filter.page);
  const { increasePage } = filterActions;

  if (error) {
    return <ErrorText>오류가 발생했습니다 :(</ErrorText>;
  }
  const fetchMoreTrigger = useRef<HTMLDivElement>(null);

  const onIntersection = useCallback(
    ([{ isIntersecting }]: IntersectionObserverEntry[]) => {
      if (isIntersecting) {
        dispatch(increasePage());
      }
    },
    [],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersection);
    if (fetchMoreTrigger.current) observer.observe(fetchMoreTrigger.current);

    // return () => {
    //   const { current: fetchMoreTriggerElement } = fetchMoreTrigger;
    //   fetchMoreTriggerElement && observer.unobserve(fetchMoreTriggerElement);
    // };
  }, [onIntersection]);

  return (
    <ItemList>
      {data?.map(({ id, imagePath, title, creator, price, pricingOption }) => (
        <Item
          key={id}
          imagePath={imagePath}
          title={title}
          creator={creator}
          price={price}
          pricingOption={pricingOption}
        />
      ))}
      {isLoading && <ListSkeleton />}
      <div ref={fetchMoreTrigger}></div>
    </ItemList>
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
