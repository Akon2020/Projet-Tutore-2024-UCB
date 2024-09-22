import { Link } from "react-router-dom";
import "./login.scss";

const Login = () => {
  return (
    <div className="loginPage">
      <div className="loginForm">
        <div className="info">
          <h2 className="title">Login | Portail admin</h2>
          <p>Connectez-vous à votre compte pour ne rien rater</p>
        </div>
        <form>
          <div className="inp">
            <label htmlFor="email"></label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="off"
              placeholder="Entrez votre adresse mail"
              className="email"
            />
          </div>
          <div className="inp">
            <label htmlFor="password"></label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Entrez votre mot de passe"
              className="password"
            />
          </div>
          <button type="submit">Connexion</button>
          <div className="inp">
            <p className="forget">
              Mot de passe oublié? <Link to={"/forgot"}>Réinitialisez</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
