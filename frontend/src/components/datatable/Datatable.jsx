import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { utilisateursCol, utilisateurs } from "../../Data";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

const Datatable = () => {
  const action = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="colAction">
            <Link
              to={`/users/${params.row.id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="afficherBtn">Afficher</div>
            </Link>
            <div className="supprimerBtn">Supprimer</div>
          </div>
        );
      },
    },
  ];
  const paginationModel = { page: 0, pageSize: 5 };
  return (
    <div className="datatable">
      <Paper sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={utilisateurs}
          columns={utilisateursCol.concat(action)}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          sx={{ border: 0 }}
        />
      </Paper>
    </div>
  );
};

export default Datatable;
