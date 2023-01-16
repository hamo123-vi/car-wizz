import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Arrivals from './components/Arrivals';
import Bills from './components/Bills';
import BlackList from './components/BlackList';
import C2B from './components/C2B';
import Contracts from './components/Contracts';
import Customers from './components/Customers';
import Departures from './components/Departures';
import EditProfile from './components/EditProfile';
import ForgotPassword from './components/ForgotPassword';
import Login from './components/Login';
import Pocetna from './components/Pocetna';
import ReportAllVehicles from './components/ReportAllVehicles';
import ReportByCar from './components/ReportByCar';
import Reports from './components/ReportByCar';
import ReportByCustomer from './components/ReportByCustomer';
import ReportTopClients from './components/ReportTopClients';
import Reservations from './components/Reservations';
import ResetPassword from './components/ResetPassword';
import Settings from './components/Settings';
import Users from './components/Users';
import Vehicles from './components/Vehicles';

function App() {
  return (
    <Router>
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/ponisti-lozinku" element={<ForgotPassword />} />
      <Route exact path="/postavi-novu-lozinku/:token" element={<ResetPassword />} />
      <Route exact path="/pocetna" element={<Pocetna />} />
      <Route exact path="/uredi-profil" element={<EditProfile />} />
      <Route exact path="/rezervacije" element={<Reservations />} />
      <Route exact path="/postavke" element={<Settings />} />
      <Route exact path="/korisnici" element={<Users />} />
      <Route exact path="/izvjestaj-po-vozilu" element={<ReportByCar />} />
      <Route exact path="/izvjestaj-po-klijentu" element={<ReportByCustomer />} />
      <Route exact path="/izvjestaj-sva-vozila" element={<ReportAllVehicles />} />
      <Route exact path="/top-klijenti" element={<ReportTopClients />} />
      <Route exact path="/klijenti" element={<Customers />} />
      <Route exact path="/crna-lista" element={<BlackList />} />
      <Route exact path="/racuni" element={<Bills />} />
      <Route exact path="/ugovori" element={<Contracts />} />
      <Route exact path="/vozila" element={<Vehicles />} />
      <Route exact path="/c2b" element={<C2B />} />
      <Route exact path="/odlazna-vozila" element={<Departures />} />
      <Route exact path="/dolazna-vozila" element={<Arrivals />} />
    </Routes>
  </Router>
  );
}

export default App;
