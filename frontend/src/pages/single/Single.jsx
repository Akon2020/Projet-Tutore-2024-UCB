import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./single.scss";
import Me from "../../assets/Me.jpg";
import Graphique from "../../components/graphique/Graphique";
import TableComp from "../../components/table/Table";
import { utilisateurs } from "../../Data";
import { useParams } from "react-router-dom";

const Single = () => {
  const { id } = useParams();
  const user = utilisateurs.find((i) => i.id === parseInt(id));
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="modifierBtn">Modifier</div>
            <h2 className="title">Information</h2>
            <div className="item">
              <img src={user.img} alt="Profile" className="itemImg" />
              <div className="details">
                <h2 className="itemTitle">{user.nomComplet}</h2>
                <div className="detailItem">
                  <span className="itemKey">Email: </span>
                  <span className="itemValue">{user.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Téléphone: </span>
                  <span className="itemValue">{user.telephone}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Type: </span>
                  <span className="itemValue">{user.typeUtilisateur}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Pays: </span>
                  <span className="itemValue">RDC</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Graphique
              aspect={3 / 1}
              titre={"Interaction de l'utilisateur des 12 derniers mois"}
            />
          </div>
        </div>
        <div className="bottom">
          <h2 className="title">Alertes de l&apos;utilisateur</h2>
          <TableComp/>
        </div>
      </div>
    </div>
  );
};

export default Single;
