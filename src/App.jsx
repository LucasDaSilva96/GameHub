import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";
import loadApiKey from "./api/loadApiKey";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import GameDetail from "./components/GameDetail";
import { fetchGameById } from "./api/fetchGames";

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
        path: "gameDetail/:gameId",
        element: <GameDetail />,
        loader: async ({ params }) => {
          return await fetchGameById(params.gameId);
        },
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
