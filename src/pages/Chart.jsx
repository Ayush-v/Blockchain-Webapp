import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import client from "utils/api-client";
import Spinner from "components/Spinner";
import Container from "components/Container";

// configuring ChartJS
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const Chart = () => {
  const [value, setValues] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // fething data form blockchain Api
  useEffect(() => {
    setLoading(true);
    client(
      "https://api.blockchain.info/charts/n-transactions?timespan=1year&sampled=true&metadata=false&cors=true&format=json"
    )
      .then((data) => {
        setValues(data.values);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError(err);
      });
  }, []);

  console.log("chart", value);
  var data = {
    labels: value,
    datasets: [
      {
        label: `${value?.length} Transations`,
        data: value,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // All the configuration of chart
  const options = {
    responsive: true,
    scales: {
      x: {
        beginAtZero: true,

        ticks: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "All transaction data from Blockchain.com",
      },
    },
  };

  return (
    <Container>
      <div>
        <h1 className="text-4xl">Graphical Representation of Transcations</h1>
        {error && error}
        {loading ? <Spinner /> : null}
        <div>
          <Line options={options} data={data} height={800} />
        </div>
      </div>
    </Container>
  );
};

export default Chart;
