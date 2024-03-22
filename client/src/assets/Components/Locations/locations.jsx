import AllPlaces from "../CardLocations/cardLocations";
import "./locations.css"

function Locations() {
  
  return (
    <>
      <section className="locations">
        <h2 id="donde-encontrarnos">¿Dónde nos pueden encontrar?</h2>
          <small>
            Para conseguir nuestros productos te recomendamos estos lugares, es
            posible que en almacenes cerca de tu hogar también puedas encontrar
            nuestro producto!
        </small>
        <div>
          <AllPlaces />
        </div>
      </section>
    </>
  )
}

export default Locations;