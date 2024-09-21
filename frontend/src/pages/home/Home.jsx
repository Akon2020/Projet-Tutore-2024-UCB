import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import "./home.scss";

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
      </div>
    </div>
  );
};

export default Home;
