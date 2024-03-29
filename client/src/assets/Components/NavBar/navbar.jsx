import "./navbar.css"

function NavBar() {
  
  return (
    <>
      <ul className="navbar">
        <li><a href="index.html#inicio">Inicio</a></li>
        <li><a href="index.html#quienes-somos">¿Quiénes somos?</a></li>
        <li><a href="index.html#productos">Productos</a></li>
        <li>
          <a href="index.html#donde-encontrarnos">¿Dónde nos pueden encontrar?</a>
        </li>
        <li><a href="index.html#contactos">Contacto</a></li>
      </ul>
    </>
  )
}

export default NavBar;