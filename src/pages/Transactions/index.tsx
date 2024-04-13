import Header from "../../components/Header";
import Summary from "../../components/Summary";
import SearchForm from "./SearchForm";
import {
  TransactionsContainer,
  TransactionsTable,
  PriceHighLight,
} from "./styles";
import { useTransactions } from "../../contexts/TransactionsContext";

const Transactions = () => {
  const { transactions } = useTransactions();

  return (
    <section>
      <Header />

      <Summary />

      <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width={"50%"}>{transaction.description}</td>
                  <PriceHighLight variant={transaction.type}>
                    {transaction.price}
                  </PriceHighLight>
                  <td>{transaction.category}</td>
                  <td>{transaction.createdAt}</td>
                </tr>
              );
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </section>
  );
};

export default Transactions;
