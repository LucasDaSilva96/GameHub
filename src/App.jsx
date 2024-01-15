import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";
import loadApiKey from "./api/loadApiKey";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import GameDetail from "./components/GameDetail";
import { fetchGameById, fetchGamesLast30Days } from "./api/fetchGames";
import CheckOut from "./components/CheckOut";
import PriorDateGames from "./components/PriorDateGames";
import ThisWeekGames from "./components/ThisWeekGames";
import { getNextWeekDate } from "./helpers/date";
import NextWeekGames from "./components/NextWeekGames";
import ReleaseCalender from "./components/ReleaseCalender";

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
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
// <ReactQueryDevtools />

export default App;
