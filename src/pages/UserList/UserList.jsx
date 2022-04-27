import React from 'react'
import "./userlist.css"
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { userRows } from '../../dummyData';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function UserList() {
    const [data,setData] = useState(userRows);
    const handleDelete = (id)=>{
         setData(data.filter((item)=>item.id!==id));
           
         
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        {
            field: 'user', headerName: 'User', width: 180, renderCell: (params) => {
                return (
                    <div className="userListUser">
                        <img className='userListImg' src={params.row.avatar} alt="" />
                    </div>
                )
            }
        },
        { field: 'email', headerName: 'Email', width: 180 },
        {
            field: 'status',
            headerName: 'Status',
            width: 90,
        },
        {
            field: 'transaction',
            headerName: 'Transaction Volume',
            width: 100,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell:(params)=>{
                return(
                   <>
                   <Link to={"/user/"+params.row.id }>
                   <button className="userListEdit">Edit</button>
                   </Link>
                    
                    <DeleteOutlineIcon className="userListDelete" onClick={()=>handleDelete(params.row.id)}/>
                   </>
                )
            }
        },




    ];
 
    return (
        <div className='userList'>

            <div style={{ height: 600, width: '100%' }}>
                <DataGrid
                disableSelectionOnClick
                    rows={data}
                    columns={columns}
                    pageSize={8}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </div>


        </div>
    )
}
