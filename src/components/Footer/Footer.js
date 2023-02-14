import "./Footer.scss";
import copyright from "../../assets/images/copyright.png";
function Footer() {
  return (
    <section className="footer">
      <div className="footer__copyright-wrapper">
        <p className="footer__copyright">Teacher's Pet</p>
        <img
          src={copyright}
          alt="copyright symbol"
          className="footer__copyright-img"
        />
      </div>
    </section>
  );
}

export default Footer;
