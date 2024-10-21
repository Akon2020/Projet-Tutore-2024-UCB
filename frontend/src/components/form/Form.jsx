import "./form.scss";

const Form = () => {
  return (
    <div className="formPage">
      <div className="addingForm">
        <div className="info">
          <h2 className="title">Ajouter un nouvel utilisateur</h2>
          <p>
            Vous voulez ajouter un nouvel utilisateur au système? Sans problème,
            vous êtes au bon endroit
          </p>
        </div>
        <form>
          <label htmlFor="nom"></label>
          <input
            type="text"
            id="nom"
            name="nom"
            autoComplete="off"
            placeholder="Entrez le nom de l'utilisateur"
            className="nom"
          />
          <label htmlFor="postNom"></label>
          <input
            type="text"
            id="postNom"
            name="postNom"
            autoComplete="off"
            placeholder="Entrez le post-nom de l'utilisateur"
            className="postNom"
          />
          <label htmlFor="prenom"></label>
          <input
            type="text"
            id="prenom"
            name="prenom"
            autoComplete="off"
            placeholder="Entrez le prénom de l'utilisateur"
            className="prenom"
          />
          <label htmlFor="dateNaissance"></label>
          <input
            type="date"
            id="dateNaissance"
            name="dateNaissance"
            autoComplete="off"
            placeholder="Entrez la date de naissance de l'utilisateur"
            className="dateNaissance"
          />
          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="off"
            placeholder="Entrez l'adresse mail de l'utilisateur"
            className="email"
          />
          <label htmlFor="mot_de_passe"></label>
          <input
            type="password"
            id="mot_de_passe"
            name="mot_de_passe"
            placeholder="Entrez le mot de passe de l'utilisateur"
            className="password"
          />
          <button type="submit">Enregistrer</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
