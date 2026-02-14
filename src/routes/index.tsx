import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../layouts/RootLayout";
import NotFoundPage from "../pages/NotFoundPage";

import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import KirakiraPage from "../pages/KirakiraPage";
import ContactPage from "../pages/ContactPage";

import PrivacyPage from "../pages/PrivacyPage";
import TermsPage from "../pages/TermsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "kirakira", element: <KirakiraPage /> },
      { path: "contact", element: <ContactPage /> },

      // ✅ footer links
      { path: "privacy", element: <PrivacyPage /> },
      { path: "terms", element: <TermsPage /> },
    ],
  },
]);
