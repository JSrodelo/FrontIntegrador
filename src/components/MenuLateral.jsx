import { useNavigate } from "react-router-dom"
import { alertaRedireccion } from "../helpers/funciones"

const MenuLateral = () => {
  let navigate = useNavigate()
  let usuario = JSON.parse(localStorage.getItem("usuario"))
  function cerrarSesion() {
    localStorage.removeItem("token")
    localStorage.removeItem("usuario")
    alertaRedireccion(navigate, "Sesion finalizada", "En Breves segundos cerraremos la sesión", "info", "/")
  }
  return (
    <aside className="aplicacion__menu-lateral">
      <h1 className="aplicacion__menu-lateral-logo">Institución <span className="aplicacion__menu-lateral-logo--resaltado"></span></h1>
      <h2>Usuario: {usuario.nombre} </h2>
      <img className="aplicacion__menu-lateral-logo-imagen" src="/icons.png" alt="Logo" />
      <nav className="aplicacion__menu-lateral-navegacion">
        <a className="aplicacion__menu-lateral-navegacion-item" href="">Inicio</a>
        <a className="aplicacion__menu-lateral-navegacion-item" href="">Opiniones</a>
        <a className="aplicacion__menu-lateral-navegacion-item" href="">Materias</a>
        <a className="aplicacion__menu-lateral-navegacion-item" href="">Matriculas</a>
        <a className="aplicacion__menu-lateral-navegacion-item" href="">Seguimiento del estudiante</a>

        <button onClick={cerrarSesion} type='button' className="aplicacion__menu-lateral-navegacion-item">Cerrar sesión</button>
      </nav>
    </aside>
  )
}

export default MenuLateral