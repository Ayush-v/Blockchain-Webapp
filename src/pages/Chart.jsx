import { useEffect, useState } from "react";

const Chart = () => {
  const [value, setValues] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.blockchain.info/charts/n-transactions?timespan=1year&sampled=true&metadata=false&cors=true&format=json"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setValues(data.values);
      });
  }, []);

  return (
    <div>
      <h1>Charts</h1>
    </div>
  );
};

export default Chart;
