/* eslint-disable react-refresh/only-export-components */
import { ReactNode, useCallback, useEffect, useState } from 'react'
import { api } from '../lib/axios'
import { createContext } from 'use-context-selector'

interface ITransaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

interface ICreateTransactionInput {
  description: string
  price: number
  category: string
  type: 'income' | 'outcome'
}

interface TransactionContextType {
  transactions: ITransaction[]
  fetchTransactions: (query?: string) => Promise<void>
  createTransaction: (data: ICreateTransactionInput) => Promise<void>
}

interface ITransactionProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionContextType)

export const TransactionsProvider = ({
  children,
}: ITransactionProviderProps) => {
  const [transactions, setTransactions] = useState<ITransaction[]>([])

  const fetchTransactions = useCallback(async (query?: string) => {
    const response = await api.get('transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })

    setTransactions(response.data)
  }, [])

  const createTransaction = useCallback(
    async (data: ICreateTransactionInput) => {
      const { description, category, price, type } = data

      const response = await api.post('transactions', {
        description,
        category,
        price,
        type,
        createdAt: new Date(),
      })

      setTransactions((state) => [response.data, ...state])
    },
    [],
  )

  useEffect(() => {
    fetchTransactions()
  }, [fetchTransactions])

  return (
    <TransactionsContext.Provider
      value={{ transactions, fetchTransactions, createTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}

// export const useTransactions = () => {
//   const context = useContextSelector(TransactionsContext, (context) => {
//     return context.createTransaction
//   })

//   if (!context) {
//     throw new Error(
//       'useTransactions must be used within a TransactionsProvider',
//     )
//   }
//   return context
// }
