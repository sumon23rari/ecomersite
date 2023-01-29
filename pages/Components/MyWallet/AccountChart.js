import React from 'react';
import { AreaChart,Tooltip,Area,ResponsiveContainer,Label } from 'recharts';
const AccountChart = () => {
    const data = [
  {
    "month": "january",
    "income": 4000,
    "withdraw": 2400
  },
  {
    "month": "feburary",
    "income": 3000,
    "withdraw": 1398
  },
  {
    "month": "march",
    "income": 2000,
    "withdraw": 9800
  },
  {
    "month": "april",
    "income": 2780,
    "withdraw": 3908
  },
  {
    "month": "may",
    "income": 1890,
    "withdraw": 4800
  },
  {
    "month": "june",
    "income": 2390,
    "withdraw": 3800
  },
  {
    "month": "july",
    "income": 3490,
    "withdraw": 4300
  }
  ,
  {
    "month": "august",
    "income": 3490,
    "withdraw": 4300
  }
  ,
  {
    "month": "september",
    "income": 3490,
    "withdraw": 4300
  }
  ,
  {
    "month": "october",
    "income": 3490,
    "withdraw": 4300
  }
  ,
  {
    "month": "november",
    "income": 3490,
    "withdraw": 4300
  }
  ,
  {
    "month": "december",
    "income": 3490,
    "withdraw": 4300
  }
]

  
    return (
        <div className='row'>
           <ResponsiveContainer width={400} height={300}>
         <AreaChart data={data}
  margin={{ top: 10, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
 
  <Tooltip/>
  <Area type="monotone" dataKey="income" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
  <Area type="monotone" dataKey="withdraw" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
</AreaChart>   
</ResponsiveContainer>
        </div>
    );
};

export default AccountChart;