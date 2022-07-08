import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterActions } from 'src/modules/filter';
import SearchBarView from './SearchBarView';

export default function SearchBar() {
  const dispatch = useDispatch();

  const { setKeyword } = filterActions;
  const [localKeyword, setLocalKeyword] = useState('');

  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setLocalKeyword(() => event.target.value);
  }, []);

  const searchKeyword = () => {
    dispatch(setKeyword(localKeyword));
  };

  const onEnterKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      searchKeyword();
    }
  };

  const onClickSearchButton = () => {
    searchKeyword();
  };

  const onFormReset = (inputRef: React.RefObject<HTMLInputElement>) => {
    inputRef.current?.focus();
    setLocalKeyword(() => '');
  };

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const props = {
    localKeyword,
    onChange,
    onEnterKey,
    onClickSearchButton,
    onFormReset,
    onFormSubmit,
  };

  return <SearchBarView {...props} />;
}
