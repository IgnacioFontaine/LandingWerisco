import "./locations.css"

const Places = ({ id, name, ref }) => {
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
  const places = [
    { id: 4, name: "Super Mami Rodriguez del Busto", ref: "" },
    { id: 5, name: "Super Mami Ruta 20", ref: "" },
    { id: 6, name: "Super Mami Circunvalación", ref: "" },
    { id: 7, name: "Super Mami 60 Cuadras", ref: "" },
    { id: 8, name: "Super Mami Salsipuedes", ref: "" },
    { id: 9, name: "Super Mami Alta Gracia", ref: "" },
    { id: 10, name: "Super Mami San Vicente", ref: "" },
    { id: 11, name: "Tadicor", ref: "" },
    { id: 12, name: "La Reposterita", ref: "" },
    { id: 13, name: "Cipriano", ref: "" },
    { id: 14, name: "Gloria", ref: "" },
    { id: 15, name: "", ref: "" },]
  
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
          <small>
            Para conseguir nuestros productos te recomendamos estos lugares, es
            posible que en almacenes cerca de tu hogar también puedas encontrar
            nuestro producto!
          </small>
      </section>
    </>
  )
}

export default Locations;