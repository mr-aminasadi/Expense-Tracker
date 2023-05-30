const Transaction = ({ transaction }) => {
  return (
    <section>
      {transaction.map((t) => (
        <div id={t.id} className="flex justify-between">
          <span>{t.desc}</span>
          <span>{t.amount}</span>
        </div>
      ))}
    </section>
  );
};

export default Transaction;
