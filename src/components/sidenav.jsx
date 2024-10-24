import React, { useState } from "react";
import "../assets/css/sidenav.css";
import home from "../assets/images/home.png";
import money from "../assets/images/money.png";
import transfer from "../assets/images/transfer.png";
import setting from "../assets/images/setting.png";
import logout from "../assets/images/logout.png";

function Sidenav() {
  // Define state to manage the currently active tab
  const [activeTab, setActiveTab] = useState("Dashboard");

  const openCity = (option) => {
    setActiveTab(option); // Change the active tab
  };

  return (
    <div>
      <div className="tab">
        <h3>VAH</h3>
        <div className="ib">
          <button
            className={`tablinks ${activeTab === "Dashboard" ? "active" : ""}`}
            onClick={() => openCity("Dashboard")}
            id="defaultOpen"
          >
            <span className="i">
              <img src={home} alt="home" />
            </span>
            Dashboard
          </button>
        </div>
        <div className="ib">
          <button
            className={`tablinks ${activeTab === "Transfer" ? "active" : ""}`}
            onClick={() => openCity("Transfer")}
          >
            <span className="i">
              <img src={money} alt="transfer" />
            </span>
            Transfer
          </button>
        </div>
        <div className="ib">
          <button
            className={`tablinks ${
              activeTab === "Transactions" ? "active" : ""
            }`}
            onClick={() => openCity("Transactions")}
          >
            <span className="i">
              <img src={transfer} alt="transactions" />
            </span>
            Transactions
          </button>
        </div>
        <div className="ib2">
        <div className="ib">
          <button
            className={`tablinks ${
              activeTab === "Settings" ? "active" : ""
            }`}
            onClick={() => openCity("Settings")}
          >
            <span className="i">
              <img src={setting} alt="setting" />
            </span>
            Settings
          </button>
        </div>
        <div className="ib">
          <button
            className={`tablinks ${
              activeTab === "Logout" ? "active" : ""
            }`}
            onClick={() => openCity("Logout")}
          >
            <span className="i">
              <img src={logout} alt="logout" />
            </span>
            Logout
          </button>
        </div>
        </div>
        
      </div>
    </div>
  );
}

export default Sidenav;
