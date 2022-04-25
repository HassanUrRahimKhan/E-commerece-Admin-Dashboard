import React from 'react';
import "./topbar.css";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
export default function Topbar() {
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo">
                  Ivolvo Admin
                </span>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                <NotificationsNoneIcon/>
                <span className="topIconBadge">2</span>
                </div>

                <div className="topbarIconContainer">
               <LanguageIcon/>
                <span className="topIconBadge">2</span>
                </div>

                <div className="topbarIconContainer">
                <SettingsIcon/>
                </div>
                <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" className="topAvatar" />
            </div>
        </div>
    </div>
  )
}
