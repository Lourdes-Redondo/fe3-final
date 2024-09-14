import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import './Estilos.css'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = ({ theme, toggleTheme }) => {
  const navigate = useNavigate();

  return (
    <nav clasName="navbar">
       <button onClick={() => navigate(-1)}>🔙</button>
      <link to = "/"> <h4>Inicio</h4> </link>
      <link to = "/contact"> <h4>Contacto</h4> </link>
      <link to = "/dentist"> <h4>Detalle del dentista</h4> </link>
      <link to = "/favs"> <h4>Destacados</h4> </link>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      
      <nav style={{ background: theme.background, color: theme.color }}></nav>

      <button onClick={toggleTheme}>Change theme</button>
    </nav>
  )
}

export default Navbar