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
import { Toaster } from 'react-hot-toast'
import HelpCenter from './components/pages/HelpCenter/HelpCenter'
import Category from './components/pages/HelpCenter/Category'
import Article from './components/pages/HelpCenter/Article'
import Webinars from './components/pages/Webinars/Webinars'
import Event from './components/pages/Webinars/Event'
import Video from './components/pages/Webinars/Video'
import AllEvents from './components/pages/Webinars/AllEvents'
import AllVideos from './components/pages/Webinars/AllVideos'
import ErrorPage from './components/ErrorPage'

function App() {


  useEffect(() => {
    const initAOS = () => {
      const isDesktop = window.innerWidth >= 1024;

      if (isDesktop) {
        AOS.init({
          initClassName: 'aos-init',
          animatedClassName: 'aos-animate',
          offset: 100,
          delay: 100,
          duration: 500,
          easing: 'ease-in-out',
          once: false,
          mirror: false,
          startEvent: 'load',
          disable: false
        });
      } else {
        // Disable AOS on mobile/tablet
        AOS.init({
          disable: true
        });
      }
    };

    // Initialize AOS
    initAOS();

    // Handle window resize
    const handleResize = () => {
      initAOS();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  let routers = createBrowserRouter([
    {
      path: '', element: <Layout />, errorElement: <ErrorPage />, children: [
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
        {
          path: 'webinars', children: [
            { index: true, element: <Webinars /> },
            { path: 'event/:slug', element: <Event /> },
            { path: 'video/:slug', element: <Video /> },
            { path: 'all-events', element: <AllEvents /> },
            { path: 'all-videos', element: <AllVideos /> },
          ]
        },
        { path: 'privacy-policy', element: <PrivacyPolicy /> },
        { path: 'terms-of-services', element: <TermsOfServices /> },
        { path: 'request-demo', element: <RequestDemo /> },
        { path: 'help-center', element: <HelpCenter /> },
        { path: 'help-center/category/:id', element: <Category /> },
        { path: 'help-center/:slug', element: <Article /> },
        { path: '*', element: <Notfound /> },
      ]
    },
  ])

  let query = new QueryClient()

  return (
    <>
      <QueryClientProvider client={query}>
        <RouterProvider router={routers} />
        <Toaster
          position='bottom-right'
          reverseOrder={false}
        />
      </QueryClientProvider>
    </>
  )
}

export default App
