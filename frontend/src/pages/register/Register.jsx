import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../utils/axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./register.scss";

const Register = () => {
  const [values, setValues] = useState({
    nom: "",
    email: "",
    mot_de_passe: "",
  });
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [sessionId, setSessionId] = useState(null);
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const connexion = (event) => {
    event.preventDefault();

    axios
      .post("/auth/create", { ...values, session_id: sessionId })
      .then((result) => {
        const data = result.data;

        if (data.session_id && !sessionId) {
          setSessionId(data.session_id); // stocker la première fois
        }

        if (data.success) {
          // si succès → redirection
          navigate(data.redirect || "/");
        } else {
          setError(data.message || data.Error);
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
          <p>Créez votre compte avec votre icloud et son mot de passe</p>
        </div>
        <form onSubmit={connexion}>
          <input
            type="text"
            placeholder="Entrez votre nom complet"
            className="email"
            onChange={(e) => setValues({ ...values, nom: e.target.value })}
          />
          <input
            type="email"
            placeholder="Entrez votre icloud"
            className="email"
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          />
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Entrez votre mot de passe"
              className="password"
              onChange={(e) =>
                setValues({ ...values, mot_de_passe: e.target.value })
              }
            />
            <span
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
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
