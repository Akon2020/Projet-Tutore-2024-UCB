import { Link } from "react-router-dom";
import "./forget.scss";

const Forget = () => {
  return (
    <div className="loginPage">
      <div className="loginForm">
        <div className="info">
          <h2 className="title">Mot de passe oublié</h2>
          <p>Récuperez votre compte pour ne rien rater</p>
        </div>
        <form>
          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="off"
            placeholder="Entrez votre adresse mail"
            className="email"
          />
          <button>Soumettre votre demande</button>
        </form>
        <div className="inp">
          <p className="forget">
            Vous avez un compte? <Link to={"/"}>Connectez-vous</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Forget;
