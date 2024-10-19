import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./graphique.scss";

const Graphique = ({aspect, titre}) => {
  const data = [
    { name: "Janvier", Total: 1500 },
    { name: "Février", Total: 2100 },
    { name: "Mars", Total: 800 },
    { name: "Avril", Total: 1600 },
    { name: "Main", Total: 900 },
    { name: "Juin", Total: 120 },
    { name: "Juillet", Total: 900 },
    { name: "Aôut", Total: 2000 },
    { name: "Septembre", Total: 1600 },
    { name: "Octobre", Total: 800 },
    { name: "Novembre", Total: 2100 },
    { name: "Décembre", Total: 900 },
  ];
  return (
    <div className="chart">
      <div className="title">{titre}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ff000073" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#ff000073" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#ff000073"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Graphique;
