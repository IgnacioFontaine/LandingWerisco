import image100g from "../../Image/100grImage.png";
import image250g from "../../Image/250grImage.png";
import image1k from "../../Image/1kImage.png";
import "./cardproduct.css";

function CardProduct({id,name,image}) {
  
  return (
    <div className="Card">
        <div className="image-card">
          <img src={image} alt="Merengue" />
        </div>
        <div className="name-card">
          <h4>{name}</h4>
        </div>
  </div>
  )
}

function AllProducts() {
  const products = [{id:1 , name:"100 Gr", image:image100g},{id:2 ,name:"250 Gr", image:image250g},{id:3 ,name:"1 Kg", image:image1k}]
  
  return (
    <div >
      <section id="productos" className="contenedor-products" >
        {products.map(product =>
          <CardProduct key={product.id} name={product.name} image={product.image} />)}
      </section>
      
    </div>
  )
}

export default AllProducts;