import Illustration from "assets/illustrations/question.svg";

const Meaning = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-14 px-8 py-24">
      <div className="flex gap-4 flex-col lg:flex-row justify-center items-center">
        <div className="p-4">
          <h1 className="text-5xl grow basis-0">What Even is Blockchain?</h1>

          <img src={Illustration} alt="" className="mx-auto" />
        </div>
        <p className="text-slate-400 grow basis-0 min-w-0">
          A blockchain is a distributed database or ledger that is shared among
          the nodes of a computer network. As a database, a blockchain stores
          information electronically in digital format. Blockchains are best
          known for their crucial role in cryptocurrency systems, such as
          Bitcoin, for maintaining a secure and decentralized record of
          transactions. The innovation with a blockchain is that it guarantees
          the fidelity and security of a record of data and generates trust
          without the need for a trusted third party.
          <br />
          <br />
          One key difference between a typical database and a blockchain is how
          the data is structured. A blockchain collects information together in
          groups, known as blocks, that hold sets of information. Blocks have
          certain storage capacities and, when filled, are closed and linked to
          the previously filled block, forming a chain of data known as the
          blockchain. All new information that follows that freshly added block
          is compiled into a newly formed block that will then also be added to
          the chain once filled.
          <br />
        </p>
      </div>
    </div>
  );
};

export default Meaning;
