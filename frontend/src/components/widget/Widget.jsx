import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import DoneAllOutlinedIcon from "@mui/icons-material/DoneAllOutlined";
import "./widget.scss";

// eslint-disable-next-line react/prop-types
const Widget = ({ type }) => {
  const diff = 20;
  let data;
  switch (type) {
    case "admin":
      data = {
        title: "Admin",
        compte: 3,
        link: "Tout voir",
        icon: (
          <AdminPanelSettingsOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "user":
      data = {
        title: "Utilisateurs",
        compte: 5,
        link: "Tout voir",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "goldenrod",
              backgroundColor: "rgba(218, 165, 32, 0.2)",
            }}
          />
        ),
      };
      break;
    case "alerteRecu":
      data = {
        title: "Alertes Reçues",
        compte: 15,
        link: "Tout voir",
        icon: (
          <NotificationsActiveOutlinedIcon
            className="icon"
            style={{
              color: "purple",
              backgroundColor: "rgba(128, 0, 128, 0.2)",
            }}
          />
        ),
      };
      break;
    case "alerteTraiter":
      data = {
        title: "Alertes Traitées",
        compte: 2,
        link: "Tout voir",
        icon: (
          <DoneAllOutlinedIcon
            className="icon"
            style={{
              color: "green",
              backgroundColor: "rgba(0, 128, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }
  return (
    <div className="widget">
      <div className="left">
        <div className="title">{data.title}</div>
        <div className="compteur">{data.compte}</div>
        <div className="link">{data.link}</div>
      </div>
      <div className="right">
        <div className="pourcent positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
