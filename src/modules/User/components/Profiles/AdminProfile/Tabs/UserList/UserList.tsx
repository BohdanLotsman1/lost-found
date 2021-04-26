import React, {useState} from 'react';
import { Button, Input, Select, Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getListWithAllUsersSelector, getUserSelector } from '../../../../../store/selectors';
import { deleteUser } from '../../../../../store/actions';
import moment from 'moment';
import './style.scss';

const { Option } = Select;

const UserList = ()=>{

  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState<string>('');
  const {allUsers} = useSelector(getListWithAllUsersSelector);
  const user = useSelector(getUserSelector);
  const list = allUsers.filter(item => item.id !== user.id);

  let filteredList = list

  if(list.length > 0){
    filteredList = list.filter((user) => user.first_name === searchValue 
    || user.last_name === searchValue
    || user.email === searchValue
    || user.phone === searchValue
    || user.name === searchValue
    );
  }
  
  let columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        className: "table-column-1",
        editable: true,
      },
      {
        title: 'Email',
        dataIndex: 'email',
        className: "table-column-1",
      },
      {
        title: 'Phone',
        dataIndex: 'phone',
        className: "table-column-1",
      },  
      {
        title: 'Address',
        dataIndex: 'location',
        className: "table-column-1",
      },
      {
        title: 'Actions',
        dataIndex: 'actions',
        className: "table-column-1",
        render: (_: any, record: any) =>
        list.length >= 1 ? (
          <div className="deleteUserBtn">
            <Button className="table-column-action" type="primary" onClick={() => dispatch(deleteUser(record.id))} danger >Delete</Button>
          </div>
        ) : null,
      },
      {
        title: 'Created at',
        dataIndex: 'created_at',
        className: "table-column-3",
        render: (_: any, record:any) =>
        list.length >= 1 ? moment(record.created_at).format('MMMM Do YYYY') : null,
      },
    ];

  return(
      <div className="UserList">
        <div className="Head">
          <Input onPressEnter={(e: any)=>setSearchValue(e.target.value)} className = 'search-user-bar' placeholder = 'Search user...' />
        </div>
        <Table
            className = 'table'
            rowClassName={() => 'editable-row'}
            bordered
            dataSource={searchValue ? filteredList : list}
            columns={columns}
            rowKey='id'
        />
  </div>
  )

}
export default UserList
                