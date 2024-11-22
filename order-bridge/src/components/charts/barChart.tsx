import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    Rectangle,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

interface DataPoint {
  name: string;
  value: number;
}

interface ChartProps {
  data: DataPoint[];
}

const BarChartComponent = ({ data }: ChartProps) => {
  return (
    <ResponsiveContainer width="100%" height={420}>
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="1 1" vertical={false} />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          radius={4}
          barSize={40}
          dataKey="value"
          fill="#7c3aed"
          activeBar={<Rectangle fill="#2e1065" stroke="#2e1065" />}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
