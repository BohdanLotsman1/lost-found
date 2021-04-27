import  React, {useEffect} from 'react';
import {Tabs} from 'antd';
import 'antd/dist/antd.css';
import './style.scss';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../../../Posts/store/actions';
import UserList from './Tabs/UserList/UserList';
import PostsList from './Tabs/PostsList/PostsList';
import { fetchAllUsers } from '../../../store/actions';
import PersonalInfo from '../../PersonalInfo/PersonalInfo';


const { TabPane } = Tabs;

const Admin = () => {
  
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchAllUsers())
    dispatch(getPosts(1))
  },[])

  return(
    <div className="AdminPage">
      <br />
      <Tabs defaultActiveKey="1" tabPosition="left" >
        <TabPane tab="Users" key="1">
          <UserList/>
        </TabPane>
        <TabPane tab="Posts" key="2">
          <PostsList/>
        </TabPane>
        <TabPane tab="Personal info" key="4">
          <PersonalInfo/>
        </TabPane>
      </Tabs>
    </div>
  )
}

export default Admin;