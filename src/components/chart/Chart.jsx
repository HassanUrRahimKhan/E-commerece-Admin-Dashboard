import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import "./chart.css"

export default function Chart({title, data, dataKey,grid}) {
    const data = [
        {
          name: 'Jan',
          "Active User": 16000,
        },
        {
            name: 'Feb',
            "Active User": 8000,
          },
          {
            name: 'Mar',
            "Active User": 4000,
          },
          {
            name: 'Apr',
            "Active User": 6000,
          },
          {
            name: 'Jun',
            "Active User": 8000,
          },
          {
            name: 'July',
            "Active User": 5000,
          },
          {
            name: 'Agu',
            "Active User": 23000,
          },
          {
            name: 'Sept',
            "Active User": 12000,
          },
          {
            name: 'Oct',
            "Active User": 9000,
          },
          {
            name: 'Nov',
            "Active User": 10000,
          },
          {
            name: 'Dec',
            "Active User": 11000,
          },
       
      ];
    return (
        <div className='chart'>
            <h3 className="chartTitle"> Sales Analytics</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>

                <LineChart data={data}>
                <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" dataKey="Active User" stroke="#5550bd" />
          <Tooltip/>
          {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray="5 5 "/>}
                </LineChart>
            </ResponsiveContainer>
        </div>
    )



}