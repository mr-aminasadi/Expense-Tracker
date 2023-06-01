import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";

const Transaction = ({ transaction }) => {
  const [searchItem, setSearchItem] = useState("");
  const [filteredTnx, setFilteredTnx] = useState(transaction);

  const filteredTransaction = (search) => {
    if (!search || search === "") {
      setFilteredTnx(transaction);
      return;
    }
    const filtered = transaction.filter((t) =>
      t.desc.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredTnx(filtered);
  };
  const searchHandler = (e) => {
    setSearchItem(e.target.value);
    filteredTransaction(e.target.value);
  };

  useEffect(() => {
    filteredTransaction(searchItem);
  }, [transaction]);

  return (
    <section>
      <div className="flex justify-between items-center mt-4 rounded-lg border border-[#ccc] bg-[#efefef] px-3 py-2.5">
        <input
          type="text"
          value={searchItem}
          onChange={searchHandler}
          className="bg-transparent outline-none"
          placeholder="Search ...."
        />
        <BiSearch size={20} />
      </div>
      {filteredTnx.length
        ? filteredTnx.map((t) => (
            <div
              id={t.id}
              className={`flex justify-between rounded-md bg-[#f4f4f4] font-bold p-2.5 mt-3.5 border-r-4 border-r-green-400 ${
                t.type === "expense" && "border-r-red-400"
              }`}
            >
              <span>{t.desc}</span>
              <span>${t.amount}</span>
            </div>
          ))
        : ""}
    </section>
  );
};

export default Transaction;
