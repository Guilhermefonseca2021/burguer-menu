import { Routes, Route } from 'react-router-dom';
import Product from './layout/pages/product/featuredProduct';
import Login from './layout/pages/_auth/Login';
import ProductsToCart from './layout/pages/product/ProductsToCart';
import GlobalLayout from './layout/GlobalLayout';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<GlobalLayout />} >
        <Route index element={<Login />} />
        <Route path='/productstocard' element={<ProductsToCart />} />
      </Route>
      <Route path="/product:id" element={<Product />} />
    </Routes>
  );
}
