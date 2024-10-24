import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Me from "../../assets/Me.jpg";
import "./table.scss";
import { Link } from "react-router-dom";

const TableComp = () => {
  const rows = [
    {
      id: 1,
      img: Me,
      nom: "Akonkwa Ushindi",
      typeAlerte: "Accident",
      date: "17/09/2024 18:28:15",
      lieu: "Place Mulamba",
      status: "Approved",
    },
    {
      id: 2,
      img: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_400,q_auto:good,w_400/v1/gcs/platform-data-goog/avatars/benedict_lubembela.jpg",
      nom: "Benedict Lubembela",
      typeAlerte: "Vol",
      date: "17/09/2024 18:33:06",
      lieu: "Place Mulamba",
      status: "Pending",
    },
    {
      id: 3,
      img: "https://scontent-mba1-1.xx.fbcdn.net/v/t1.6435-9/134941100_836295360556796_5729673793920723141_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeE4izX4NZl_R4n24nG8s1_8DrIdCgJyK4AOsh0KAnIrgDLUNGbSjvWxYdeCTMgNT5qu-BAmNR8QWsVaKQQVspus&_nc_ohc=4ulceocM2iYQ7kNvgFPZkLF&_nc_zt=23&_nc_ht=scontent-mba1-1.xx&_nc_gid=AMioDuZDH4c8fyfyfajy6WY&oh=00_AYCLBlnyOqhhTDtCfG2qgV-jgYcKCgI028pgTnR6-X32mw&oe=673D812F",
      nom: "Celestine Muchaguzi",
      typeAlerte: "Incendie",
      date: "17/09/2024 18:35:25",
      lieu: "Place Mulamba",
      status: "Rejeted",
    },
    {
      id: 4,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShehZOPf0rlKi_ta-3D0HUMmiBd6Gnivyeog&s",
      nom: "Wani Barhegine",
      typeAlerte: "Emeute",
      date: "17/09/2024 18:42:54",
      lieu: "Place Mulamba",
      status: "Pending",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Nom Complet</TableCell>
            <TableCell>Type d&apos;alerte</TableCell>
            <TableCell>Date-Heure</TableCell>
            <TableCell>Lieu</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="Profile" className="image" />
                  {row.nom}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.typeAlerte}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.lieu}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
              <TableCell className="tableCell">
                <Link
                  to={`/alertes/${row.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <button type="button" className="buttonBtn">
                    Afficher
                  </button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComp;
