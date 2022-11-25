import { useSearchParams } from 'react-router-dom';


function MeetListPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  let meets = JSON.parse(localStorage.getItem("meets"));

  return (
    <div>
      {
        meets[searchParams.get("date")] ? meets[searchParams.get("date")].map((val) => {
          return (<div>{val.title} – {val.comment} – {val.date}</div>)
        }) : "Aucun rendez vous"
      }
    </div>
  );
}

export default MeetListPage;
