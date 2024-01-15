import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";
import loadApiKey from "./api/loadApiKey";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import GameDetail from "./components/GameDetail";
import { fetchGameById } from "./api/fetchGames";
import CheckOut from "./components/CheckOut";
import PriorDateGames from "./components/PriorDateGames";
import ThisWeekGames from "./components/ThisWeekGames";
import NextWeekGames from "./components/NextWeekGames";
import ReleaseCalender from "./components/ReleaseCalender";
import ErrorElement from "./components/ErrorElement";
import BestOfTheYearGames from "./components/BestOfTheYearGames";
import PageNotFound from "./components/PageNotFound";
import PopularGames from "./components/PopularGames";
import AllTimeTop from "./components/AllTimeTop";
import { setLocalStorage } from "./helpers/localStorage";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    loader: async () => {
      return await loadApiKey();
    },
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "checkout",
        element: <CheckOut />,
      },
      {
        path: "gameDetail/:gameId",
        element: <GameDetail />,
        loader: async ({ params }) => {
          return await fetchGameById(params.gameId);
        },
      },
      {
        path: "priorGames",
        element: <PriorDateGames />,
      },
      {
        path: "thisWeek",
        element: <ThisWeekGames />,
      },
      {
        path: "nextWeek",
        element: <NextWeekGames />,
      },
      {
        path: "releaseCalender",
        element: <ReleaseCalender />,
      },
      {
        path: "bestOfTheYear",
        element: <BestOfTheYearGames />,
      },
      {
        path: "popularLastYear",
        element: <PopularGames />,
      },
      {
        path: "allTimeTop",
        element: <AllTimeTop />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
    errorElement: <ErrorElement />,
  },
]);

function App() {
  setLocalStorage();
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
// <ReactQueryDevtools />

export default App;
