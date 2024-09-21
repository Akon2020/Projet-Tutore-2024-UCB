import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ReportIcon from '@mui/icons-material/Report';
import AssessmentIcon from "@mui/icons-material/Assessment";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import "./sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">SecurityApp</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">SERVICES</p>
          <li>
            <PersonOutlinedIcon className="icon" />
            <span>Utilisateurs</span>
          </li>
          <li>
            <ReportIcon className="icon" />
            <span>Incidents</span>
          </li>
          <li>
            <NotificationsActiveIcon className="icon" />
            <span>Alertes</span>
          </li>
          <li>
            <AssessmentIcon className="icon" />
            <span>Statistique</span>
          </li>
          <p className="title">COMPTE</p>
          <li>
            <AccountCircleIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <SettingsIcon className="icon" />
            <span>Paramètres</span>
          </li>
          <p className="title">QUITTER</p>
          <li>
            <LogoutIcon className="icon" />
            <span>Deconnexion</span>
          </li>
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
