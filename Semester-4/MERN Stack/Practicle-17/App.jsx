import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Student from './pages/Student/StudentCard'
import Faculty from './pages/Faculty/FacultyCard'

import Layout from './components/Layout'


function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Layout/>}>  
              <Route path='/home' element={<Home/>}></Route>
              <Route path='/about' element={<About/>}></Route>
              <Route path='/contact' element={<Contact/>}></Route>
              <Route path='/student' element={<Student/>}></Route>
              <Route path='/faculty' element={<Faculty/>}></Route>
              </Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
