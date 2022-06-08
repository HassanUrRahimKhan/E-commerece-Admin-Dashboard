import {useState,React,useMemo,useEffect} from 'react'
import "./home.css";
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import Chart from '../../components/chart/Chart';
import {userData} from "../../dummyData";
import WidgetLarge from '../../components/widgetLarge/WidgetLarge';
import WidgetSmall from '../../components/widgetSmall/WidgetSmall';
import { userRequest } from '../../requestMethods';

export default function Home() {
  const [userStats, setUserStats] = useState([])

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );
  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("/users/stats");
        res.data.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "Active User": item.total },
          ])
        );
      } catch {}
    };
    getStats();
  }, [MONTHS]);

 // console.log(userStats)
  return (
    <div className='home'>
        <FeaturedInfo/>
        <Chart data={userStats} title="User Analytics" grid dataKey="Active User"/>
        <div className="homeWidgets">
          <WidgetSmall/>
          <WidgetLarge/>

        </div>
    </div>
  )
}
