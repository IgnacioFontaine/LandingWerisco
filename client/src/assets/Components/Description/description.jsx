import "./description.css"
import logoSinTacc from "../../Image/sinTacc.png";

function Description() {
  
  return (
    <div className="description">
      <section  id="quienes-somos "  >
        <h2  >¿Quiénes somos?</h2>
          <p className="description-parragraph" >
            Somos una pyme familiar con más de 20 años de trayectoria que se dedica
            a la 
            fabricación, horneado, envasado y distribución de merengue. Podés encontrar nuestro
            producto en muchos puntos de Córdoba que detallaremos debajo, no realizamos ventas al por menor
            pero cualquier duda podés consultarnos via  Mail o por Whatsapp.
            Todos nuestros productos son sin Tacc, perfectos para sumar dulzura a todos tus días!
        </p>
        <br />
        <div className="contenedor-image">
          <img className="description-image" src={logoSinTacc} alt="Sin Tacc" />
        </div>
      </section>
    </div>
  )
}

export default Description;