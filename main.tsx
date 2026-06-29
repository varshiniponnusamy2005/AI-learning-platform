import { createBrowserRouter } from "react-router";
import { AppLayout } from "./components/AppLayout";
import { MarketingLayout } from "./components/MarketingLayout";
import { Splash } from "./components/Splash";
import { Landing } from "./components/Landing";
import { Onboarding } from "./components/Onboarding";
import { Login } from "./components/Login";
import { Dashboard } from "./components/Dashboard";
import { Roadmap } from "./components/Roadmap";
import { Level } from "./components/Level";
import { Interview } from "./components/Interview";
import { Leaderboard } from "./components/Leaderboard";
import { Chatbot } from "./components/Chatbot";
import { Achievements } from "./components/Achievements";
import { ProtectedRoute } from "./utils/ProtectedRoute";
import React from 'react';

const SplashWrapper = () => {
  return (
    <>
      <Splash />
      <MarketingLayout />
    </>
  );
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SplashWrapper />,
    children: [
      { index: true, element: <Landing /> },
      { path: "login", element: <Login /> },
    ],
  },
  {
    path: "/onboarding",
    element: <Onboarding />,
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "roadmap", element: <Roadmap /> },
      { path: "levels", element: <Level /> },
      { path: "levels/:id", element: <Level /> },
      { path: "interview", element: <Interview /> },
      { path: "leaderboard", element: <Leaderboard /> },
      { path: "chat", element: <Chatbot /> },
      { path: "achievements", element: <Achievements /> },
    ],
  },
]);
