import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/pages/Homepage/Home'
import Notfound from './components/Notfound'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Layout from './components/Layout/Layout'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'
import Dashbaord from './components/pages/Features/Dashboard'
import LeadManagement from './components/pages/Features/LeadManagement'
import RealtimeStatistics from './components/pages/Features/RealtimeStatistics'
import CampaignsAndOpportunities from './components/pages/Features/CampaignsAndOpportunities'
import UserManagement from './components/pages/Features/UserManagement'
import ActivityTracking from './components/pages/Features/ActivityTracking'
import RealtimeCommunication from './components/pages/Features/RealtimeCommunication'
import ActionAssignment from './components/pages/Features/ActionAssignment'
import AboutUs from './components/pages/Resources/AboutUs'
import Integrations from './components/pages/Integrations/Integrations'
import AllIntegrations from './components/pages/Integrations/AllIntegrations'
import Pricing from './components/pages/Pricing'
import Blog from './components/pages/Blog/Blog'
import Post from './components/pages/Blog/Post'
import AllPosts from './components/pages/Blog/AllPosts'
import PrivacyPolicy from './components/pages/LegalDocuments/PrivacyPolicy'
import TermsOfServices from './components/pages/LegalDocuments/TermsOfServices'
import RequestDemo from './components/pages/RequestDemo'

function App() {


  useEffect(() => {
    AOS.init({
      initClassName: 'aos-init',
      animatedClassName: 'aos-animate',

      // Settings to prevent early triggering
      offset: 100,    // Trigger point (px from element bottom)
      delay: 100,       // Delay animation (ms)
      duration: 500,  // Animation duration (ms)
      easing: 'ease-in-out', // Easing type
      once: false,    // Only animate once
      mirror: false,   // Animate out while scrolling past

      // Important for scroll-only triggering
      startEvent: 'load', // Wait for full page load
      // disableMutationObserver: true, // Disable auto-detection
    });

    // Refresh on route changes (if using React Router)
    return () => {
      AOS.refresh();
    };

  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [location.pathname]);

  let routers = createBrowserRouter([
    {
      path: '', element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: 'home', element: <Home /> },
        {
          path: 'features', children: [
            { path: 'dashboard', element: <Dashbaord /> },
            { path: 'lead-management-system', element: <LeadManagement /> },
            { path: 'realtime-statistics', element: <RealtimeStatistics /> },
            { path: 'campaigns-and-opportunities', element: <CampaignsAndOpportunities /> },
            { path: 'user-management', element: <UserManagement /> },
            { path: 'activity-tracking', element: <ActivityTracking /> },
            { path: 'action-assignment', element: <ActionAssignment /> },
            { path: 'realtime-communication', element: <RealtimeCommunication /> },
          ]
        },
        {
          path: 'integrations', children: [
            { index: true, element: <Integrations /> },
            { path: 'all-integrations', element: <AllIntegrations /> },
          ]
        },
        { path: 'about-us', element: <AboutUs /> },
        { path: 'pricing', element: <Pricing /> },
        {
          path: 'blog', children: [
            { index: true, element: <Blog /> },
            { path: 'post/:id', element: <Post /> },
            { path: 'all-posts', element: <AllPosts /> },
          ]
        },
        { path: 'privacy-policy', element: <PrivacyPolicy /> },
        { path: 'terms-of-services', element: <TermsOfServices /> },
        { path: 'request-demo', element: <RequestDemo /> },
        { path: '*', element: <Notfound /> },
      ]
    },
  ])

  let query = new QueryClient()

  return (
    <>
      <QueryClientProvider client={query}>
        <RouterProvider router={routers} />
      </QueryClientProvider>
    </>
  )
}

export default App
