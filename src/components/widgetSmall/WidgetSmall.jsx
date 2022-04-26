import React from 'react'
import "./widgetSmall.css"
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function WidgetSmall() {
    return (
        <div className='WidgetSmall'>
            <span className="widgetSmallTitle">New Join Members </span>
            <ul className="widgetSmallList">
                <li className="widgetSmallListItem">
                    <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt="" className="widetSmallImage" />
                    <div className="widgetSmallUser">
                        <span className="widgetSmallUsername">Helen Keller</span>
                        <span className="widgetSmallUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmallButton">
                    <VisibilityIcon className='widgetSmIcon'/>
                        Display
                    </button>
                </li>
                <li className="widgetSmallListItem">
                    <img src="" alt="" className="widetSmallImage" />
                    <div className="widgetSmallUser">
                        <span className="widgetSmallUsername">Helen Keller</span>
                        <span className="widgetSmallUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmallButton">
                    <VisibilityIcon className='widgetSmIcon'/>
                        Display
                    </button>
                </li>
                <li className="widgetSmallListItem">
                    <img src="" alt="" className="widetSmallImage" />
                    <div className="widgetSmallUser">
                        <span className="widgetSmallUsername">Helen Keller</span>
                        <span className="widgetSmallUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmallButton">
                    <VisibilityIcon className='widgetSmIcon'/>
                        Display
                    </button>
                </li>
                <li className="widgetSmallListItem">
                    <img src="" alt="" className="widetSmallImage" />
                    <div className="widgetSmallUser">
                        <span className="widgetSmallUsername">Helen Keller</span>
                        <span className="widgetSmallUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmallButton">
                    <VisibilityIcon className='widgetSmIcon'/>
                        Display
                    </button>
                </li>
                <li className="widgetSmallListItem">
                    <img src="" alt="" className="widetSmallImage" />
                    <div className="widgetSmallUser">
                        <span className="widgetSmallUsername">Helen Keller</span>
                        <span className="widgetSmallUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmallButton">
                        <VisibilityIcon className='widgetSmIcon'/>
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
}
