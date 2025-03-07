import { NavLink } from "react-router-dom";
import "../Styles/SideBar.css"; // Import layout CSS

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Admin</h2>
      <ul className="sidebar-nav">
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>📊 Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/rooms" className={({ isActive }) => (isActive ? "active" : "")}>🏠 Rooms</NavLink>
        </li>
        <li>
          <NavLink to="/reports" className={({ isActive }) => (isActive ? "active" : "")}>📑 Reports</NavLink>
        </li>
        <li>
          <NavLink to="/settings" className={({ isActive }) => (isActive ? "active" : "")}>⚙️ Settings</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

