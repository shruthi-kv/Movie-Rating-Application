import './App.scss'
import react from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Components/Home/Home'
import Header from './Components/Header/Header'
import MovieDetails from './Components/MovieDetails/MovieDetails'
import PageNotFound from './Components/PageNotFound/PageNotFound'
import Footer from './Components/Footer/Footer';

function App() {
 

  return (
   <div className="App">
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/movie/:imbbID" element={<MovieDetails/>} />
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
    <Footer/>
    </BrowserRouter>

   </div>
  )
}

export default App
