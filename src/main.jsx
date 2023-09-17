import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes.jsx'
import { Toaster } from 'react-hot-toast'
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos"; // Import AOS library
import { Helmet, HelmetProvider } from 'react-helmet-async';
import AuthProvider from './Providers/AuthProvider'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

// Create a client
const queryClient = new QueryClient()
AOS.init();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <div className='max-w-screen-2xl mx-auto'>
            <RouterProvider router={router}></RouterProvider>
            <Toaster></Toaster>
          </div>
        </QueryClientProvider>
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
)
