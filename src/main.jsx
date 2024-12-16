import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ReactChapter2 from './react-chapter2'

// Creating the root and rendering the app inside it
createRoot(document.getElementById('root')).render(
  <StrictMode>
      
      <ReactChapter2  />
   
  </StrictMode>
);
