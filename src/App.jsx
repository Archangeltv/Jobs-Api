import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GlobalContextProvider } from "./context/GlobalContext";
import Homepage from "./pages/Homepage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
      children: [
        {
          path: "sign-in",
          element: <div></div>,
        },
      ],
    },
  ]);

  return (
    <GlobalContextProvider>
      <RouterProvider router={router} />
    </GlobalContextProvider>
  );
}

export default App;
