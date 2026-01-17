import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const data = [
    { name: 'Engineering', value: 728 },
    { name: 'Para Medical', value: 525 },
    { name: 'Other professionals', value: 246 },
];

const COLORS = ['#2E6FE7', '#1A4BB8', '#222222', '#6A6A6A', '#EDEDED'];

const DistributionChart: React.FC = () => {
    return (
        <div className="w-full h-[300px] md:h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="none" />
                        ))}
                    </Pie>
                    <Tooltip
                        contentStyle={{
                            backgroundColor: '#fff',
                            border: '1px solid #ededed',
                            borderRadius: '8px',
                            boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                        }}
                        itemStyle={{ color: '#222', fontFamily: 'Inter' }}
                    />
                    <Legend
                        verticalAlign="middle"
                        align="right"
                        layout="vertical"
                        iconType="circle"
                        wrapperStyle={{ fontFamily: 'Inter', fontSize: '14px', color: '#6A6A6A' }}
                    />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default DistributionChart;
