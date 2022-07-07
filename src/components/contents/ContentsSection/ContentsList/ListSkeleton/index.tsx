import styled from 'styled-components';
import shortid from 'shortid';
import { Inner, ItemWrapper } from '../Item';

export default function ListSkeleton() {
  return (
    <>
      {new Array(12).fill(0).map(() => (
        <ItemWrapper key={shortid.generate()}>
          <Inner>
            <ThumbnailSkeleton />
            <ItemNameSkeleton />
            <ItemOthersInfoSkeleton />
          </Inner>
        </ItemWrapper>
      ))}
    </>
  );
}

const ThumbnailSkeleton = styled.div`
  background: #121215;
  padding-top: 133%;
  border-radius: 3px;
`;

const ItemNameSkeleton = styled.div`
  margin-bottom: 2px;
  height: 16px;
  width: 50%;
  background: #121215;
  margin-top: 8px;
`;

const ItemOthersInfoSkeleton = styled.div`
  width: 60%;
  height: 18px;
  background: #121215;
`;
