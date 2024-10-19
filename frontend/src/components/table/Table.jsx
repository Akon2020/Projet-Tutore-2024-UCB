import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Me from "../../assets/Me.jpg";
import "./table.scss";

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
      img: "",
      nom: "Benedict Lubembela",
      typeAlerte: "Vol",
      date: "17/09/2024 18:33:06",
      lieu: "Place Mulamba",
      status: "Pending",
    },
    {
      id: 3,
      img: "",
      nom: "Celestine Muchaguzi",
      typeAlerte: "Incendie",
      date: "17/09/2024 18:35:25",
      lieu: "Place Mulamba",
      status: "Rejeted",
    },
    {
      id: 4,
      img: "",
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
                <button type="button" className="buttonBtn">
                  Afficher
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComp;
