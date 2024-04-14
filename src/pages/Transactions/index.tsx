import Header from '../../components/Header'
import Summary from '../../components/Summary'
import { useTransactions } from '../../contexts/TransactionsContext'
import { dateFormatter, priceFormatter } from '../../utils/formatter'
import SearchForm from './SearchForm'
import {
  PriceHighLight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'

const Transactions = () => {
  const { transactions } = useTransactions()

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
                  <td width={'50%'}>{transaction.description}</td>
                  <PriceHighLight variant={transaction.type}>
                    {transaction.type === 'outcome' && '- '}

                    {priceFormatter.format(transaction.price)}
                  </PriceHighLight>
                  <td>{transaction.category}</td>
                  <td>
                    {dateFormatter.format(new Date(transaction.createdAt))}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </section>
  )
}

export default Transactions
