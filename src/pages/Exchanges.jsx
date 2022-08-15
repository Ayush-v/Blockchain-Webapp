import Container from "components/Container";
import Spinner from "components/Spinner";
import { useEffect, useRef, useState } from "react";
import client from "utils/api-client";

const Exchanges = () => {
  const [data, setData] = useState(null);
  const currency = useRef(null);
  const [currencyValue, setCurrencyValue] = useState(0);
  const [exchangedValue, setExchangedValue] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    client("https://blockchain.info/ticker")
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
        setLoading(false);
      });
  }, []);

  function Exchange(e) {
    e.preventDefault();
    setLoading(true);
    client(
      `https://blockchain.info/tobtc?currency=${currency.current.value}&value=${currencyValue}`
    )
      .then((data) => {
        setExchangedValue(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError(err);
      });
  }

  return (
    <Container>
      <div>
        <h1 className="text-4xl">Market Prices and exchanges rates</h1>
        {error && error}
        <div>
          <h2 className="text-3xl mt-3">Convert USD to Bitcoin</h2>
          <h3 className="text-xl">
            Value in BTC after conversion :{exchangedValue}
          </h3>
          {loading ? <Spinner /> : null}
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
              />

              <button
                type="submit"
                className="bg-blue-600 p-2 rounded-md text-white"
                disabled={loading}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div>
          <h1 className="text-4xl my-5">
            Exchange Rates of different Countries
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4 content-center place-content-center">
            {data &&
              Object.keys(data).map((rates, idx) => (
                <div
                  key={idx}
                  className="bg-white shadow-md w-full p-4 rounded-md"
                >
                  <h1 className="text-xl">{rates}</h1>
                  <div className="flex gap-2">
                    <p className="text-red-400">sell: {data[rates].sell}</p>
                    <p className="text-green-400">buy: {data[rates].buy}</p>
                  </div>
                  <div className="flex gap-2">
                    <p className="text-purple-400">last: {data[rates].last}</p>
                    <p className="text-slate-400">
                      symbol: "{data[rates].symbol}"
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Exchanges;
