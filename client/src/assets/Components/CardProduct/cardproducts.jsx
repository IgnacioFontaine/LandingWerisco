import image100g from "../../Image/100grImage.png";
const products = [{id:1 , name:"100 Gr", image:image100g},{id:2 ,name:"250 Gr", image:""},{id:3 ,name:"1 Kg", image:""}]

function CardProduct({id,name,image}) {
  
  return (
    <>
      <section key={id}>
        <header>
          <img src={image} alt="Merengue" />
        </header>
        <body>
          <h3>{name}</h3>
        </body>
      </section>
    </>
  )
}

function AllProducts() {
  
  return (
    <>
      <section id="productos">
        {products.map(product =>
          <CardProduct key={product.id} name={product.name} image={product.image} />)}
      </section>
      
    </>
  )
}

export default AllProducts;