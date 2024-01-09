import fetchGames from "../api/fetchGames";
import { useQuery } from "react-query";
import Platforms from "./Platforms";

function Home() {
  const { isLoading, error, data } = useQuery({
    queryKey: "All-games",
    queryFn: fetchGames,
  });
  // console.log(data?.results[0].platforms);
  console.log(isLoading);
  return (
    <div>
      {!isLoading && <Platforms platforms={data?.results[5].platforms} />}
    </div>
  );
}

export default Home;
