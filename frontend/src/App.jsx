import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import Notfound from "./pages/notfound/Notfound";
import Forget from "./pages/forget/Forget";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
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
              // <ProtectedRoute>
                <List />
              // </ProtectedRoute>
            }
          >
            <Route
              path=":id"
              element={
                <ProtectedRoute>
                  <Single />
                </ProtectedRoute>
              }
            />
            <Route
              path="new"
              element={
                <ProtectedRoute>
                  <New />
                </ProtectedRoute>
              }
            />
          </Route>

          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
