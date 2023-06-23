import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import About from './pages/About';
import Analytics from './pages/Analytics';
import Comment from './pages/Comment';
import Dashboard from './pages/Dashboard';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import LoginForm from './components/LoginForm';

const MainRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/dashboard/*" element={<DashboardWithSidebar />} />
      </Routes>
    </Router>
  );
};

const DashboardWithSidebar = () => (
  <>
    <Sidebar />
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/about" element={<About />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/comment" element={<Comment />} />
      <Route path="/product" element={<Product />} />
      <Route path="/productList" element={<ProductList />} />
    </Routes>
  </>
);

export default MainRoutes;
