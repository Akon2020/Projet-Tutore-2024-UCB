import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ReportIcon from "@mui/icons-material/Report";
import AssessmentIcon from "@mui/icons-material/Assessment";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import "./sidebar.scss";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/home" style={{ textDecoration: "none" }}>
          <span className="logo">SecurityApp</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/home">
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">SERVICES</p>
          <Link to="/users">
            <li>
              <PersonOutlinedIcon className="icon" />
              <span>Utilisateurs</span>
            </li>
          </Link>
          <Link to="/incidents">
            <li>
              <ReportIcon className="icon" />
              <span>Incidents</span>
            </li>
          </Link>
          <Link to="/alertes">
          <li>
            <NotificationsActiveIcon className="icon" />
            <span>Alertes</span>
          </li>
          </Link>
          <Link to="/stat">
          <li>
            <AssessmentIcon className="icon" />
            <span>Statistique</span>
          </li>
          </Link>
          <p className="title">COMPTE</p>
          <Link to="/profile">
          <li>
            <AccountCircleIcon className="icon" />
            <span>Profile</span>
          </li>
          </Link>
          <li>
            <SettingsIcon className="icon" />
            <span>Paramètres</span>
          </li>
          <p className="title">QUITTER</p>
          <Link to="/home">
          <li>
            <LogoutIcon className="icon" />
            <span>Deconnexion</span>
          </li>
          </Link>
          <p className="title">THEMES</p>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
