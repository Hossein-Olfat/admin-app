import { useSyncExternalStore } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  YAxis,
  Legend,
} from "recharts";

function Chart({ title, data, datakey, grid }) {
  const responsive_chart = useSyncExternalStore(Subscribe, () => {
    return window.innerWidth;
  });

  function Subscribe(callback) {
    window.addEventListener("resize", (e) => {
      callback(e.target.value);
    });
  }

  return (
    <div className=" shadow mt-6 px-6 py-3">
      <h1 className="font-bold text-lg mb-4">{title}</h1>
      <ResponsiveContainer
        width="100%"
        aspect={
          responsive_chart > 820
            ? 4
            : responsive_chart > 580
            ? 2
            : responsive_chart > 450
            ? 1
            : 1
        }
      >
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />

          <Line type="monotone" dataKey={datakey} stroke="#5550bd" />
          <Tooltip
            contentStyle={{
              fontSize: "11px",
              fontWeight: "bold",
              width: "initial",
              padding: "5px",
            }}
          />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="10" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
