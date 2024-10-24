import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import TableComp from "../../components/table/Table";
import "./alerte.scss";

const Alerte = () => {
  return (
    <div className="alerte">
      <Sidebar />
      <div className="alerteContainer">
        <Navbar />
        <h2 className="title">Liste des alertes réçus</h2>
        <TableComp />
      </div>
    </div>
  );
};

export default Alerte;
