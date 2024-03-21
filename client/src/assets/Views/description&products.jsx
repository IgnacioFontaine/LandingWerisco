import Description from "../Components/Description/description";
import Products from "../Components/Products/products";
import "./description&products.css";

const ViewDescription = () => {
  return (
    <section className="view-description">
      <Description />
      <Products />
    </ section>
  )
}

export default ViewDescription;