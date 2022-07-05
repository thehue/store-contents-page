import styled from 'styled-components';
import Item from './Item';
import ListSkeleton from './ListSkeleton';
import { useContentsList } from 'src/services/useContentsList';

export default function ContentsList() {
  // TODO page redux로 상태 관리
  const { data, error, isLoading } = useContentsList({ page: 0 });

  if (isLoading) {
    return <ListSkeleton />;
  }

  if (error) {
    return <ErrorText>오류가 발생했습니다 :(</ErrorText>;
  }

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
