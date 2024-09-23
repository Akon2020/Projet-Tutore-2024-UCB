import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./feature.scss";

const Feature = () => {
  return (
    <div className="feature">
      <div className="top">
        <h1 className="title">Cas Traités</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="circ">
          <CircularProgressbar value={70} text="70%" strokeWidth={5} />
        </div>
        <p className="title">Cas traité(s) aujourd&apos;hui</p>
        <p className="nombre">25</p>
        <p className="desc">
          Ici, le nombre des cas déjà traités aujourd&apos;hui. Le cas en cours
          de traitement ne sont pas inclus
        </p>
        <div className="stat">
          <div className="item">
            <div className="itemTitre">Aujourd&apos;hui</div>
            <div className="itemResultat positive">
              <KeyboardArrowUpIcon fontSize="small" />
              <div className="resultat">12</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitre">Semaine dernière</div>
            <div className="itemResultat negative">
              <KeyboardArrowDownIcon fontSize="small" />
              <div className="resultat">12</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitre">Mois dernier</div>
            <div className="itemResultat positive">
              <KeyboardArrowUpIcon fontSize="small" />
              <div className="resultat">12</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
