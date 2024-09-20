import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import Notfound from "./pages/notfound/Notfound";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Login />} />
            <Route path="home" element={<Home />} />
          </Route>

          <Route path="users">
            <Route index element={<List />} />
            <Route path=":id" element={<Single />} />
            <Route path="new" element={<New />} />
          </Route>
          <Route path="*" element={<Notfound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
