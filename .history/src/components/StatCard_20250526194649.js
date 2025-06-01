import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function StatCard({
  title,
  value,
  percentage,
  chartColor,
  data,
  isUp,
}) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-md w-full max-w-min ">
      <div className="text-sm text-gray-500">{title}</div>
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold">{value} -</div>
      </div>
      <div className="flex items-center text-xs text-gray-400 mt-1">
        <span className={isUp ? "text-green-500" : "text-red-500"}>
          {isUp ? "▲" : "▼"} {percentage}% last week
        </span>
      </div>
      <div className="h-16 mt-2">
        <Line
          data={{
            labels: data.map((_, i) => i),
            datasets: [
              {
                data,
                borderColor: chartColor,
                borderWidth: 2,
                tension: 0.4,
                pointRadius: 0,
              },
            ],
          }}
          options={{
            responsive: true,
            plugins: {
              legend: { display: false },
              tooltip: { enabled: false },
            },
            scales: {
              x: { display: false },
              y: { display: false },
            },
          }}
        />
      </div>
    </div>
  );
}
