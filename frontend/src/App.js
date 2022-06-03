import Header from './components/Header'
import RegisterPage from './screen/RegisterPage'
import SummaryPage from './screen/SummaryPage'
import { Container } from 'react-bootstrap'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <Router>
       <Header />
        <main className='py3'>
          <Container>
            <Routes>
            <Route path='/' element={<RegisterPage />} />
            <Route path='/summary' element={<SummaryPage />} />
            </Routes>
          </Container>
        </main>
    </Router>
  );
}

