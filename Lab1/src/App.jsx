
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Contact from "./component/common/Contact/Contact";
import Home from "./pages/Home";
import MainLayout from "./component/Layout/MainLayout/MainLayout";
import { Suspense } from "react";
import Edit from "./pages/Edit";
import Users from "./pages/Users";
import { UserDetail } from "./pages/UserDetail";
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
        { path: 'edit', element: <Edit /> },

      ],
    },
    {
      path: 'products',
      element: <Users/>
    },
    {
      path: 'products/:id',
      element: <UserDetail/>
    }

  ]);
  return (
      <RouterProvider router={router} />
  )
}

export default App
