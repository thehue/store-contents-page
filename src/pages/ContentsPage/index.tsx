import styled from 'styled-components';
import Header from 'src/components/contents/Header';
import ContentsFilter from 'src/components/contents/ContentsFilter';
import ContentsList from 'src/components/contents/ContentsList';
import SearchBar from 'src/components/contents/SearchBar';

export default function ContentsPage() {
  return (
    <>
      <Header />
      <Main>
        <SearchBar />
        <ContentsFilter />
        <ContentsList />
      </Main>
    </>
  );
}

const Main = styled.main`
  padding: 40px;
  transition: all 200ms ease-in-out;
`;
