import "./NotFound.scss"
import dog from "../../assets/images/dog3.gif";
function NotFound() {
    return(<>
    <div className="notfound">
    <h1 className="notfound__title">Hmmm...we can't find that page. That's ruff...</h1>
    <img src={dog} alt="dog gif" className="notfound__gif" />
    </div>
    </>)
}

export default NotFound;