import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import React from "react";
import { format, parseISO } from "date-fns";

// Colors for the pie chart
const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#845EC2",
  "#D65DB1",
  "#FF6F91",
  "#4D8076",
  "#FFA07A",
  "#A0E7E5",
  "#B39CD0",
  "#F6C90E",
  "#008F7A",
  "#E93B81",
];

const TransactionCharts = ({ data }) => {
  const dailyStats = data.reduce((acc, txn) => {
    let date;

    try {
      const parsedDate = parseISO(txn.transactionTime);
      date = format(parsedDate, "yyyy-MM-dd"); // Always normalize to date-only key
    } catch (e) {
      return acc; // skip invalid dates
    }

    if (!acc[date]) {
      acc[date] = { count: 0, total: 0 };
    }

    acc[date].count += 1;
    acc[date].total += parseFloat(txn.price);

    return acc;
  }, {});

  const dailyChartData = Object.entries(dailyStats)
    .sort(([a], [b]) => a.localeCompare(b)) // sort by date
    .map(([date, stats]) => ({
      date: format(parseISO(date), "MMM d"), // e.g., "Apr 24"
      transactions: stats.count,
      revenue: parseFloat(stats.total.toFixed(2)),
    }));

  // Aggregate per user
  // Aggregate per user
  const userStats = data.reduce((acc, txn) => {
    const username = txn.username || "Unknown";
    acc[username] = (acc[username] || 0) + 1;
    return acc;
  }, {});

  // Convert to chart data and sort
  const sortedEntries = Object.entries(userStats)
    .map(([username, count]) => ({ username, transactions: count }))
    .sort((a, b) => b.transactions - a.transactions);

  // Show top 10, group the rest as "Others"
  const topN = 10;
  const topUsers = sortedEntries.slice(0, topN);
  const otherCount = sortedEntries
    .slice(topN)
    .reduce((sum, item) => sum + item.transactions, 0);

  const finalChartData =
    otherCount > 0
      ? [...topUsers, { username: "Others", transactions: otherCount }]
      : topUsers;
  // .sort((a, b) => b.transactions - a.transactions);

  return (
    <>
      {/* Transactions per Day */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg text-center font-bold mb-4">
          Transactions and Revenue per Day
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={dailyChartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
            <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
            <Tooltip
              formatter={(value, name) =>
                name === "Revenue" ? `${value} XAF` : value
              }
            />
            <Legend />
            <Bar
              yAxisId="left"
              dataKey="transactions"
              fill="#8884d8"
              name="Transactions"
            />
            <Bar
              yAxisId="right"
              dataKey="revenue"
              fill="#82ca9d"
              name="Revenue"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Transactions per User */}
      <div className="bg-white p-4 mt-10 rounded shadow">
        <h2 className="text-lg text-center font-bold mb-4">
          Transactions per User
        </h2>
        <ResponsiveContainer width="100%" height={350}>
          <PieChart>
            <Pie
              data={finalChartData}
              dataKey="transactions"
              nameKey="username"
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={110}
              paddingAngle={2}
              label
            >
              {finalChartData.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend layout="vertical" verticalAlign="middle" align="right" />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default TransactionCharts;
