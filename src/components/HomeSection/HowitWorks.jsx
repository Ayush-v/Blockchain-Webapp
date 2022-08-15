import Container from "components/Container";
import Illustration from "assets/diagram.webp";

const HowitWorks = () => {
  return (
    <Container>
      <div className="">
        <div className="text-center">
          <h1 className="text-4xl font-semibold">
            How Does a Blockchain Work?
          </h1>
          <p className="text-slate-400 max-w-3xl mx-auto mt-3">
            The goal of blockchain is to allow digital information to be
            recorded and distributed, but not edited. In this way, a blockchain
            is the foundation for immutable ledgers, or records of transactions
            that cannot be altered, deleted, or destroyed. This is why
            blockchains are also known as a distributed ledger technology (DLT).
          </p>
        </div>

        <div className="flex justify-center items-center flex-col-reverse md:flex-row my-8">
          <ol className="relative border-l border-gray-200 grow basis-0 min-w-0">
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 "></div>
              <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                #1
              </time>
              <h3 className="text-lg font-semibold text-gray-900">
                Application UI code in Tailwind CSS
              </h3>
              <p className="mb-4 text-base font-normal text-gray-500 ">
                Get access to over 20+ pages including a dashboard layout,
                charts, kanban board, calendar, and pre-order E-commerce &
                Marketing pages.
              </p>
            </li>
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white "></div>
              <h3 className="text-lg font-semibold text-gray-900">
                Marketing UI design in Figma
              </h3>
              <p className="text-base font-normal text-gray-500">
                All of the pages and components are first designed in Figma and
                we keep a parity between the two versions even as we update the
                project.
              </p>
            </li>
            <li className="ml-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white "></div>
              <h3 className="text-lg font-semibold text-gray-900">
                E-Commerce UI code in Tailwind CSS
              </h3>
              <p className="text-base font-normal text-gray-500">
                Get started with dozens of web components and interactive
                elements built on top of Tailwind CSS.
              </p>
            </li>
          </ol>

          <div className="grow basis-0 min-w-0">
            <img src={Illustration} alt="" className="p-4 object-fit" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HowitWorks;
