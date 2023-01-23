import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import HeroSection from './components/HeroSection';
import Cards from './components/Cards';
import Footer from './components/Footer';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import NewsList from './components/UI/NewsList';

function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact component={Home} />
        </Routes>
        <HeroSection />
        <Cards />
        <NewsList />
        <Footer />
      </Router>
    </QueryClientProvider>
  )
}

export default App;
