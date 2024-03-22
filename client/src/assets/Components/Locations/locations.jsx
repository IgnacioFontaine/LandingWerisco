import "./locations.css"
import merengue_imagen from "../../Image/100grImage.png"


const PlaceCard = ({ id, name}) => {
  <div className="Place" key={id}>
        <div className="image-place">
          {/* <img src={merengue_imagen} alt="Merengue" /> */}
        </div>
        <div >
          <h2 className="name-place">{name}</h2>
        </div>
  </div>
}


function AllPlaces() {
  const places = [
    { id: 4, name: "Super Mami Rodriguez del Busto" },
    { id: 5, name: "Super Mami Ruta 20" },
    { id: 6, name: "Super Mami Circunvalación" },
    { id: 7, name: "Super Mami 60 Cuadras" },
    { id: 8, name: "Super Mami Salsipuedes" },
    { id: 9, name: "Super Mami Alta Gracia" },
    { id: 10, name: "Super Mami San Vicente" },
    { id: 11, name: "Tadicor" },
    { id: 12, name: "La Reposterita" },
    { id: 13, name: "Cipriano" },
    { id: 14, name: "Gloria" },
    { id: 15, name: "" },]
  
  return (
    <div >
      <section id="productos" className="places-contenedor"  >
        {/* {places.map(place =>
          <PlaceCard key={place.id} name={place.name} />)} */}
        <div className="Place" key={places[0].id}>
        <div className="image-place">
          <img src={merengue_imagen} alt="Merengue" />
        </div>
        <div >
          <h2 className="name-place">{places[0].name}</h2>
          </div>
          <div className="map-place">
            <a href="" target="_blank" className="	fa fa-map-marker"></a>
          </div>
      </div>
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
        <div>
          <AllPlaces />
        </div>
      </section>
    </>
  )
}

export default Locations;