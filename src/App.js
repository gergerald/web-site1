import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/pages/Navbar';
import Header from './components/pages/Header';
import Home from './components/pages/Home';
import Footer from './components/pages/Footer';
import Loginform from './components/pages/Loginform';
import Sidebar from './components/pages/Sidebar';
import About from './components/pages/About';
import Analytics from './components/pages/Analytics';
import Comment from './components/pages/Comment';
import Dashboard from './components/pages/Dashboard';
import Product from './components/pages/Product';
import ProductList from './components/pages/ProductList';
import Patients from './components/pages/Patients';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sidebar" element={<SidebarPage />} />
        <Route path="/about" element={<SidebarWithAbout />} />
        <Route path="/admit" element={<SidebarWithAdmit />} />
        <Route path="/patients" element={<SidebarWithPatients />} />
        <Route path="/discharge" element={<SidebarWithDischarge />} />
        <Route path="/checkup" element={<SidebarWithCheckup />} />
        <Route path="/room-details" element={<SidebarWithProduct />} />
        <Route path="/departments" element={<SidebarWithProductList />} />
      </Routes>
      <Footer />
    </Router>
  );
}

function HomePage() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}


function LoginPage() {
  return (
    <div className="login-page">
      <Loginform />
    </div>
  );
}

function SidebarPage() {
  const location = useLocation();
  const shouldShowSidebar = location.pathname !== '/login';

  return (
    <div className="sidebar-page">
      {shouldShowSidebar && <Sidebar />}
      {/* Add your other components or content for the sidebar page */}
    </div>
  );
}

function SidebarWithAbout() {
  return (
    <div className="sidebar-page">
      <Sidebar />
      <About />
      {/* Add your other components or content for the About page */}
    </div>
  );
}

function SidebarWithAdmit() {
  return (
    <div className="sidebar-page">
      <Sidebar />
      <Analytics />
      {/* Add your other components or content for the admit page */}
    </div>
  );
}

function SidebarWithDischarge() {
  return (
    <div className="sidebar-page">
      <Sidebar />
      <Comment />
      {/* Add your other components or content for the discharge page */}
    </div>
  );
}

function SidebarWithCheckup() {
  return (
    <div className="sidebar-page">
      <Sidebar />
      <Dashboard />
      {/* Add your other components or content for the checkup page */}
    </div>
  );
}

function SidebarWithProduct() {
  return (
    <div className="sidebar-page">
      <Sidebar />
      <Product />
      {/* Add your other components or content for the product page */}
    </div>
  );
}

function SidebarWithProductList() {
  return (
    <div className="sidebar-page">
      <Sidebar />
      <ProductList />
      {/* Add your other components or content for the product list page */}
    </div>
  );
}

function SidebarWithPatients() {
  return (
    <div className="sidebar-page">
      <Sidebar />
      <Patients/>
    </div>
  )
}

export default App;
