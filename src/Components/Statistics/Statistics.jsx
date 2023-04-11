import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Statistics = () => {
  const data = [
    {
      name: "Assignment 1",
      mark: 60,
    },
    {
      name: "Assignment 2",
      mark: 40,
    },
    {
      name: "Assignment 3",
      mark: 60,
    },
    {
      name: "Assignment 4",
      mark: 50,
    },
    {
      name: "Assignment 5",
      mark: 55,
    },
    {
      name: "Assignment 6",
      mark: 38,
    },
    {
      name: "Assignment 7",
      mark: 60,
    },
  ];
  return (
    <div className="container mx-auto">
      <AreaChart width={1020} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="mark" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </div>
  );
};

export default Statistics;
