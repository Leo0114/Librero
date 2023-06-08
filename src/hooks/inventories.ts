import { useEffect, useState } from 'react'
import getInventories from '../services/getInventories'
import { InventorySelect } from '../types'

export function useInventories() {
  const [inventories, setInventories] = useState<InventorySelect[] | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoading(true)
    setError(false)
    getInventories()
      .then((response) => {
        setInventories(response)
      })
      .catch(() => {
        setError(true)
        setInventories(null)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return { inventories, loading, error }
}

export function useInventory({
  inventories,
}: {
  inventories: InventorySelect[] | null
}) {
  const [selected, setSelected] = useState<string>('')

  useEffect(() => {
    if (inventories === null || inventories.length === 0) return
    const lastInventory = inventories.slice(-1)[0].id ?? ''
    setSelected(String(lastInventory))
  }, [inventories])

  const changeSelected = (value: string) => setSelected(value)

  return { selected, changeSelected }
}
