import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import "./home.scss";
import Feature from "../../components/feature/Feature";
import Graphique from "../../components/graphique/Graphique";
import TableComp from "../../components/table/Table";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="admin" />
          <Widget type="user" />
          <Widget type="alerteRecu" />
          <Widget type="alerteTraiter" />
        </div>
        <div className="graphiques">
          <Feature />
          <Graphique aspect={2 / 1} titre={"Analyse des derniers 12 Mois"} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Alertes récentes</div>
          <TableComp />
        </div>
      </div>
    </div>
  );
};

export default Home;
