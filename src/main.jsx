import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router";
import { QueryClientProvider } from "@tanstack/react-query";

import { QueryClient } from "@tanstack/react-query";

import PlayerPage from "./features/player/PlayerPage.jsx";
import AdminPage from "./features/admin/AdminPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      { index: true, element: <PlayerPage /> },
      { path: "admin", element: <AdminPage /> },
    ],
  },
]);

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
);
