
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Contact from "./component/common/Contact/Contact";
import Home from "./pages/Home";
import MainLayout from "./component/Layout/MainLayout/MainLayout";
import { Suspense } from "react";
function App() {

  const router = createBrowserRouter([
    {
      element: (
        <MainLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </MainLayout>
      ),
      children: [
        { element: <Home />, index: true },
        { path: 'contact', element: <Contact /> },
      ],
    },
  ]);
  return (
      <RouterProvider router={router} />
  )
}

export default App
