import { createBrowserRouter, Navigate } from 'react-router-dom'
import RootLayout from '../layouts/RootLayout'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import SkillsPage from '../pages/SkillsPage'
import ProjectsPage from '../pages/ProjectsPage'
import ProjectDetailPage from '../pages/ProjectDetailPage'
import ContactPage from '../pages/ContactPage'
import NotFoundPage from '../pages/NotFoundPage'

/**
 * Centralized app routing.
 * Nested under RootLayout so Nav + scroll-restore apply everywhere.
 */
export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: 'about', element: <AboutPage /> },
        { path: 'skills', element: <SkillsPage /> },
        {
          path: 'projects',
          children: [
            { index: true, element: <ProjectsPage /> },
            { path: ':id', element: <ProjectDetailPage /> },
          ],
        },
        { path: 'contact', element: <ContactPage /> },
        { path: '404', element: <NotFoundPage /> },
        { path: '*', element: <Navigate to="/404" replace /> },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL.replace(/\/$/, '') }
)
