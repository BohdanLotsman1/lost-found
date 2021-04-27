import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import 'antd/dist/antd.css';
import {JWT_LOCALSTORAGE_KEY} from "../../../libs/utils/constants";
import './style.scss';
import { Pagination } from "antd";

const MainPage = () => {

    const dispatch = useDispatch();

    let token = localStorage.getItem(JWT_LOCALSTORAGE_KEY);

    useEffect(() => {
        if(!token) token = localStorage.getItem(JWT_LOCALSTORAGE_KEY);
    }, [token]);

    const onchange = (e:any)=>{

    console.log(e)
   }

    return (
        <div className="main-page">
            <Pagination
            onChange={onchange}
            total={2}
            defaultPageSize={1}/>
        </div>
    );
}

export default MainPage;