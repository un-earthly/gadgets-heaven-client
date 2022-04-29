import { Route, Routes } from 'react-router-dom';
import Blogs from './Pages/Blogs'
import Home from './Pages/Home';
import Inventory from './Pages/Inventory';
import MyItems from './Pages/MyItems.js';
import ManageItems from './Pages/ManageItems.js';
import AddItems from './Pages/AddItems.js';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Error from './SharedAndUtils/Error';
import Footer from './SharedAndUtils/Footer';
import ItemsDetail from './SharedAndUtils/ItemsDetail';
import Navbar from './SharedAndUtils/Navbar';
import 'react-loading-skeleton/dist/skeleton.css'
function App() {
  return (
    <div className="bg-gray-200">
      <Navbar />
      {/* <div className='min-h-[65vh]'> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/myitems' element={<MyItems />} />
        <Route path='/manage' element={<ManageItems />} />
        <Route path='/additems' element={<AddItems />} />
        <Route path='/inventory' element={<Inventory />} />
        <Route path='/inventory/:id' element={<ItemsDetail />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<Error />} />
      </Routes>
      {/* </div> */}
      <Footer />
    </div>
  );
}

export default App;
