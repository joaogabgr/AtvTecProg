import CadastrarClientes from "./components/CadastrarClientes";
import Header from "./components/header";
import ListarClientes from "./components/listarClientes/ListarClientes";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" Component={ListarClientes} />
        <Route path="/clientes" Component={ListarClientes} />
        <Route path="/cadastrar" Component={CadastrarClientes} />
      </Routes>
    </Router>
  );
}

export default App;
