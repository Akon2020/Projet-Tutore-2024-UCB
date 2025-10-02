import Me from "./assets/Me.jpg";
import Noavatar from "./assets/Noavatar.jpg";

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
    img: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_400,q_auto:good,w_400/v1/gcs/platform-data-goog/avatars/benedict_lubembela.jpg",
    sexe: "M",
    email: "mahangobenedict@gmail.com",
    telephone: "+243987654321",
    typeUtilisateur: "Admin",
  },
  {
    id: 3,
    nomComplet: "Celestine Muchaguzi",
    img: "https://scontent-mba1-1.xx.fbcdn.net/v/t1.6435-9/134941100_836295360556796_5729673793920723141_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeE4izX4NZl_R4n24nG8s1_8DrIdCgJyK4AOsh0KAnIrgDLUNGbSjvWxYdeCTMgNT5qu-BAmNR8QWsVaKQQVspus&_nc_ohc=4ulceocM2iYQ7kNvgFPZkLF&_nc_zt=23&_nc_ht=scontent-mba1-1.xx&_nc_gid=AMioDuZDH4c8fyfyfajy6WY&oh=00_AYCLBlnyOqhhTDtCfG2qgV-jgYcKCgI028pgTnR6-X32mw&oe=673D812F",
    sexe: "F",
    email: "celestinemuchaguzi@gmail.com",
    telephone: "+243123456789",
    typeUtilisateur: "Admin",
  },
  {
    id: 4,
    nomComplet: "Wani Barhegine Totoro",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShehZOPf0rlKi_ta-3D0HUMmiBd6Gnivyeog&s",
    sexe: "M",
    email: "wanimaroy@gmail.com",
    telephone: "+243999900225",
    typeUtilisateur: "Admin",
  },
  {
    id: 5,
    nomComplet: "Testy Test",
    img: Noavatar,
    sexe: "M",
    email: "testy@test.com",
    telephone: "+243112233445",
    typeUtilisateur: "Simple",
  },
];

export const alertes = [
  {
    id: 1,
    img: Me,
    nom: "Akonkwa Ushindi",
    typeAlerte: "Accident",
    date: "17/09/2025 18:28:15",
    lieu: "Place Mulamba",
    status: "Approved",
  },
  {
    id: 2,
    img: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_400,q_auto:good,w_400/v1/gcs/platform-data-goog/avatars/benedict_lubembela.jpg",
    nom: "Benedict Lubembela",
    typeAlerte: "Vol",
    date: "17/09/2025 18:33:06",
    lieu: "Place Mulamba",
    status: "Pending",
  },
  {
    id: 3,
    img: "https://scontent-mba1-1.xx.fbcdn.net/v/t1.6435-9/134941100_836295360556796_5729673793920723141_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeE4izX4NZl_R4n24nG8s1_8DrIdCgJyK4AOsh0KAnIrgDLUNGbSjvWxYdeCTMgNT5qu-BAmNR8QWsVaKQQVspus&_nc_ohc=4ulceocM2iYQ7kNvgFPZkLF&_nc_zt=23&_nc_ht=scontent-mba1-1.xx&_nc_gid=AMioDuZDH4c8fyfyfajy6WY&oh=00_AYCLBlnyOqhhTDtCfG2qgV-jgYcKCgI028pgTnR6-X32mw&oe=673D812F",
    nom: "Celestine Muchaguzi",
    typeAlerte: "Incendie",
    date: "17/09/2025 18:35:25",
    lieu: "Place Mulamba",
    status: "Rejeted",
  },
  {
    id: 4,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShehZOPf0rlKi_ta-3D0HUMmiBd6Gnivyeog&s",
    nom: "Wani Barhegine",
    typeAlerte: "Emeute",
    date: "17/09/2025 18:42:54",
    lieu: "Place Mulamba",
    status: "Pending",
  },
];