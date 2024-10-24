import React from "react";
import Sidenav from "./sidenav";
import AccountCard from "./AccountCard";
import CreditCard from "./CreditCard";
import "../assets/css/accounts.css";
import man from "../assets/images/man.png";
import Transactions from "./Transactions";

function Dashboard(){
    return (
      <div className="main-container">
        <div>
          <Sidenav />
        </div>
        <div className="top-container">
          <h1>Dashboard</h1>
          <div className="inner-container">
            <img src={man} alt="profile" />
            <p>Harsh Agarwal</p>
          </div>
        </div>
        <div>
          <h2>My Accounts</h2>
          <div className="accounts">
            <AccountCard />
            <AccountCard />
            <AccountCard />
          </div>
        </div>
        <div>
          <h2>My Cards</h2>
          <div className="cardBox">
            <CreditCard />
            <CreditCard />
            <CreditCard />
          </div>
        </div>
        <div>
          <h2>Transactions</h2>
          <Transactions />
        </div>
      </div>
    );
}

export default Dashboard;