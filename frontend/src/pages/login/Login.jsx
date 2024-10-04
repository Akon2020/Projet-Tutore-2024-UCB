import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../utils/axios";
import "./login.scss";

const Login = () => {
  const [values, setValues] = useState({ email: "", mot_de_passe: "" });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const connexion = (event) => {
    event.preventDefault();
    axios
      .post("/auth/adminlogin", values)
      .then((result) => {
        if (result.data.loginStatus) {
          navigate("/home");
        } else {
          setError(result.data.Error);
          setTimeout(() => {
            setError(null);
          }, 1700);
        }
      })
      .catch((err) => {
        console.error(err);
        setError("Erreur lors de la connexion, veuillez réessayer.");
        setTimeout(() => {
          setError(null);
        }, 1700);
      });
  };

  return (
    <div className="loginPage">
      <div className="loginForm">
        {error && (
          <div className="erreur" role="alert">
            {error}
          </div>
        )}
        <div className="info">
          <h2 className="title">Login | Portail admin</h2>
          <p>Connectez-vous à votre compte pour ne rien rater</p>
        </div>
        <form onSubmit={connexion}>
          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="off"
            placeholder="Entrez votre adresse mail"
            className="email"
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          />
          <label htmlFor="mot_de_passe"></label>
          <input
            type="password"
            id="mot_de_passe"
            name="mot_de_passe"
            placeholder="Entrez votre mot de passe"
            className="password"
            onChange={(e) =>
              setValues({ ...values, mot_de_passe: e.target.value })
            }
          />
          <button type="submit">Connexion</button>
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
