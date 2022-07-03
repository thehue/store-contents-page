import ContentsFilter from 'src/components/contents/ContentsFilter';
import ContentsList from 'src/components/contents/ContentsList';

export default function ContentsPage() {
  return (
    <div>
      콘텐츠 페이지 입니다.
      <ContentsFilter />
      <ContentsList />
    </div>
  );
}
