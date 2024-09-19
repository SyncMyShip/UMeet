// src/components/EventGenresChart.js

import { useState, useEffect } from "react";
import {
    PieChart,
    Pie,
    Legend,
    Cell,
    ResponsiveContainer
} from 'recharts';

const EventGenresChart = ({ events }) => {
    const [data, setData] = useState([]);
    const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];
    const colors = ['#383B70', '#F0DD00', '#010BF0', '#706C38', '#F0A300']; // [indigo, gold, blue, olive, orange]

    useEffect(() => {
        setData(getData());
    }, [`${events}`]);

    const getData = () => {
        const data = genres.map((genre) => {
        const filteredEvents = events.filter((event) => event.summary.includes(genre));
            return { 
                name: genre, 
                value: filteredEvents.length 
            };
        })
        return data;
    }

    const renderCustomizedLabel = ({ cx, cy, midAngle, outerRadius, percent, index }) => {
        const RADIAN = Math.PI / 180;
        const radius = outerRadius;
        const x = cx + radius * Math.cos(-midAngle * RADIAN) * 1.07;
        const y = cy + radius * Math.sin(-midAngle * RADIAN) * 1.07;
        return percent ? (
          <text
            x={x}
            y={y}
            fill="000000"
            textAnchor={x > cx ? 'start' : 'end'}
            dominantBaseline="central"
          >
            {`${genres[index]} ${(percent * 100).toFixed(0)}%`}
          </text>
        ) : null;
      };

    return (
        <ResponsiveContainer width="99%" height={400}>
            <PieChart>
                <Pie
                    data={data}
                    dataKey="value"
                    fill="#8884d8"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={130} 
                    cx={"50%"}
                    cy={"50%"}        
                >
                    {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
      );
}

export default EventGenresChart;