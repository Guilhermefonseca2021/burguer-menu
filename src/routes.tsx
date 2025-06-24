import { Routes, Route } from 'react-router-dom';
import Login from './layout/pages/_auth/Login';
import ProductsToCart from './layout/pages/product/ProductsToCart';
import GlobalLayout from './layout/GlobalLayout';
import Checkout from './layout/pages/product/checkout';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<GlobalLayout />} >
        <Route index element={<Login />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/productstocard' element={<ProductsToCart />} />
      </Route>
    </Routes>
  );
}

