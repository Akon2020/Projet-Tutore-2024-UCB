import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../utils/axios";
import "./register.scss";

const Register = () => {
  const [values, setValues] = useState({ email: "", mot_de_passe: "" });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const connexion = (event) => {
    event.preventDefault();
    axios
      .post("/auth/createadmin", values)
      .then((result) => {
        if (result.data.success) {
          navigate("/");
        } else {
          setError(result.data.Error);
          setTimeout(() => {
            setError(null);
          }, 1700);
        }
      })
      .catch((err) => {
        console.error(err);
        setError("Erreur lors de l'inscription, veuillez réessayer.");
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
          <h2 className="title">Création | Portail admin</h2>
          <p>
            Créez votre compte avec votre adresse mail et son mot de passe
          </p>
        </div>
        <form onSubmit={connexion}>
          <label htmlFor="nom"></label>
          <input
            type="text"
            id="nom"
            name="nom"
            autoComplete="off"
            placeholder="Entrez votre nom complet"
            className="email"
            onChange={(e) => setValues({ ...values, nom: e.target.value })}
          />
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
          <button type="submit">Inscription</button>
        </form>
        <div className="inp">
          <p className="forget">
            Vous avez déjà un compte? <Link to={"/"}>Connectez-vous</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
