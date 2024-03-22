import "./footer.css"

function Footer() {
  
  return (
    < div className="footer-werisco">
      <section >
        <div >
          <h2 id="contactos" className="footer-title"><strong >WERISCO</strong></h2>
        </div>
        <div className="footer-link-contenedor">
          <a href="mailto:marcelofontaine@hotmail.com" target="_blank" ><i className="fa fa-envelope email-icon"></i></a>
          <a href="https://wa.me/+54 9 3513 85-8318" target="_blank" className="fa fa-whatsapp"></a>
          <a href="https://www.facebook.com/Werisco" target="_blank" className="fa fa-facebook"></a>
          <a href="https://www.instagram.com/werisco_/" target="_blank" className="fa fa-instagram"></a>
          <h5>marcelofontaine@hotmail.com</h5>
          <h5>Todos los derechos reservados Werisco &#169; --  2024</h5>
        </div>
      </section>
    </ div>
  )
}

export default Footer;