import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { filterActions } from 'src/modules/filter';
import ContentsFilter from './ContentsFilter';
import ContentsList from './ContentsList';

export default function ContentsSection() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { setPricingOptions } = filterActions;

  useEffect(() => {
    const searchParam = new URLSearchParams(location.search).get(
      'pricingOptions',
    );
    const pricingOptions = searchParam ? searchParam.split(',') : [];

    dispatch(setPricingOptions(pricingOptions));
  }, [location.search]);

  return (
    <>
      <ContentsFilter />
      <ContentsList />
    </>
  );
}
