import React from 'react';
import ReactDOM from 'react-dom/client';
import {ParagraphLink} from './components/ParagraphLink/ParagraphLink';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ParagraphLink  href="facebook.com" color="red" >Hola</ParagraphLink>
    <ParagraphLink href="youtube.com" color="green" >Hola 2</ParagraphLink>
  </React.StrictMode>

);
