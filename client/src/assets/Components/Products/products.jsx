import AllProducts from "../CardProduct/cardproducts";

function Products() {
  
  return (
    <>
      <section>
        <h2 id="productos">Productos</h2>
        <p>
          Contamos actualmente con tres diferentes productos disponibles, los mismos
          son:
        </p>
        <br />
        <table>
          <thead>
            <th colSpan="3">Nuestros Productos</th>
          </thead>
          <tr>
            <AllProducts />
          </tr>
          <tfoot>
            <td colSpan="3"><small>Consultar precio en tu Supermercado de preferencia</small></td>
          </tfoot>
        </table>
        <br></br>
        <p><i>Sin conservantes artificiales, más de 20 años en la industria acompañando tus postres y de tus tardes de mate.</i></p>
        <br></br>
      </section>
    </>
  )
}

export default Products;