import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router} from "react-router-dom"
import { DataContext } from './contextData/DataContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <DataContext>
    <App />
    </DataContext>
    </Router>
  </React.StrictMode>
);