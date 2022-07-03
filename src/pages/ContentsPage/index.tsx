import Header from 'src/components/contents/Header';
import ContentsFilter from 'src/components/contents/ContentsFilter';
import ContentsList from 'src/components/contents/ContentsList';

export default function ContentsPage() {
  return (
    <div>
      <Header />
      <ContentsFilter />
      <ContentsList />
    </div>
  );
}
