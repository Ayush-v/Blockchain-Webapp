import Container from "components/Container";
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import Illustration from "assets/illustrations/faqs.png";

const Faqs = () => {
  return (
    <Container>
      <h1 className="text-4xl">Frequently Asked Questions</h1>

      <div className="flex flex-col lg:flex-row my-6 gap-8 items-center">
        <img src={Illustration} alt="" className="max-h-60 p-4 object-fit" />
        <div className="w-full px-4">
          <div className="mx-auto w-full rounded-2xl bg-white p-2">
            {allFaqs.map((faqs) => (
              <Disclosure as="div" key={faqs.title} className="my-8">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-md shadow-lg px-4 py-4 text-left text-sm font-medium text-blue-900 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                      <span>{faqs.title}</span>
                      <ChevronUpIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-blue-500`}
                      />
                    </Disclosure.Button>
                    <Transition
                      show={open}
                      enter="transform transition duration-[400ms]"
                      enterFrom="opacity-0  scale-50"
                      enterTo="opacity-100 scale-100"
                      leave="transform duration-200 transition ease-in-out"
                      leaveFrom="opacity-100 scale-100 "
                      leaveTo="opacity-0 scale-95 "
                    >
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                        {faqs.description}
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Faqs;

const allFaqs = [
  {
    title: "What Is a Blockchain in Simple Terms?",
    description:
      "Simply put, a blockchain is a shared database or ledger. Pieces of data are stored in data structures known as blocks, and each node of the network has an exact replica of the entire database. Security is ensured since if somebody tries to edit or delete an entry in one copy of the ledger, the majority will not reflect this change and it will be rejected.",
  },
  {
    title: "How Many Blockchains Are There?",
    description:
      "The number of live blockchains is growing every day at an ever-increasing pace. As of 2022, there are more than 10,000 active cryptocurrencies based on blockchain, with several hundred more non-cryptocurrency blockchains",
  },
  {
    title:
      "What’s the Difference Between a Private Blockchain and a Public Blockchain?",
    description:
      "A public blockchain, also known as an open or permissionless blockchain, is one where anybody can join the network freely and establish a node. Because of their open nature, these blockchains must be secured with cryptography and a consensus system like proof of work (PoW). A private or permissioned blockchain, on the other hand, requires each node to be approved before joining. Because nodes are considered to be trusted, the layers of security do not need to be as robust.",
  },
  {
    title: "What Is a Blockchain Platform?",
    description:
      "A blockchain platform allows users and developers to create novel uses on top of an existing blockchain infrastructure. One example is Ethereum, which has a native cryptocurrency known as ether (ETH). But the Ethereum blockchain also allows the creation of smart contracts and programmable tokens used in initial coin offerings (ICOs), and non-fungible tokens (NFTs). These are all built up around the Ethereum infrastructure and secured by nodes on the Ethereum network.",
  },
  {
    title: "Who Invented Blockchain?",
    description:
      "Blockchain technology was first outlined in 1991 by Stuart Haber and W. Scott Stornetta, two mathematicians who wanted to implement a system where document timestamps could not be tampered with. In the late 1990s, Cypherpunk Nick Szabo proposed using a blockchain to secure a digital payments system, known as bit gold (which was never implemented).",
  },
];
