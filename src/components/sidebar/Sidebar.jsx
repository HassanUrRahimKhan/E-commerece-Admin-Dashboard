import React from 'react'
import "./sidebar.css";
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
            <li className="sidebarListItem  active">
              <LineStyleIcon className='sidebarIcon' />
              Home
            </li>

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
            <li className="sidebarListItem">
              <PersonOutlineIcon/>
              Users
            </li>

            <li className="sidebarListItem">
             <InventoryIcon/>
              Products
            </li>

            <li className="sidebarListItem">
             <PaidIcon/>
              Transactions
            </li>

            <li className="sidebarListItem">
              <SignalCellularAltIcon/>
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
              <MailOutlineIcon/>
              Mail
            </li>

            <li className="sidebarListItem">
              <FeedbackIcon/>
              Feedback
            </li>

            <li className="sidebarListItem">
              <ChatBubbleOutlineIcon/>
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
              <ChatBubbleOutlineIcon/>
              Manage
            </li>

            <li className="sidebarListItem">
              <TimelineIcon/>
              Analytics
            </li>

            <li className="sidebarListItem">
            <ReportIcon/>
              Reports
            </li>
          </ul>
        </div>
      </div>

    </div>
  )
}