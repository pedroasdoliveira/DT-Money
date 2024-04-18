/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { zodResolver } from '@hookform/resolvers/zod'
import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { SearchFormContainer } from './styles'
import { TransactionsContext } from '../../../contexts/TransactionsContext'
import { useContextSelector } from 'use-context-selector'

/**
 * Por que que um componente renderiza?
 * 
 * - hooks changed (mudou estado, contexto, reducer);
 * - props changed (mudou propriedades);
 * - parent rerendered (componente pai renderizou);
 * 
 * Qual o fluxo de renderização?
 * 1. O react recria o HTML da interface daquele componente
 * 2. Compara a versão do HTML recriada com a versão anterior
 * 3. SE mudou algo, ele reescreve o HTML
 * 
 * Memo:
 * 0. hooks changed, props changed (deep comparison);
 * 0.1 comparar a versão anterior dos hooks e props;
 * 0.2 SE mudou algo, ele vai permitir a nova renderização;
 */

const searchFormSchema = z.object({
  query: z.string(),
})

type searchFormInputs = z.infer<typeof searchFormSchema>

const SearchForm = () => {
  const fetchTransactions = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.fetchTransactions
    },
  )

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<searchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  const handleSearchTransaction = async (data: searchFormInputs) => {
    await fetchTransactions(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransaction)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register('query')}
      />

      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  )
}

export default SearchForm
