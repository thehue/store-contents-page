import styled from 'styled-components';
import Header from 'src/components/contents/Header';
import SearchBar from 'src/components/contents/SearchBar';
import ContentsSection from 'src/components/contents/ContentsSection';

export default function ContentsPage() {
  return (
    <>
      <Header />
      <Main>
        <SearchBar />
        <ContentsSection />
      </Main>
    </>
  );
}

const Main = styled.main`
  padding: 40px;
  transition: all 200ms ease-in-out;
`;
