import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./table.scss";

const TableComp = () => {
  const rows = [
    {
      id: 1,
      product: "Donnée Tab",
      customer: "Moi même",
      data: "17 Mars",
      amount: 785,
      methods: "cash on delivery",
      status: "Approved",
    },
    {
      id: 2,
      product: "Donnée Tab",
      customer: "Moi même",
      data: "17 Mars",
      amount: 785,
      methods: "cash on delivery",
      status: "Approved",
    },
    {
      id: 3,
      product: "Donnée Tab",
      customer: "Moi même",
      data: "17 Mars",
      amount: 785,
      methods: "cash on delivery",
      status: "Approved",
    },
    {
      id: 4,
      product: "Donnée Tab",
      customer: "Moi même",
      data: "17 Mars",
      amount: 785,
      methods: "cash on delivery",
      status: "Approved",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>En-tête 1</TableCell>
            <TableCell align="right">En-tête 1</TableCell>
            <TableCell align="right">En-tête 1</TableCell>
            <TableCell align="right">En-tête 1</TableCell>
            <TableCell align="right">En-tête 1</TableCell>
            <TableCell align="right">En-tête 1</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell className="tableCell" align="right">
                {row.product}
              </TableCell>
              <TableCell className="tableCell" align="right">
                {row.product}
              </TableCell>
              <TableCell className="tableCell" align="right">
                {row.product}
              </TableCell>
              <TableCell className="tableCell" align="right">
                {row.product}
              </TableCell>
              <TableCell className="tableCell" align="right">
                {row.product}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComp;
