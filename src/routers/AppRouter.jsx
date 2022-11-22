import { Routes, Route } from 'react-router-dom'
import ActualizarOrden from '../models/ActualizarOrden'
import CrearOrden from '../models/CrearOrden'
import Home from '../models/Home'
import Login from '../models/Login'
import Register from '../models/Register'

export default function AppRouter() {
    return( 
       <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/register" element={<Register />}/> 
          <Route path="/home" element={<Home />}/>
          <Route path="/crearOrden" element={<CrearOrden />}/>
          <Route path="/actualizarOrden" element={<ActualizarOrden />}/>
       </Routes>
    )
}