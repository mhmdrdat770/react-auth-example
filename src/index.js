import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/route';
import AuthProvider from './providers/AuthProvider';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
  </StrictMode>
);

