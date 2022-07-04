import { useDispatch, useSelector } from 'react-redux';
import { contentsFilterActions } from 'src/modules/contentsFilter';
import { RootState } from 'src/modules';
import { PricingOption } from 'src/constants';
import ContentsFilterView from './ContentsFilterView';

export default function ContentsFilter() {
  const dispatch = useDispatch();
  const { setPricingOptions, initialize } = contentsFilterActions;
  const pricingOptions = useSelector(
    ({ contentsFilter }: RootState) => contentsFilter.pricingOptions,
  );

  const onCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const values = [...pricingOptions];
    const index = pricingOptions.indexOf(value);
    if (index < 0) {
      values.push(value);
    } else {
      values.splice(index, 1);
    }
    dispatch(setPricingOptions(values));
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
