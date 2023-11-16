import React, { useEffect, useState } from 'react';
import './DonateUser.scss'; // Thay thế 'yourCSSFile.css' bằng tên tệp CSS của bạn
const DonateUser: React.FC = () => {
  return (
    <div className="DonateUser">
      <div className="container">
        <div className="title">Your Donations</div>
        <div className="detail-content">
          <div className="content-donate">
            <div className="item-donate">
              <span>Least</span>
              <div>$0.15</div>
            </div>
            <div className="item-donate">
              <span>Most</span>
              <div>$1.15</div>
            </div>
            <div className="item-donate">
              <span>Total</span>
              <div>$16.15</div>
            </div>
          </div>
          <div className="total-users-donate">
            <span>Total donations from users</span>
            <h2>$14682.52</h2>
          </div>
        </div>
        <div className="support">
          <h2>Our Support Organizations</h2>
          <div className="list-logo-support">
            <img alt="" src="/Bund.png"></img>
            <img alt="" src="/Deutsche.png"></img>
            <img alt="" src="/Greenpeace.png"></img>
            <img alt="" src="/Nabu.png"></img>
          </div>
        </div>
        <div className="donate">
          <h2>Make an extra donation</h2>
          <button>Donate</button>
        </div>
      </div>
    </div>
  );
};

export default DonateUser;
