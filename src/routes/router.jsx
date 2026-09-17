import { createBrowserRouter } from "react-router";
import PlayerPage from "../features/player/PlayerPage";
import LoginPage from "../features/auth/LoginPage";
import AdminPage from "../features/admin/AdminPage";
import PrivateRoute from "../app/PrivateRoute";

const router = createBrowserRouter([
  { path: "/admin", element: <PrivateRoute />, children: [{ index: true, element: <AdminPage /> }] },
  { path: "/slides", element: <PlayerPage /> },
  { path: "/", element: <LoginPage /> },
]);

export default router;
