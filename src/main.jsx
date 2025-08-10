import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import router from './routes/router.jsx'
import AuthContextProvider from './Context/AuthContextProvider.jsx'
import { QueryClientProvider } from '@tanstack/react-query'
import { QueryClient } from '@tanstack/react-query'
const queryClient=new QueryClient()
createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <QueryClientProvider client={queryClient}>
   <AuthContextProvider>
     <RouterProvider router={router}></RouterProvider>
   </AuthContextProvider>
   </QueryClientProvider>
  </StrictMode>,
)
