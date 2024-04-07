import Header from '../../components/Header';
import Summary from '../../components/Summary';
import { TransactionsContainer, TransactionsTable, PriceHighLight } from "./styles";

const Transactions = () => {
  return (
    <section>
      <Header />

      <Summary />

      <TransactionsContainer>
        <TransactionsTable>
          <tbody>
            <tr>
              <td width={"50%"}>Desenvolvimento de site</td>
              <PriceHighLight variant='income'>R$ 12.000,00</PriceHighLight>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>

            <tr>
              <td width={"50%"}>Hamburguer</td>
              <PriceHighLight variant='outcome'>- R$ 59,00</PriceHighLight>
              <td>Alimentação</td>
              <td>10/04/2022</td>
            </tr>

            <tr>
              <td width={"50%"}>Aluguel do apartamento</td>
              <PriceHighLight variant='outcome'>- R$ 1.200,00</PriceHighLight>
              <td>Casa</td>
              <td>27/03/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </section>
  );
};

export default Transactions;
