import React, { useEffect, useState } from 'react';
import './ListCarUser.scss';
import DriverAvaiable from './DriverAvaiable/DriverAvailable';
const ListCarUser: React.FC = () => {
  return (
    <div className="ListCarUser">
      <div className="select-car">
        <DriverAvaiable />
      </div>
    </div>
  );
};

export default ListCarUser;
