import React, { useEffect } from "react";
import './style.scss';
import PersonalInfo from "../../PersonalInfo/PersonalInfo";
import { useDispatch, useSelector } from "react-redux";
import { getUserSelector } from "../../../store/selectors";

const CustomerProfile = () => {
  
  const user = useSelector(getUserSelector);

  const dispatch = useDispatch()



  return (
    <div className="profile">
      <PersonalInfo />
    </div>
  );
}

export default CustomerProfile;


