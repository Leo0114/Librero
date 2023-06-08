import { useEffect, useState } from 'react'
import getSummary from '../services/summary'
import { Summary } from '../types'

interface Params {
  inventory: number
  sizeOfPage: number
}

export default function useSummary({ inventory, sizeOfPage }: Params) {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<Summary>()
  useEffect(() => {
    if (inventory <= 0 || sizeOfPage <= 0) return
    setLoading(true)
    getSummary({ inventory, sizeOfPage })
      .then((res) => setData(res))
      .catch((error) => {
        console.log(error)
      })
      .finally(() => setLoading(false))
  }, [inventory, sizeOfPage])

  return {
    total: data?.total,
    correctBooks: data?.correctBooks,
    incorrectBooks: data?.incorrectBooks,
    loading,
  }
}
