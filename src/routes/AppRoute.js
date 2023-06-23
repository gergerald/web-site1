import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../components/pages/Home';
import Comment from '../components/pages/Comment';
import Dashboard from '../components/pages/Dashboard';
import ProductList from '../components/pages/ProductList';
import Product from '../components/pages/Product';
import Analytics from '../components/pages/Analytics';
import About from '../components/pages/About';

export default function AppRoute() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/discharge' element={<Comment/>}/>
      <Route path='/checkup' element={<Dashboard/>}/>
      <Route path='/departments' element={<ProductList/>}/>
      <Route path='/room-details' element={<Product/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/admit' element={<Analytics/>}/>
      

    </Routes>
    
    
    </BrowserRouter>

    </>
  )
}
