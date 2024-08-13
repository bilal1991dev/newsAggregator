import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import { UserPreferencesProvider } from './context/UserPreferencesContext';

function App() {
  return (
    <UserPreferencesProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more routes here for different pages */}
        </Routes>
        <Footer />
      </Router>
    </UserPreferencesProvider>
  );
}

export default App;
