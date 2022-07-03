import styled from 'styled-components';

export default function ContentsFilter() {
  return (
    <ContentsFilterBlock>
      <Title>Pricing Options</Title>
      <CheckboxGroup>
        <CheckboxContainer>
          Paid
          <input type="checkbox" />
          <Checkmark />
        </CheckboxContainer>
        <CheckboxContainer>
          Free
          <input type="checkbox" />
          <Checkmark />
        </CheckboxContainer>
        <CheckboxContainer>
          View Only
          <input type="checkbox" />
          <Checkmark />
        </CheckboxContainer>
      </CheckboxGroup>
      <ResetButton>RESET</ResetButton>
    </ContentsFilterBlock>
  );
}

const ContentsFilterBlock = styled.div`
  display: flex;
  align-items: center;
  padding-left: 24px;
  margin-top: 16px;
  background-color: #121215;
  height: 68px;
  position: relative;
`;

const Title = styled.span`
  color: rgb(191, 191, 198);
  font-family: inherit;
  font-size: 1rem;
  line-height: 16px;
  font-weight: 300;
`;

const CheckboxGroup = styled.div`
  display: flex;
  padding-left: 16px;

  label + label {
    margin-left: 16px;
  }
`;

const CheckboxContainer = styled.label`
  display: block;
  position: relative;
  padding-left: 25px;
  cursor: pointer;
  font-size: 1.4rem;
  font-weight: 300;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  input:checked ~ span {
    background-color: rgb(66, 205, 221);
    border: none;
  }

  input:checked ~ span:after {
    display: block;
  }

  span:after {
    left: 5px;
    top: 0px;
    width: 5px;
    height: 10px;
    border: solid #121215;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

const Checkmark = styled.span`
  position: absolute;
  top: -1px;
  left: 0;
  height: 16px;
  width: 16px;
  border-radius: 3px;
  border: 1px solid rgb(150, 150, 159);
  background-color: rgb(71, 71, 78);
  box-sizing: border-box;

  &:after {
    content: '';
    position: absolute;
    display: none;
  }
`;

const ResetButton = styled.button`
  position: absolute;
  right: 24px;
  background: transparent;
  outline: none;
  cursor: pointer;
  color: rgb(255, 255, 255);
  border: none;
  font: inherit;
`;
