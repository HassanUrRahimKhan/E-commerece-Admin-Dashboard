import { React, useState, useEffect } from 'react'
import "./featured.css";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { userRequest } from '../../requestMethods';

export default function FeaturedInfo() {
    const [income, setIncome] = useState([]);
    const [perc, setPerc] = useState(0);

    useEffect(() => {
        const getIncome = async () => {
            try {
                const res = await userRequest.get("orders/income");
                setIncome(res.data);
                setPerc(Math.abs((res.data[1].total * 100) / res.data[0].total - 100));
            //    console.log(res.data[0].total*100)


            } catch (error) {
                console.log(error)
            }

        }
        getIncome()
    }, [])
     console.log(perc)
    return (
        <div className='featured'>
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">${income[1]?.total}</span>
                    <span className="featuredMoneyRate">%{Math.floor(perc)} <ArrowDownwardIcon className='featuredIcon neagtive' /></span>
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
