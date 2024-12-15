import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import LearnReactChapter1 from './learn-react-chapter1.jsx';

// Creating the root and rendering the app inside it
createRoot(document.getElementById('root')).render(
  <StrictMode>
      
      <LearnReactChapter1 />
   
  </StrictMode>
);
