import React from 'react';
import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Home } from './pages/Home/Home';
import { SingleArticle } from './pages/Single Article/SingleArticle';

export const App = () => {
  return (
    <React.StrictMode>
      <Header/>
      {/* <Home/> */}
      <SingleArticle id={0}/>
      <Footer />
    </React.StrictMode>
  );
}
