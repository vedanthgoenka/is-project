import React from "react";
import "../assets/css/ac.css"

function AccountCard() {
    return (
        <div className="account-card-container">
           <div className="account-card">
                    <h3>Savings Account</h3>
                    <p>Account Number: 1234567890</p>
                    <p>Balance: 100000</p>
                    <button className="details-button">See Details</button>     
            </div>
        </div>
    );
}

export default AccountCard;
