import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import { router } from './routes/Routes';
import { QueryClient } from '@tanstack/react-query';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={QueryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
)
