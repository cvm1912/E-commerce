import { Routes, Route, Navigate } from 'react-router-dom';
import AuthLayout from './components/auth/AuthLayout';
import AdminLayout from './components/admin/AdminLayout';
import ShoppingLayout from './components/shopping/ShoppingLayout';
import Dashboard from './pages/admin/Dashboard';
import AdminProducts from './pages/admin/Products';
import Orders from './pages/admin/Orders';
import Feature from './pages/admin/Feature';
import Login from './pages/auth/Login';
import Register from './pages/auth/register';
import Home from './pages/shopping/Home';
import ShoppingProducts from './pages/shopping/Products';
import Checkout from './pages/shopping/Checkout';
import Account from './pages/shopping/Accout';

function App() {
  return (
    <div className='flex overflow-hidden bg-white'>
      <Routes>
        <Route path='/' element={<Navigate to='/auth/login' />} />

        <Route path='/auth' element={<AuthLayout />}>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route>

        <Route path='/admin' element={<AdminLayout />}>
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='products' element={<AdminProducts />} />
          <Route path='orders' element={<Orders />} />
          <Route path='features' element={<Feature />} />
        </Route>

        <Route path='/shop' element={<ShoppingLayout />}>
          <Route path='home' element={<Home />} />
          <Route path='products' element={<ShoppingProducts />} />
          <Route path='checkout' element={<Checkout />} />
          <Route path='account' element={<Account />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
