import React from 'react';
import { BrowserRouter as Router, } from 'react-router-dom';

import SearchFilmsPage from './pages/SearchFilmsPage';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
  return (
    <Router>
      <SearchFilmsPage />
    </Router>
  );
}

export default App;
