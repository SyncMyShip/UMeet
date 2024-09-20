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
    const colors = ['#0A66F0', '#F07E00', '#875396', '#705638', '#386370']; // [BLUE, ORANGE, PURPLE, BROWN, TEAL]

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

    return (
        <ResponsiveContainer width="99%" height={400}>
            <PieChart>
                <Pie
                    data={data}
                    dataKey="value"
                    fill="#8884d8"
                    labelLine={false}
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