import {React, useState, useEffect} from 'react'
import "./widgetSmall.css"
import VisibilityIcon from '@mui/icons-material/Visibility';
import { userRequest } from '../../requestMethods';

export default function WidgetSmall() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        const getUsers =async () => {
        try {
            const res = await userRequest.get('users/?new=true')
        setUsers(res.data)
        } catch (error) {
            console.log(error)
        }
    }
    getUsers();
    }, [])
    return (
        <div className='WidgetSmall'>
            <span className="widgetSmallTitle">New Join Members </span>
            <ul className="widgetSmallList">
                {users.map(user=>(

               
                <li className="widgetSmallListItem" key={user._id}>
                    <img src= {user.img || "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"}className="widetSmallImage" />
                    <div className="widgetSmallUser">
                        <span className="widgetSmallUsername">{user.username}</span>
                    </div>
                    <button className="widgetSmallButton">
                    <VisibilityIcon className='widgetSmIcon'/>
                        Display
                    </button>
                </li>
               
               ))}
            
              
            </ul>
        </div>
    )
}
