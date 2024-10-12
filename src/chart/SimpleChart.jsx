import React, { PureComponent } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: '10am',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '11am',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '12am',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: '01am',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: '02am',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: '03am',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: '04am',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default class SimpleChart extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/line-chart-width-xaxis-padding-v3w7s9';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
