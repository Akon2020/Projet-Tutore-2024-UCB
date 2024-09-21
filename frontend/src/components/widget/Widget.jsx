import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import "./widget.scss";

const Widget = () => {
  return (
    <div className="widget">
      <div className="left">
        <div className="title">Utilisateurs</div>
        <div className="compteur">3456</div>
        <div className="link">Tout voir</div>
      </div>
      <div className="right">
        <div className="pourcent positive">
          <KeyboardArrowUpIcon />
          20%
        </div>
        <PersonOutlinedIcon className="icon" />
      </div>
    </div>
  );
};

export default Widget;
