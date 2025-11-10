import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { AllRoute } from './routes/AllRoute'
import AuthProvider from './provider/AuthProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <AuthProvider>
         <RouterProvider router={AllRoute} />
        </AuthProvider>
  </StrictMode>
)
