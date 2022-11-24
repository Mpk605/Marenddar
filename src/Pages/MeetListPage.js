import { useSearchParams } from 'react-router-dom';

function MeetListPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div>
      {searchParams.get("date")}
    </div>
  );
}

export default MeetListPage;
