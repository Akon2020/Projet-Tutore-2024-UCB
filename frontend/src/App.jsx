import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import Notfound from "./pages/notfound/Notfound";
import Forget from "./pages/forget/Forget";
import { userInput } from "./FormSource";
import Alerte from "./pages/alerte/Alerte";
import Singlealerte from "./pages/singlealerte/Singlealerte";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forget" element={<Forget />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/users"
            element={
              <ProtectedRoute>
                <List />
              </ProtectedRoute>
            }
          />
          <Route
            path="/users/new"
            element={
              <ProtectedRoute>
                <New inputs={userInput} title="Ajouter un nouvel utilisateur" />
              </ProtectedRoute>
            }
          />
          <Route
            path="/users/:id"
            element={
              <ProtectedRoute>
                <Single />
              </ProtectedRoute>
            }
          />
          <Route
            path="/alertes"
            element={
              <ProtectedRoute>
                <Alerte />
              </ProtectedRoute>
            }
          />
          <Route
            path="/alertes/:id"
            element={
              <ProtectedRoute>
                <Singlealerte />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
