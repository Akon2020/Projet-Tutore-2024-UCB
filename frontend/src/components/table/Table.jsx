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
      product: "Donnée Tab",
      customer: "Moi même",
      data: "17 Mars",
      amount: 785,
      methods: "cash on delivery",
      status: "Approved",
    },
    {
      id: 2,
      img: Me,
      product: "Donnée Tab",
      customer: "Moi même",
      data: "17 Mars",
      amount: 785,
      methods: "cash on delivery",
      status: "Pending",
    },
    {
      id: 3,
      img: Me,
      product: "Donnée Tab",
      customer: "Moi même",
      data: "17 Mars",
      amount: 785,
      methods: "cash on delivery",
      status: "Approved",
    },
    {
      id: 4,
      img: Me,
      product: "Donnée Tab",
      customer: "Moi même",
      data: "17 Mars",
      amount: 785,
      methods: "cash on delivery",
      status: "Pending",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>En-tête 1</TableCell>
            <TableCell>En-tête 1</TableCell>
            <TableCell>En-tête 1</TableCell>
            <TableCell>En-tête 1</TableCell>
            <TableCell>En-tête 1</TableCell>
            <TableCell>En-tête 1</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="imageAvec" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.product}</TableCell>
              <TableCell className="tableCell">{row.product}</TableCell>
              <TableCell className="tableCell">{row.product}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComp;
