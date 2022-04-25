import React from 'react'
import "./featured.css";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function FeaturedInfo() {
    return (
        <div className='featured'>
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,234</span>
                    <span className="featuredMoneyRate">-11.4 <ArrowDownwardIcon className='featuredIcon neagtive'/></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,234</span>
                    <span className="featuredMoneyRate">-1.4 <ArrowDownwardIcon className='featuredIcon neagtive' /></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$4,234</span>
                    <span className="featuredMoneyRate">+2.4 <ArrowUpwardIcon className='featuredIcon ' /></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>

   
        </div>
    )
}