import { useState } from "react";
import "./form.scss";

const Form = ({ inputs, title }) => {
  const [formData, setFormData] = useState({});

  // Fonction de gestion des changements dans les champs du formulaire
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Fonction de gestion de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Ici, tu peux envoyer les données à une API ou faire une autre action
  };

  return (
    <div className="formPage">
      <div className="addingForm">
        <div className="info">
          <h2 className="title">{title}</h2>
          <p>
            Vous voulez ajouter un nouvel utilisateur au système ? Sans
            problème, vous êtes au bon endroit.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          {inputs && inputs.length > 0 ? (
            inputs.map((input) => (
              <div className="formInput" key={input.id}>
                <label htmlFor={input.label}>{input.label}</label>
                <input
                  type={input.type}
                  id={input.label}
                  name={input.label}
                  autoComplete="off"
                  placeholder={input.placeholder}
                  className={input.label}
                  onChange={handleChange} // Ajout de la gestion des changements
                />
              </div>
            ))
          ) : (
            <p>Aucun champ à afficher</p>
          )}
          <button type="submit">Enregistrer</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
