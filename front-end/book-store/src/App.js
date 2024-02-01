import React from 'react';
import './App.css';
import Header from './component/header';
import { Route, Routes } from 'react-router-dom';
import Home from './component/home';
import About from './component/about';
import Addbook from './component/addbook';
import Bookdetail from './component/Book/detailBook';
import Books from './component/Book/books';


function App() {
  return(
  <React.Fragment>
<header>
    <Header/>
</header>
<main>
  
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/add' element={<Addbook/>} />
        <Route path='/books/:id' element={<Bookdetail/>} />
        <Route path='/books' element={<Books/>} />
    </Routes>
</main>
  </React.Fragment>
  )
}

export default App;
