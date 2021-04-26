import React, { useState } from 'react'
import { Button, Input, Select, Table } from 'antd'
import { useDispatch, useSelector } from 'react-redux';
import {  deletePost} from "../../../../../../Posts/store/actions";
import { getListWithAllUsersSelector } from '../../../../../store/selectors';
import { selectPost } from '../../../../../../Posts/store/actions';

import './style.scss';
import moment from 'moment';
import { fetchPostsSelector } from '../../../../../../Posts/store/selectors';

const { Option } = Select;

const PostsList = ()=>{

  const dispatch = useDispatch();

  const {list} = useSelector(fetchPostsSelector);
  const [searchValue, setSearchValue] = useState<string>('');

  let filteredList = list;

  if(list.length > 0){
    filteredList = list.filter((post) => post.header === searchValue 
    || post.last_name === searchValue

    );
  }
  let columns = [
    {
      title: 'Header',
      dataIndex: 'header',
      editable: true,
      className: 'table-column-1'
    },
    {
      title: 'Description',
      dataIndex: 'description',
      className: 'table-column-2'
    },
    {
      title: 'Email',
      dataIndex: 'email',
      editable: true,
      className: 'table-column-1'
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      editable: true,
      className: 'table-column-1'
    },
    {
      title: 'Place',
      dataIndex: 'place',
      className: 'table-column-4'
    },
    {
      title: 'Created At',
      dataIndex: 'created_at',
      className: 'table-column-3',
      render: (_: any, record:any) =>
      list.length >= 1 ? (
          <div>
            {
              moment(record.created_at).format('MMMM Do YYYY')
            }
          </div>
      ) : null,
    },
    {
      title: 'Operation',
      dataIndex: 'operation',
      className: 'table-column-5',
      render: (_: any, record:any) =>
      list.length >= 1 ? (
          <div>
            <Button type="primary" className="operation-btn" danger onClick={()=>dispatch(deletePost(record.id))} >Delete</Button>
          </div>
      ) : null,
      },
  ];
  
  
  return(
    <div className="PostList">
      <div className="head">
        <div className ="Input">
          <Input style ={{width:'100%'}} onPressEnter={(e: any)=>setSearchValue(e.target.value)} placeholder = 'Search post...' />
        </div>
      </div>

      <Table
        rowClassName={() => 'editable-row'}
        dataSource={searchValue ? filteredList : list}
        columns={columns}
        rowKey='id'
      />

    </div>
  )
}

export default PostsList