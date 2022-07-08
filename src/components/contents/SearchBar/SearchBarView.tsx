import { useRef } from 'react';
import styled from 'styled-components';

type SearchBarProps = {
  localKeyword: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onEnterKey: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onClickSearchButton: () => void;
  onFormReset: (inputRef: React.RefObject<HTMLInputElement>) => void;
  onFormSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

export default function SearchBarView({
  localKeyword,
  onChange,
  onEnterKey,
  onClickSearchButton,
  onFormReset,
  onFormSubmit,
}: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <SearchBarForm
      onReset={() => {
        onFormReset(inputRef);
      }}
      onSubmit={onFormSubmit}
    >
      <SearchBarInput
        ref={inputRef}
        type="text"
        placeholder="Search for Items"
        onChange={onChange}
        value={localKeyword}
        onKeyDown={onEnterKey}
      />
      <ButtonsWrapper>
        <ResetButton type="reset">
          <span className="blind">reset</span>
          <svg viewBox="0 0 24 24" color="inherit">
            <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zM9.172 7.757c-.391-.39-1.024-.39-1.415 0-.39.39-.39 1.024 0 1.415L10.586 12l-2.829 2.828c-.36.36-.388.928-.083 1.32l.083.095c.39.39 1.024.39 1.415 0L12 13.414l2.828 2.829c.36.36.928.388 1.32.083l.095-.083c.39-.39.39-1.024 0-1.415L13.414 12l2.829-2.828c.36-.36.388-.928.083-1.32l-.083-.095c-.39-.39-1.024-.39-1.415 0L12 10.586z" />
          </svg>
        </ResetButton>
        <SearchButton type="button" onClick={onClickSearchButton}>
          <span className="blind">search</span>
          <svg viewBox="0 0 24 24" color="inherit">
            <path d="M10.77 2c4.825 0 8.771 3.947 8.771 8.77 0 2.022-.688 3.889-1.845 5.376l3.983 3.982c.428.429.428 1.123 0 1.55-.38.381-.971.424-1.399.128l-.152-.127-3.98-3.983c-1.485 1.156-3.35 1.845-5.377 1.845-4.824 0-8.771-3.946-8.771-8.77S5.947 2 10.77 2zm0 2.193c-3.617 0-6.577 2.96-6.577 6.578 0 3.618 2.96 6.578 6.578 6.578 3.637 0 6.578-2.96 6.578-6.578 0-3.618-2.96-6.578-6.578-6.578z" />
          </svg>
        </SearchButton>
      </ButtonsWrapper>
    </SearchBarForm>
  );
}

const SearchBarForm = styled.form`
  display: flex;
  width: 100%;
  height: 76px;
  background-color: #202025;
  box-sizing: border-box;
  position: relative;

  button {
    background: transparent;
    outline: none;
    border: none;
    cursor: pointer;
    box-sizing: border-box;
    line-height: 0;
    box-shadow: none;
    padding: 0;

    svg {
      fill: currentColor;
      color: inherit;
      width: 24px;
      height: 24px;
    }
  }
`;

const SearchBarInput = styled.input`
  align-self: center;
  width: 100%;
  padding: 24px;
  background-color: transparent;
  color: #ffffff;
  outline: none;
  font-size: 1.8rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  transition: border 0.2s ease-in-out;
  border: 1px solid #202025;

  &:focus {
    transition: border 0.2s ease-in-out 0s;
    border: 1px solid rgb(179, 247, 255);
  }

  &:placeholder-shown + div button[type='reset'] {
    opacity: 0;
    pointer-events: none;
  }
`;

const ButtonsWrapper = styled.div`
  position: absolute;
  right: 0;
  margin-right: 24px;
  display: flex;
  align-items: center;
  height: 100%;
`;

const ResetButton = styled.button`
  color: rgb(119, 119, 131);
  margin-right: 24px;

  &:hover {
    color: rgb(255, 255, 255);
  }
`;

const SearchButton = styled.button`
  color: rgb(255, 255, 255);
`;
