import "./singlealerte.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Noavatar from "../../assets/Noavatar.jpg";
// import Graphique from "../../components/graphique/Graphique";
import TableComp from "../../components/table/Table";
import { alertes } from "../../Data";
import { useParams } from "react-router-dom";

const Singlealerte = () => {
  const { id } = useParams();
  const user = alertes.find((i) => i.id === parseInt(id));
  return (
    <div className="singlealerte">
      <Sidebar />
      <div className="singlealerteContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="modifierBtn">Modifier</div>
            <h2 className="title">Information sur l&apos;alerte reçu</h2>
            <div className="item">
              <img
                src={user.img ? user.img : Noavatar}
                alt="Profile"
                className="itemImg"
              />
              <div className="details">
                <h2 className="itemTitle">{user.nom}</h2>
                <div className="detailItem">
                  <span className="itemKey">Type d&apos;alerte: </span>
                  <span className="itemValue">{user.typeAlerte}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Date: </span>
                  <span className="itemValue">{user.date}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Lieu: </span>
                  <span className="itemValue">{user.lieu}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Status: </span>
                  <span className="itemValue">{user.status}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            {/* <Graphique
              aspect={3 / 1}
              titre={"Localisation du lieu de l'incident"}
            /> */}
            <h2 className="title">Localisation du lieu de l&apos;incident</h2>
          </div>
        </div>
        <div className="bottom">
          <h2 className="title">Alertes de l&apos;utilisateur</h2>
          <TableComp />
        </div>
      </div>
    </div>
  );
};

export default Singlealerte;
