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
          <h3>Whatsapp: +54 9 3513 85-8318</h3>
          <a href="" target="_blank">✉</a>
          <a href="https://www.instagram.com/werisco_/" target="_blank" className="footer-link">Instagram</a>
          <a href="https://www.facebook.com/Werisco" target="_blank" className="footer-link">FaceBook</a>
        </div>
      </section>
    </ div>
  )
}

export default Footer;