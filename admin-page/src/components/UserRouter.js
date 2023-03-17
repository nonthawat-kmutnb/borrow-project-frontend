import { Routes, Route, Navigate } from 'react-router-dom'

import Home from './pages/Home';
import Rent from './pages/Rent';
import AddProducts from './pages/AddProducts';
import AddAdmin from './pages/AddAdmin';
import Summary from './pages/Summary';
import Products from './pages/Products';

import { AnimatePresence } from "framer-motion"

const NavRouter = () => {
  return (
    <AnimatePresence>
      <Routes>
          <Route path="/" element={<Home/>} />
      </Routes>
    </AnimatePresence>
  )
}

export default NavRouter