import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./single.scss";
import Me from "../../assets/Me.jpg";
import Graphique from "../../components/graphique/Graphique";
import TableComp from "../../components/table/Table";

const Single = () => {
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
              <img src={Me} alt="Profile" className="itemImg" />
              <div className="details">
                <h2 className="itemTitle">Akonkwa Ushindi</h2>
                <div className="detailItem">
                  <span className="itemKey">Email: </span>
                  <span className="itemValue">akonkwaushindi@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Téléphone: </span>
                  <span className="itemValue">+243 970 137 369</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Type: </span>
                  <span className="itemValue">Super-admin</span>
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
