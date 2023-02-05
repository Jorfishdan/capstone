import './Footer.scss';
import account from "../../assets/images/account.png";
import reachOut from "../../assets/images/reachOut.png";
function Footer() {
    return (
    <section className="footer">
        <div className="footer__wrapper">
            <div className="footer__icon-wrapper">
        <img src={account} alt="account icon to learn about your preferences" className="footer__account"></img>
        <img src={reachOut} alt="click here to contact a rep for assistance" className="footer__contact"></img>
        </div>
        <p className="footer__funfact">A chameleon's tongue is as long as its body but can grab prey in a fraction of a second! How fast can you catch something?</p>
        </div>  
    </section>)
}

export default Footer;