import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import MovieDetails from './components/MovieDetails'
import PageNotFound from './components/PageNotFound'
import Footer from './components/Footer'



function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  )
}

export default App
