import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import MyRoutes from './utils/MyRoutes';
import './index.css';
 

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MyRoutes />
  </StrictMode>,
)
