import { useEffect, useState } from "react";
import MovieSubtitleCard from "../../components/MovieSubtitleCard/MovieSubtitleCard";
import "./Bookmark.css";
import PageTitle from "../../components/PageTitle/PageTitle";

function Bookmark() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getBookMarkedSubtitles() {
      const response = await fetch(`http://localhost:3001/bookmarks`);
      const responseJson = await response.json();
      setData(responseJson);
    }
    getBookMarkedSubtitles();
  }, []);

  return (
    <>
      <PageTitle title="Bookmarks"></PageTitle>
      <div className="bookmarkWrapper">
        {data.map((movieSubtitle) => {
          return <MovieSubtitleCard key={movieSubtitle.id} movieSubtitle={movieSubtitle} isDeleteEnabled={false} />;
        })}
      </div>
    </>
  );
}

export default Bookmark;
