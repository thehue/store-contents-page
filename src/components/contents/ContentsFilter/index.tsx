import { useDispatch, useSelector } from 'react-redux';
import { filterActions } from 'src/modules/filter';
import { RootState } from 'src/modules';
import { PricingOption } from 'src/constants';
import ContentsFilterView from './ContentsFilterView';

export default function ContentsFilter() {
  const dispatch = useDispatch();
  const { togglePricingOptions, initialize } = filterActions;
  const pricingOptions = useSelector(
    ({ filter }: RootState) => filter.pricingOptions,
  );

  const onCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    dispatch(togglePricingOptions(value));
  };

  const onClickResetButton = () => {
    dispatch(initialize());
  };

  const { PAID, FREE, VIEW_ONLY } = PricingOption;
  const checkboxAttributes = {
    paid: {
      value: PAID,
      checked: pricingOptions.includes(`${PAID}`),
    },
    free: {
      value: FREE,
      checked: pricingOptions.includes(`${FREE}`),
    },
    viewOnly: {
      value: VIEW_ONLY,
      checked: pricingOptions.includes(`${VIEW_ONLY}`),
    },
  };

  const props = {
    checkboxAttributes,
    onCheckboxChange,
    onClickResetButton,
  };

  return <ContentsFilterView {...props} />;
}
