import React from 'react';
import './App.css';
import Home from './pages/index';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { AuthProvider } from './components/Sigin/context/authContext';
import  CartProvider from './components/ShoppingCart/Context/CartContext'
import {Registro} from './components/Sigin/Register/register'
import { Login } from './components/Sigin/login';
import { ProtectedRoute } from './components/Sigin/ProtectedRoute';
import { Forgot } from './components/Sigin/Alert';

function App() {
  return (
    <AuthProvider>

      <CartProvider>
<Router>
  <Routes>
    <Route path="/" element={
    <ProtectedRoute>
       <Home/> 
    </ProtectedRoute>
   }exact />

    <Route path="registro" element={<Registro/>} exact/>
    <Route path="login" element={<Login/>} exact/>
    <Route path="RecoverPassword" element={<Forgot/>} exact/>


 </Routes>
 </Router>

 </CartProvider>

    </AuthProvider>


  );
};

export default App;