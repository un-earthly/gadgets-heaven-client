import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Inventory from './Pages/Inventory';
import MyItems from './Pages/MyItems.js';
import AddItems from './Pages/AddItems.js';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Error from './SharedAndUtils/Error';
import Footer from './SharedAndUtils/Footer';
import ItemsDetail from './SharedAndUtils/ItemsDetail';
import Navbar from './SharedAndUtils/Navbar';
import RequireAuth from './SharedAndUtils/RequireAuth';
import 'react-loading-skeleton/dist/skeleton.css'
import UpdateItem from './Pages/UpdateItem';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist'
import { useEffect, useState } from 'react';
import Contact from './Pages/Contact';
function App() {
  const [loadin, setLoadin] = useState(false)
  useEffect(() => {
    setLoadin(true)
    setTimeout(() => {
      setLoadin(false)
    }, 1000)
  }, [])
  return (
    <div className="bg-gray-200">
      {
        loadin ?
          <div className='flex items-center justify-center h-screen'>
            <img style={{ animationDuration: '5s' }} src="favicon.png" className='animate-spin ' alt="" />
          </div>
          :
          <>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/home' element={<Home />} />
              <Route path='/myitems' element={<RequireAuth><MyItems /></RequireAuth>} />
              <Route path='/update/:id' element={<RequireAuth><UpdateItem /></RequireAuth>} />
              <Route path='/additems' element={<RequireAuth> <AddItems /></RequireAuth>} />
              <Route path='/inventory' element={<RequireAuth><Inventory /></RequireAuth>} />
              <Route path='/inventory/:id' element={<RequireAuth><ItemsDetail /></RequireAuth>} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='*' element={<Error />} />
            </Routes>
            <ToastContainer />
            <Footer />
          </>
      }
    </div >
  );
}

export default App;
