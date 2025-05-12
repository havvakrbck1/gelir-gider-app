import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const COLORS = ["#00C49F", "#FF8042"];

export default function Chart({ records }) {
  const summary = [
    {
      name: "Gelir",
      value: records
        .filter((r) => r.category === "Gelir")
        .reduce((sum, r) => sum + Number(r.amount), 0),
    },
    {
      name: "Gider",
      value: records
        .filter((r) => r.category === "Gider")
        .reduce((sum, r) => sum + Number(r.amount), 0),
    },
  ];

  return (
    <div style={{ width: "100%", height: 300 }}>
      <h2>Gelir - Gider Grafiği</h2>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={summary}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {summary.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
