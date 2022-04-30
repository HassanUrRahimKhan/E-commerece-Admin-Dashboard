import React from 'react'
import "./sidebar.css";
import { Link } from "react-router-dom";

import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import InventoryIcon from '@mui/icons-material/Inventory';
import PaidIcon from '@mui/icons-material/Paid';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FeedbackIcon from '@mui/icons-material/Feedback';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ReportIcon from '@mui/icons-material/Report';
import { Analytics } from '@mui/icons-material';


export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className='Link'>
            <li className="sidebarListItem  active">
              <LineStyleIcon className='sidebarIcon' />
              Home
            </li>
            </Link>
           

            <li className="sidebarListItem">
              <TimelineIcon className='sidebarIcon' />
              Analytics
            </li>

            <li className="sidebarListItem">
              <TrendingUpIcon className='sidebarIcon' />
              Sales
            </li>
          </ul>
        </div>
      </div>

      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className='link'>
            <li className="sidebarListItem">
              <PersonOutlineIcon className='sidebarIcon'/>
              Users
            </li>
            </Link>
           
            <Link to="/products"  className='link'>
            <li className="sidebarListItem">
             <InventoryIcon className='sidebarIcon'/>
              Products
            </li>
            </Link>
           

            <li className="sidebarListItem">
             <PaidIcon className='sidebarIcon'/>
              Transactions
            </li>

            <li className="sidebarListItem">
              <SignalCellularAltIcon className='sidebarIcon'/>
              Reports
            </li>
          </ul>
        </div>
      </div>

      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutlineIcon className='sidebarIcon'/>
              Mail
            </li>

            <li className="sidebarListItem">
              <FeedbackIcon className='sidebarIcon'/>
              Feedback
            </li>

            <li className="sidebarListItem">
              <ChatBubbleOutlineIcon className='sidebarIcon'/>
              Messages
            </li>

            
          </ul>
        </div>
      </div>

      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <ChatBubbleOutlineIcon className='sidebarIcon'/>
              Manage
            </li>

            <li className="sidebarListItem">
              <TimelineIcon className='sidebarIcon'/>
              Analytics
            </li>

            <li className="sidebarListItem">
            <ReportIcon className='sidebarIcon'/>
              Reports
            </li>
          </ul>
        </div>
      </div>

    </div>
  )
}
