import { Routes, Route, Navigate } from 'react-router-dom'

import Home from './pages/Home';
import Rent from './pages/Rent';
import AddProducts from './pages/AddProducts';
import AddAdmin from './pages/AddAdmin';
import Summary from './pages/Summary';
import Password from './pages/Password';

import { AnimatePresence } from "framer-motion"

const NavRouter = () => {
  return (
    <AnimatePresence>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/rent" element={<Rent/>} />
          <Route path="/add-products" element={<AddProducts/>} />
          <Route path="/add-admin" element={<AddAdmin/>} />
          <Route path="/summary" element={<Summary/>} />
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