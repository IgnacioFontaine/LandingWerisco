import "./footer.css"

function Footer() {
  
  return (
    < div className="footer-werisco">
      <section >
        <div >
          <h2 id="contactos" className="footer-title"><strong >Werisco &#169;</strong></h2>
        </div>
        <p>Contáctanos por cualquiera de las vías que te dejamos aquí!</p>
        <div className="footer-link-contenedor">
          <a href="" target="_blank">Mail</a>
          <a href="" target="_blank">Whatsapp</a>
          <a href="https://www.instagram.com/werisco_/" target="_blank" className="footer-link">Instagram</a>
          <a href="https://www.facebook.com/Werisco" target="_blank" className="footer-link">FaceBook</a>
        </div>
      </section>
    </ div>
  )
}

export default Footer;