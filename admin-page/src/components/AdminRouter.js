import { Routes, Route, Navigate } from 'react-router-dom'

import AdminLogin from './pages/AdminLogin';
import Rent from './pages/Rent';
import AddProducts from './pages/AddProducts';
import AddAdmin from './pages/AddAdmin';
import Summary from './pages/Summary';

import { AnimatePresence } from "framer-motion"

const NavRouter = () => {
  return (
    <AnimatePresence>
      <Routes>
          <Route path="/admin" element={<AdminLogin/>} />
          <Route path="/admin/rent" element={<Rent/>} />
          <Route path="/admin/add-products" element={<AddProducts/>} />
          <Route path="/admin/add-admin" element={<AddAdmin/>} />
          <Route path="/admin/summary" element={<Summary/>} />
      </Routes>
    </AnimatePresence>
  )
}

export default NavRouter