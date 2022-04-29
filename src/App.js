import { Route, Routes } from 'react-router-dom';
import Blogs from './Pages/Blogs'
import Home from './Pages/Home';
import Inventory from './Pages/Inventory';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Error from './SharedAndUtils/Error';
import Footer from './SharedAndUtils/Footer';
import Item from './SharedAndUtils/Item';
import Navbar from './SharedAndUtils/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/inventory' element={<Inventory />} />
        <Route path='/inventory/:id' element={<Item />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
