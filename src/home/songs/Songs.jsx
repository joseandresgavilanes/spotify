import Loader from "../../loader/Loader";
import { useGetTopChartsQuery } from "../../redux/services/shazamCore";
import Song from "./song/Song";
import "./Songs.scss";
const Songs = () => {
  const { data, isFetching, error } = useGetTopChartsQuery();

  if (isFetching) return <Loader />;
  if (error) return "Error";

  return (
    <div className="songs_main_container">
      <ul className="songs_container">
        {data?.map((item) => (
          <Song item={item} key={item.key} />
        ))}
      </ul>
    </div>
  );
};

export default Songs;
