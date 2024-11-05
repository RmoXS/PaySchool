import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Dashboard from "./views/Admin/Dashboard"
import LoginAdmin from "./views/Admin/Auth/LoginAdmin"
import AddUserSiswa from "./components/AddUserSiswa"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login-admin" element={<LoginAdmin />} />
        <Route path="/tambah-user" element={<AddUserSiswa />}/>
      </Routes>
    </Router>
  )
}

export default App
