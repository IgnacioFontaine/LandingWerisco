import "./products.css"
import AllProducts from "../CardProduct/cardproducts";

function Products() {
  
  return (
    < div className="products-description">
      <section id="productos">
        <h2 >! Nuestros productos ¡</h2>
        <br />
        <section>
          <div className="contenedor-cards">
            <AllProducts />
          </div>
          <div>
            <p><i>Sin conservantes artificiales, más de 20 años en la industria acompañando tus postres y de tus tardes de mate.</i></p>
          </div>
        </section>
      </section>
    </ div>
  )
}

export default Products;