import { useEffect, useRef, useState } from "react";
import client from "utils/api-client";

const Exchanges = () => {
  const [data, setData] = useState(null);
  const currency = useRef(null);
  const [currencyValue, setCurrencyValue] = useState(0);
  const [exchangedValue, setExchangedValue] = useState("");

  useEffect(() => {
    client("https://blockchain.info/ticker").then((data) => {
      setData(data);
    });
  }, []);

  function Exchange(e) {
    e.preventDefault();
    client(
      `https://blockchain.info/tobtc?currency=${currency.current.value}&value=${currencyValue}`
    ).then((data) => {
      setExchangedValue(data);
    });
  }

  return (
    <div className="mx-8 pt-8">
      <h1 className="text-4xl">Market Prices and exchanges rates</h1>
      <div>
        <h1>Convert USD to Bitcoin</h1>
        <h1>Value in BTC after conversion :{exchangedValue}</h1>
        <form onSubmit={Exchange}>
          <div className="flex px-4 py-3 gap-3">
            <select
              id="currency"
              ref={currency}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
            >
              {data &&
                Object.keys(data).map((currency, idx) => (
                  <option value={currency} key={idx}>
                    {currency}
                  </option>
                ))}
            </select>

            <input
              type="number"
              name="value"
              id="value"
              value={currencyValue}
              onChange={(e) => setCurrencyValue(e.target.value)}
              placeholder="value to convert"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />

            <button
              type="submit"
              className="bg-blue-600 p-2 rounded-md text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div>
        <h1 className="text-4xl my-5">Exchange Rates of different Countries</h1>
        <div className="flex flex-wrap gap-4 justify-center items-center">
          {data &&
            Object.keys(data).map((rates, idx) => (
              <div
                key={idx}
                className="bg-white shadow-md m-1 w-fit p-4 rounded-md"
              >
                <h1>{rates}</h1>
                <p>last: {data[rates].last}</p>
                <p>buy: {data[rates].buy}</p>
                <p>sell: {data[rates].sell}</p>
                <p>symbol: {data[rates].symbol}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Exchanges;
