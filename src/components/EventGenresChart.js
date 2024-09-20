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
    const [data, setData] = useState(() => {
        const savedData = localStorage.getItem('eventGenresData');
        return savedData ? JSON.parse(savedData) : [];
    });
    const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];
    const colors = ['#0A66F0', '#F07E00', '#875396', '#705638', '#386370']; // [BLUE, ORANGE, PURPLE, BROWN, TEAL]

    useEffect(() => {
        const newData = getData();
        setData(newData);
        localStorage.setItem('eventGenresData', JSON.stringify(newData));
    }, [events]);

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

    // const renderCustomizedLabel = ({ cx, cy, midAngle, outerRadius, percent, index }) => {
    //     const RADIAN = Math.PI / 180;
    //     const radius = outerRadius;
    //     const x = cx + radius * Math.cos(-midAngle * RADIAN) * 1.07;
    //     const y = cy + radius * Math.sin(-midAngle * RADIAN) * 1.07;
    //     return percent ? (
    //       <text
    //         x={x}
    //         y={y}
    //         fill="000000"
    //         textAnchor={x > cx ? 'start' : 'end'}
    //         dominantBaseline="central"
    //       >
    //         {`${genres[index]} ${(percent * 100).toFixed(0)}%`}
    //       </text>
    //     ) : null;
    //   };

    return (
        <ResponsiveContainer width="99%" height={400}>
            <PieChart>
                <Pie
                    data={data}
                    dataKey="value"
                    fill="#8884d8"
                    labelLine={false}
                    // label={renderCustomizedLabel}
                    outerRadius={130}     
                >
                    {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                </Pie>
                <Legend align="center" verticalAlign="top" height={36}/>
            </PieChart>
        </ResponsiveContainer>
      );
}

export default EventGenresChart;