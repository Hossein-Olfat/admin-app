import { useEffect, useState } from "react";
import { Button } from "./Button.jsx";
import { Spinner } from "../../../../Spinner.jsx";

function Widgetlg() {
  const [Transactions, setTransactions] = useState([]);

  useEffect(() => {
    let ignore = false;
    fetch("https://dashboard-admin-server.iran.liara.run/transactions")
      .then((transactions) => {
        return transactions.json();
      })
      .then((_transactions) => {
        if (!ignore) {
          setTransactions(_transactions);
        }
      });
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <>
      <h1
        className={`text-[1.35rem] font-semibold pl-5 xxs:pl-3 ${
          Transactions.length === 0 ? "mb-6" : "mb-3"
        }`}
      >
        Latest Transactions
      </h1>
      {Transactions.length !== 0 ? (
        <table className="w-[800px] border-separate border-spacing-5 xxs:w-[650px]">
          <thead>
            <tr className="w-full">
              <th className=" text-sm font-semibold text-left">Customer</th>
              <th className=" text-sm font-semibold text-left">Date</th>
              <th className=" text-sm font-semibold text-left">Amount</th>
              <th className=" text-sm font-semibold text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {Transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td>
                    <div className=" flex items-center gap-3 xxs:flex-col xxs:items-start">
                      <img
                        className=" w-[40px] h-[40px] rounded-[50%]"
                        src={`./public/images/${transaction.img}`}
                      />
                      <span className=" text-sm">{transaction.customer}</span>
                    </div>
                  </td>

                  <td className=" text-sm">{transaction.date}</td>

                  <td className="text-sm">{`${transaction.amount}$`}</td>

                  <td className=" text-sm">
                    <button
                      className={`${Button(
                        transaction.status
                      )} text-center rounded-xl cursor-pointer py-1 px-2 w-[82px]`}
                    >
                      {transaction.status}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <div>
          <Spinner />
        </div>
      )}
    </>
  );
}
export { Widgetlg };
