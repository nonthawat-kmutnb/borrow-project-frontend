import { Routes, Route, Navigate } from 'react-router-dom'

import Home from './pages/Home';
import Rent from './pages/Rent';
import AddProducts from './pages/AddProducts';
import AddAdmin from './pages/AddAdmin';
import Summary from './pages/Summary';

import { AnimatePresence } from "framer-motion"

const NavRouter = () => {
  return (
    <AnimatePresence>
      <Routes>
          <Route path="/admin" element={<Home/>} />
          <Route path="/admin/rent" element={<Rent/>} />
          <Route path="/admin/add-products" element={<AddProducts/>} />
          <Route path="/admin/add-admin" element={<AddAdmin/>} />
          <Route path="/admin/summary" element={<Summary/>} />
          {/* <Route path="/Debt" element={<Navigate to="/Wallet/MyDebt" />} />
          <Route path="/Goal" element={<Navigate to="/Wallet/MyGoal" />} />
          <Route path="Wallet" element={<UserRoute><Wallet/></UserRoute>}>
            <Route path="/Wallet" element={<Navigate to="Overview" />} />
            
            <Route path="Overview" element={<Overview />} />
            <Route path="MyDebt" element={<MyDebt />} />
            <Route path="MyGoal" element={<MyGoal />} />
            </Route>
          <Route path="Aboutus" element={<AboutUs/>} />
          <Route path="*" element={<ErrorPage/>} /> */}
      </Routes>
    </AnimatePresence>
  )
}

export default NavRouter