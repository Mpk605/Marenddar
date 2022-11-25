import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { useSearchParams } from 'react-router-dom';

function MeetFormPage() {
  let navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get("date")) {
      let meets = JSON.parse(localStorage.getItem("meets"))
      if (meets === null)
        meets = {}

      if (meets[searchParams.get("date")]) {
        meets[searchParams.get("date")] = [...meets[searchParams.get("date")], {
          'title': searchParams.get("title"),
          'comment': searchParams.get("comment"),
          'date': searchParams.get("date")
        }]
      } else {
        meets[searchParams.get("date")] = [{
          'title': searchParams.get("title"),
          'comment': searchParams.get("comment"),
          'date': searchParams.get("date")
        }]
      }

      localStorage.setItem("meets", JSON.stringify(meets));

      navigate("/");
    }
  }, []);

  return (
    <form >
      <div>
        <label for="title">Title : </label>
        <input type="text" name="title" id="title" required />
      </div>
      <div>
        <label for="comment">Commentaires : </label>
        <input type="text" name="comment" id="comment" required />
      </div>
      <div>
        <label for="date">Date : </label>
        <input type="date" name="date" id="date" required />
      </div>
      <div>
        <input type="submit" value="Prendre rendez-vous" />
      </div>
    </form>
  );
}

export default MeetFormPage;
