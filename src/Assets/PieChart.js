import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { mockAssets } from "./mockAssets";

export default function PieChart() {
  ChartJS.register(ArcElement, Tooltip, Legend)
  return <Pie data={setupChart()} />;
}

function setupChart() {
    const assets = mockAssets
    let patrimony = 0
    assets.forEach((asset) => {
        patrimony += (asset.quantity * asset.price)
    })
    const data = {
      labels: [],
      datasets: [
        {
          label: "Porcentagem",
          data: [],
          backgroundColor: [
            "rgb(130, 10, 209)",
            "rgb(243, 228, 136)",
            "rgb(0, 0, 0)",
            "rgb(253, 252, 50)",
            "rgb(203, 0, 38)",
            "rgba(255, 159, 64, 0.2)",
            "rgb(192,192,192)",
            "rgb(106, 0, 2)",
            "rgb(40, 237, 236)",
            "rgb(242, 224, 39)",
            "rgb(0, 141, 61)",
            "rgb(247, 0, 0)",
            "rgb(247, 0, 0)",
            "rgb(52, 84, 118)",
            "rgb(161, 165, 168)"
          ],
          borderColor: [
            "rgb(130, 10, 209)",
            "rgb(243, 228, 136)",
            "rgb(0, 0, 0)",
            "rgb(253, 252, 50)",
            "rgb(203, 0, 38)",
            "rgba(255, 159, 64, 0.2)",
            "rgb(192,192,192)",
            "rgb(106, 0, 2)",
            "rgb(40, 237, 236)",
            "rgb(242, 224, 39)",
            "rgb(0, 141, 61)",
            "rgb(247, 0, 0)",
            "rgb(247, 0, 0)",
            "rgb(52, 84, 118)",
            "rgb(161, 165, 168)"
          ],
          borderWidth: 1
        }
      ]
    };

    assets.forEach((asset) => {
        data.labels.push(asset.name)
        data.datasets[0].data.push((((asset.quantity * asset.price) / patrimony) * 100).toFixed(2))
    })

    return data
}