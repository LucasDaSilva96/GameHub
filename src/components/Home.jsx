import fetchGames from "../api/fetchGames";
import { useQuery } from "react-query";
function Home() {
  const { isPending, isError, data, error } = useQuery({
    queryKey: "All-games",
    queryFn: fetchGames,
  });
  console.log(data?.results);
  return <div></div>;
}

export default Home;
