import React from 'react';
import { useState } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import MainPage from './MainPage';
import InfoPage from './InfoPage';
import formState from './form-state';

const App = () => {
  const [code, setCode] = useState(formState.default);
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage setCode={setCode} code={code} />} />
          <Route path="/info" element={<InfoPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;