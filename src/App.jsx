import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./routes/HomePage/HomePage";
import ListPage from "./routes/ListPage/ListPage";
import Layout from "./routes/Layout/Layout";
import SinglePage from "./routes/SinglePage/SinglePage";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path: "/",
          element: <HomePage />
        },
        {
          path: "/list",
          element: <ListPage />
        },
        {
          path: "/:id",
          element: <SinglePage />
        },
      ]
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App