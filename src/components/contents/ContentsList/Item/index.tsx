import { PricingOption } from 'src/services/types';
import styled from 'styled-components';

type ItemProps = {
  imagePath: string;
  title: string;
  creator: string;
  price: number;
  pricingOption: PricingOption;
};

export default function Item({
  imagePath,
  title,
  creator,
  price,
  pricingOption,
}: ItemProps) {
  const formatPricingOption = {
    0: `$${price.toLocaleString()}`,
    1: 'FREE',
    2: 'View Only',
  };

  return (
    <ItemWrapper>
      <Inner>
        <Thumbnail imagePath={imagePath} />
        <ItemInfoWrapper>
          <ItemName>
            <Text>{title}</Text>
          </ItemName>
          <ItemCreatorName>
            <Text>{creator}</Text>
          </ItemCreatorName>
          <Text>{formatPricingOption[pricingOption]}</Text>
        </ItemInfoWrapper>
      </Inner>
    </ItemWrapper>
  );
}

export const ItemWrapper = styled.div`
  width: 25%;
  padding-right: 12px;
  padding-left: 12px;
  box-sizing: border-box;

  @media screen and (max-width: 1200px) {
    width: 33.33%;
  }

  @media screen and (max-width: 768px) {
    width: 50%;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const Inner = styled.div`
  padding-bottom: 40px;
`;

const Thumbnail = styled.div<{ imagePath: string }>`
  position: relative;
  padding-top: 133%;
  border-radius: 3px;
  background-color: white;
  background-image: url(${({ imagePath }) => imagePath});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  cursor: pointer;
`;

const ItemInfoWrapper = styled.div`
  margin-top: 8px;
`;

const Text = styled.span`
  font-size: 1.2rem;
  line-height: inherit;
  font-weight: inherit;
`;

const ItemName = styled.div`
  margin-bottom: 2px;
  word-break: break-all;
  line-height: 16px;
  font-weight: 600;
`;

const ItemCreatorName = styled.div`
  display: inline-block;
  line-height: 18px;
  font-weight: 300;

  &:after {
    content: '|';
    padding: 0px 4px;
  }
`;
