import "./locations.css"

const Places = ({id,image, name, ref}) => {
  <div>
    <div>
      {/* <img></img> */}
    </div>
    <div>
      <h2>{name}</h2>
      <i className="fa fa-map-marker"></i> 
    </div>
  </div>
}


function AllPlaces() {
  const places = [{id:1 , name:"Super Mami Rodriguez del Busto", ref:""},]
  
  return (
    <div >
      <section id="productos"  >
        {places.map(place =>
          <Places key={place.id} name={place.name} ref={place.image} />)}
      </section>
      
    </div>
  )
}


function Locations() {
  
  return (
    <>
      <section className="locations">
        <h2 id="donde-encontrarnos">¿Dónde nos pueden encontrar?</h2>
          <p>
            Para conseguir nuestros productos te recomendamos estos lugares, es
            posible que en almacenes cerca de tu hogar también puedas encontrar
            nuestro producto!
          </p>
          <ul>
            <li></li>
            <li>Super Mami Ruta 20</li>
            <li>Super Mami Circunvalación</li>
            <li>Super Mami 60 Cuadras</li>
            <li>Super Mami Salsipuedes</li>
            <li>Super Mami Alta Gracia</li>
            <li>Super Mami San Vicente</li>
            <li>Tadicor</li>
            <li>La Reposterita</li>
            <li>Cipriano</li>
          </ul>
      </section>
    </>
  )
}

export default Locations;