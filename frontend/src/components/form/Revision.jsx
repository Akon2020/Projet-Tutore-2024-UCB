import { useState } from "react";
import "./form.scss";

const Form = ({ inputs, title }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
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
                  onChange={handleChange}
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
