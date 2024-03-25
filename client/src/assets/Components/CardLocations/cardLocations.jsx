import "./cardLocations.css"
import merengue_imagen from "../../Image/100grImage.png";

const PlaceCard = ({ id, name, direc }) => {
  
  return (
    <div className="Place" key={id}>
        <div className="image-place">
          <img src={merengue_imagen} alt="Merengue" />
        </div>
        <div >
          <h2 className="name-place">{name}</h2>
          <h6 className="direc-place">{direc}</h6>
        </div>
          <div className="map-place">
            <a  rel="noopener noreferrer" target="_blank"  className="	fa fa-map-marker"></a>
          </div>
      </div>
  )
}


export default function AllPlaces() {
  const places = [
    { id: 4, name: "Super Mami Rodriguez del Busto", ref: "https://maps.app.goo.gl/psT52WAkSJvYWn3x6", direc: "Rodríguez del Busto 4086, Córdoba" },
    
    { id: 5, name: "Super Mami Ruta 20", ref: "https://maps.app.goo.gl/eTnQs1CRmVHYcfBT6", direc: "Av. Fuerza Aerea Argentina 1700, X5010 Córdoba" },
    
    { id: 6, name: "Super Mami Circunvalación", ref: "https://maps.app.goo.gl/Vcn2fWbrqrkKobra8", direc: "Planta Baja Ampliacion 7 barrio los olmos, Gondola de Venecia 7, X5097 Córdoba" },
    
    { id: 7, name: "Super Mami 60 Cuadras", ref: "https://maps.app.goo.gl/zUNgZqzLjEXXHbuM6", direc: "Colectora de Circunvalación, X5000 Córdoba" },
    
    { id: 8, name: "Super Mami Salsipuedes", ref: "https://maps.app.goo.gl/zrUjasr9pBgbn6qo8", direc: "E53 1011, X5113 Córdoba" },
    
    { id: 9, name: "Super Mami Alta Gracia", ref: "https://maps.app.goo.gl/zGwxSxeQ6wVHEodN6", direc: "Gabino Ezeiza 1081, RP5, Km 29, Alta Gracia, Córdoba" },
    
    { id: 10, name: "Super Mami San Vicente", ref: "https://maps.app.goo.gl/Sh7qyTzFCtNHFBLW8", direc: "Agustín Garzón 1252B°, X5001 Córdoba" },
    
    { id: 11, name: "Tadicor", ref: "https://maps.app.goo.gl/YaKCcyXzM2y6bPg99", direc: "colectora Norte, salida 1B, Avenida Circunvalacion, Córdoba" },
    
    { id: 12, name: "La Reposterita", ref: "https://maps.app.goo.gl/KRxifh6sDH4WoCVg7", direc: "Esquina Rivadavia, Oncativo 101, X5000 Córdoba" },
    
    { id: 13, name: "Cipriano", ref: "https://maps.app.goo.gl/uPf2SMEV8VzRwR3X6", direc: "Fournier 2364, X5011 Córdoba" },
    
    { id: 14, name: "Gloria", ref:"https://maps.app.goo.gl/9YFkyxVTbmEAUNKn7", direc:"Av. Rafael Núñez 3742, X5009 CFR, Córdoba" }]
  
  return (
    <div >
      <section id="locations-contenedor" className="cont-locations" >
        {places.map(place =>
          <PlaceCard
            key={place.id}
            name={place.name}
            direc={place.direc}
            className="location-card" />)}
      </section>
    </div>
  )
}