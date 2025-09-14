import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../../utils/axios";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Datatable = () => {
  const [listeUser, setListeUser] = useState([]);
  const [open, setOpen] = useState(false);
  const [newUser, setNewUser] = useState({
    nom: "",
    post_nom: "",
    prenom: "",
    sexe: "",
    email: "",
    numero_tel: "",
    type_utilisateur: "",
  });

  useEffect(() => {
    axios
      .get("/admin/users")
      .then((result) => {
        const dataWithId = result.data.Result.map((user, index) => ({
          id: index + 1,
          ...user,
        }));
        setListeUser(dataWithId);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddUser = () => {
    axios
      .post("/admin/users/add", newUser)
      .then((response) => {
        setListeUser((prev) => [...prev, { id: prev.length + 1, ...newUser }]);
        handleClose();
      })
      .catch((err) => console.log(err));
  };

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

  const utilisateursCol = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "nom",
      headerName: "Nom Complet",
      width: 250,
      renderCell: (params) => {
        return (
          <div className="nomProfil">
            <img className="profilImg" src={params.row.img} alt="Profile" />
            {params.row.nom || ""} {params.row.post_nom || ""}{" "}
            {params.row.prenom || ""}
          </div>
        );
      },
    },
    { field: "sexe", headerName: "Sexe", width: 70 },
    { field: "email", headerName: "Email", width: 230 },
    { field: "numero_tel", headerName: "Téléphone", width: 150 },
    {
      field: "type_utilisateur",
      headerName: "Type d'utilisateur",
      width: 150,
      renderCell: (params) => {
        return (
          <div className={`typeUtil ${params.row.type_utilisateur} `}>
            {params.row.type_utilisateur}
          </div>
        );
      },
    },
  ];

  const paginationModel = { page: 0, pageSize: 5 };

  return (
    <div className="datatable">
      <div className="datatableHeader">
        <Button
          variant="contained"
          color="primary"
          onClick={handleOpen}
          style={{ marginBottom: "10px" }}
        >
          Ajouter un utilisateur
        </Button>
      </div>
      <Paper sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={listeUser}
          columns={utilisateursCol.concat(action)}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          sx={{ border: 0 }}
        />
      </Paper>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <h2>Ajouter un utilisateur</h2>
          <form>
            <TextField
              fullWidth
              margin="normal"
              label="Nom"
              name="nom"
              value={newUser.nom}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Post-nom"
              name="post_nom"
              value={newUser.post_nom}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Prénom"
              name="prenom"
              value={newUser.prenom}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Sexe"
              name="sexe"
              value={newUser.sexe}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Email"
              name="email"
              value={newUser.email}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Téléphone"
              name="numero_tel"
              value={newUser.numero_tel}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Type d'utilisateur"
              name="type_utilisateur"
              value={newUser.type_utilisateur}
              onChange={handleChange}
            />
            <Button
              variant="contained"
              color="success"
              onClick={handleAddUser}
              style={{ marginTop: "10px" }}
            >
              Ajouter
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default Datatable;
