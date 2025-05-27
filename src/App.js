import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import sidebarItems from './assets/data/sidebarItems';
import HealthStatus from './components/HealthStatus';
import AppointmentStatus from './components/AppointmentStatus';

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="layout">
        <div className="sidebar">
          <Sidebar items={sidebarItems} />
        </div>
        <div className="content-sections">
          <div className="health-vitals"><HealthStatus/></div>
          <div className="appointment-section"><AppointmentStatus /></div>
        </div>
      </div>
    </div>
  );
}

export default App;
