import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import router from '../src/routes/routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/Asstes/CSS/Home.css';
import '../src/Asstes/CSS/Media.css'



import './App.css';

const staging = 'book-engine';

const App = () => {
  return (
    <>
      <Router basename={staging}>
        {/* <ScrollToTop /> */}
        <Routes>
          {router.map((route) => {
            return (
              <Route
                key={route.name}
                path={route.path}
                exact={route.exact}
                name={route.name}
                element={<route.element />}
              />
            );
          })}
        </Routes>
      </Router>
    </>
  );
};

export default App;