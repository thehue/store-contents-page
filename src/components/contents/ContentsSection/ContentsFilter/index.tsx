import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { filterActions } from 'src/modules/filter';
import { RootState } from 'src/modules';
import { PricingOption } from 'src/constants';
import ContentsFilterView from './ContentsFilterView';
import { toggleArray } from 'src/util/toggleArray';

export default function ContentsFilter() {
  const dispatch = useDispatch();
  const { setPricingOptions, initialize, setPage } = filterActions;
  const pricingOptions = useSelector(
    ({ filter }: RootState) => filter.pricingOptions,
  );

  const navigate = useNavigate();

  const onCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const toggledValues = toggleArray(pricingOptions, value) as string[];

    navigateWithPricingOptions(toggledValues);
    dispatch(setPricingOptions(toggledValues));
    dispatch(setPage(0));
  };

  const navigateWithPricingOptions = (pricingOptions: string[]) => {
    const queryString = pricingOptions.join(',');
    const url = `/store${queryString ? `?pricingOptions=${queryString}` : ''}`;
    navigate(url);
  };

  const onClickResetButton = () => {
    dispatch(initialize());
    navigateWithPricingOptions([]);
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
