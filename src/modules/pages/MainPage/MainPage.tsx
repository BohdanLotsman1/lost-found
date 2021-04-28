import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import 'antd/dist/antd.css';
import {JWT_LOCALSTORAGE_KEY} from "../../../libs/utils/constants";
import './style.scss';
import { Pagination } from "antd";
import { getPosts, selectPost } from "../../Posts/store/actions";
import { fetchPostsSelector, PostPages } from "../../Posts/store/selectors";
import moment from "moment";
import { Link } from "react-router-dom";

const MainPage = () => {

    const dispatch = useDispatch();

    const posts = useSelector(fetchPostsSelector);
    const pages = useSelector(PostPages)

    let token = localStorage.getItem(JWT_LOCALSTORAGE_KEY);

    useEffect(() => {
        //if(!token) token = localStorage.getItem(JWT_LOCALSTORAGE_KEY);
        dispatch(getPosts(1))
    }, []);

    const onchange = (e:any)=>{
        document.documentElement.scrollTop = 0;
        dispatch(getPosts(e))
   }

   const onClickHandle = (item:any) =>{
       dispatch(selectPost(item))
   }

    return (
        <div className="main-page">
            {
                posts.list.map((item,key)=>{
                    return(
                        <div className="post" key={key} onClick={()=>onClickHandle(item)}>
                            <div className="image">
                                <img style={{width:250,height:'100%',display:'flex'}} className='img-product' placeholder={"img"} src={item.image?`${process.env.REACT_APP_API_HOST}/${item.image}`:''}/>
                            </div>
                            <div className='content'>
                                <div className='head'>
                                    <Link className="link" to='/post'> {item.header}</Link> 
                                </div>
                                <div className='location'>
                                    {item.place} - {moment(item.created_at).format('MMMM Do YYYY, h:mm:ss a')}
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            <Pagination
                
                onChange={onchange}
                total={pages*10}
                
            />
        </div>
    );
}

export default MainPage;