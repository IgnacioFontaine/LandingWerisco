import "./products.css"
import AllProducts from "../CardProduct/cardproducts";

function Products() {
  
  return (
    < div className="products-description">
      <section id="productos">
        <h2 >Productos</h2>
        <p>
          Contamos actualmente con tres diferentes productos disponibles, los mismos
          son:
        </p>
        <br />
        <section>
          <div className="contenedor-cards">
            <AllProducts />
          </div>
        </section>
      </section>
    </ div>
  )
}

export default Products;