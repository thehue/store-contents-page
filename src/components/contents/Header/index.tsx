import styled from 'styled-components';

export default function Header() {
  return (
    <HeaderBlock>
      <H1 title="CONNECT">
        <LogoLink href="/" />
      </H1>
    </HeaderBlock>
  );
}

const HeaderBlock = styled.header`
  z-index: 999;
  background-color: #000000;
  height: 64px;
  width: 100%;
  position: sticky;
  top: 0;
  padding-left: 24px;
`;

const H1 = styled.h1`
  display: flex;
  align-items: center;
  height: 100%;
`;

const LogoLink = styled.a`
  display: inline-block;
  width: 74px;
  height: 16px;
  background-image: url(https://files-web.clo-set.com/web/connect/_next/static/images/logo-1341450d9fa4ae83a8550eaef4d215a2.svg);
`;
