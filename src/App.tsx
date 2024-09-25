import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Input from './components/Input'
import TextToSummary from './components/TextToSummary'
import ImageToText from './components/ImageToText'
import {BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  
  return (
  <>    
  <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path='/text-to-summary' element={<TextToSummary />} />
          <Route path='/image-to-text' element={<ImageToText/>} />
        </Routes>
      </div>
  </BrowserRouter>
  <Input />
  <Footer />
  </>

  )
}

export default App
