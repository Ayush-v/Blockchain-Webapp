import Illustration from "assets/diagram.webp";
import Illustration2 from "assets/image.webp";

const Data = [
  {
    id: 1,
    title: "A new transaction is entered",
  },
  {
    id: 2,
    title:
      "The transaction is then transmitted to a network of peer-to-peer computers scattered across the world.",
  },
  {
    id: 3,
    title:
      "This network of computers then solves equations to confirm the validity of the transaction.",
  },
  {
    id: 4,
    title: "The transaction is complete.",
  },
  {
    id: 5,
    title:
      "These blocks are then chained together creating a long history of all transactions that are permanent.",
  },
  {
    id: 6,
    title:
      "Once confirmed to be legitimate transactions, they are clustered together into blocks.",
  },
];

const HowitWorks = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-14 px-8 py-24">
      <div className="text-center">
        <h1 className="text-4xl font-semibold">How Does a Blockchain Work?</h1>
        <p className="text-slate-400 max-w-3xl mx-auto mt-3">
          The goal of blockchain is to allow digital information to be recorded
          and distributed, but not edited. In this way, a blockchain is the
          foundation for immutable ledgers, or records of transactions that
          cannot be altered, deleted, or destroyed. This is why blockchains are
          also known as a distributed ledger technology (DLT).
        </p>
      </div>

      <div className="flex justify-center items-center flex-col-reverse md:flex-row my-8">
        <ol className="relative border-l border-gray-200 grow basis-0 min-w-0">
          {Data.map((info) => (
            <li
              className="mb-10 ml-4 hover:bg-slate-100 rounded-md transition duration-300 p-2"
              key={info.id}
            >
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 "></div>
              <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                #{info.id}
              </time>
              <h3 className="text-lg font-semibold text-gray-900">
                {info.title}
              </h3>
            </li>
          ))}
        </ol>

        <div className="grow basis-0 min-w-0 mb-auto">
          <img src={Illustration} alt="" className="p-4 object-fit" />
          <img src={Illustration2} alt="" className="p-4 object-fit" />
        </div>
      </div>
    </div>
  );
};

export default HowitWorks;
