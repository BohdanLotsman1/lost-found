import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import 'antd/dist/antd.css';
import {JWT_LOCALSTORAGE_KEY} from "../../../libs/utils/constants";
import './style.scss';

const MainPage = () => {
    const dispatch = useDispatch();
    let token = localStorage.getItem(JWT_LOCALSTORAGE_KEY);

    useEffect(() => {
        if(!token) token = localStorage.getItem(JWT_LOCALSTORAGE_KEY);
    }, [token]);

    return (
        <div className="main-page">
          Main page
        </div>
    );
}

export default MainPage;