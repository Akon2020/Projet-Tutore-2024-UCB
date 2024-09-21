import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./graphique.scss";

const Graphique = () => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 9800,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
    },
  ];
  return (
    <div className="chart">
      <ResponsiveContainer>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#dc143c" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#dc143c" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#800080" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#800080" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray={"3 3"} />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="pv"
            stroke="#800080"
            fill="#80008033"
          />

          <Area
            type="monotone"
            dataKey="uv"
            stroke="#dc143c"
            fill="#ff000033"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Graphique;
