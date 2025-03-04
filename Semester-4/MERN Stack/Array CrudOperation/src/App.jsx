import { React } from 'react'
import './App.css'
import StudentCrud from './StudentCrud'
import FacultyCrud from './FacultyCrud'
import ProductCrud from './ProductCrud'

function App() {
  return (
    <>
      <StudentCrud/>
      <FacultyCrud/>
      <ProductCrud/>
    </>
  )
}

export default App
