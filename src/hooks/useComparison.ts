import { useQuery } from 'react-query'
import { getComparison } from '../services/comparison'
import { useState } from 'react'

interface Params {
  inventory: number
}

export default function useComparison({ inventory }: Params) {
  const [page, setPage] = useState(0)
  const [sizeOfPage, setSizeOfPage] = useState(10)
  const { data, isError, isLoading } = useQuery(
    ['comparisonData', inventory, page, sizeOfPage],
    async () => await getComparison({ inventory, page, sizeOfPage }),
    { keepPreviousData: true, staleTime: Infinity }
  )

  const handleChangePage = (
    _event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSizeOfPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  return {
    data,
    isError,
    handleChangePage,
    handleChangeRowsPerPage,
    page,
    sizeOfPage,
    isLoading,
  }
}
