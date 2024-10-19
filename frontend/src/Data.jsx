import Me from "./assets/Me.jpg";

export const utilisateursCol = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "nom",
    headerName: "Nom Complet",
    width: 250,
    renderCell: (params) => {
      return (
        <div className="nomProfil">
          <img className="profilImg" src={params.row.img} alt="Profile" />
          {params.row.nomComplet}
        </div>
      );
    },
  },
  { field: "sexe", headerName: "Sexe", width: 70 },
  { field: "email", headerName: "Email", width: 230 },
  { field: "telephone", headerName: "Téléphone", width: 150 },
  {
    field: "type",
    headerName: "Type d'utilisateur",
    width: 150,
    renderCell: (params) => {
      return (
        <div className={`typeUtil ${params.row.typeUtilisateur} `}>
          {params.row.typeUtilisateur}
        </div>
      );
    },
  },
];

export const utilisateurs = [
  {
    id: 1,
    nomComplet: "Akonkwa Ushindi Isaac",
    img: Me,
    sexe: "M",
    email: "akonkwaushindi@gmail.com",
    telephone: "+243970137369",
    typeUtilisateur: "Super-admin",
  },
  {
    id: 2,
    nomComplet: "Benedict Lubembela",
    img: "",
    sexe: "M",
    email: "mahangobenedict@gmail.com",
    telephone: "+243987654321",
    typeUtilisateur: "Admin",
  },
  {
    id: 3,
    nomComplet: "Celestine Muchaguzi",
    img: "",
    sexe: "F",
    email: "celestinemuchaguzi@gmail.com",
    telephone: "+243123456789",
    typeUtilisateur: "Admin",
  },
  {
    id: 4,
    nomComplet: "Wani Barhegine Totoro",
    img: "",
    sexe: "M",
    email: "wanimaroy@gmail.com",
    telephone: "+243999900225",
    typeUtilisateur: "Admin",
  },
  {
    id: 5,
    nomComplet: "Testy Test",
    img: "",
    sexe: "M",
    email: "testy@test.com",
    telephone: "+243112233445",
    typeUtilisateur: "Simple",
  },
];
