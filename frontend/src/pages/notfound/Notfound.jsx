import { Link } from "react-router-dom";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "./notfound.scss";

const Notfound = () => {
  return (
    <div className="notfound">
      <h1 className="info">
        4<SearchOutlinedIcon style={{color: "#ad0000"}} />4
      </h1>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link to="/home">Retour à l&apos;accueil</Link>
    </div>
  );
};

export default Notfound;
