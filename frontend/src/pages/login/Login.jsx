import { Link } from "react-router-dom";
import "./login.scss";

const Login = () => {
  const handleSubmit = () => {
    alert("submitted");
  };
  return (
    <div className="loginPage">
      <div className="loginForm">
        <div className="info">
          <h2 className="title">Login | Portail admin</h2>
          <p>Connectez-vous à votre compte pour ne rien rater</p>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="off"
            placeholder="Entrez votre adresse mail"
            className="email"
          />
          <label htmlFor="password"></label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Entrez votre mot de passe"
            className="password"
          />
          <button>Connexion</button>
        </form>
        <div className="inp">
          <p className="forget">
            Mot de passe oublié? <Link to={"/forget"}>Réinitialisez</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
