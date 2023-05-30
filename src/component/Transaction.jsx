const Transaction = ({ transaction }) => {
  return (
    <section>
      {transaction.map((t) => (
        <div
          id={t.id}
          className={`flex justify-between rounded-md bg-[#f4f4f4] font-bold p-2.5 mt-3.5 border-r-4 border-r-green-400 ${
            t.type === "expense" && "border-r-red-400"
          }`}
        >
          <span>{t.desc}</span>
          <span>${t.amount}</span>
        </div>
      ))}
    </section>
  );
};

export default Transaction;
