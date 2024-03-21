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
            <small>Consultar precio en tu Supermercado de preferencia</small>
          </div>
        </section>
        <p><i>Sin conservantes artificiales, más de 20 años en la industria acompañando tus postres y de tus tardes de mate.</i></p>
        <br></br>
      </section>
    </ div>
  )
}

export default Products;