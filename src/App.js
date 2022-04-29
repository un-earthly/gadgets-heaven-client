import { Route, Routes } from 'react-router-dom';
import Blogs from './Pages/Blogs'
import Inventory from './Pages/Inventory';
import Error from './SharedAndUtils/Error';
import Footer from './SharedAndUtils/Footer';
import Navbar from './SharedAndUtils/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/inventory' element={<Inventory />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
