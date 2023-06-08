import { axiosInstance } from './config'
import { Inventory, InventorySelect } from '../types'

const parseInventory = (inventory: Inventory) => ({
  isoKey: inventory.isoKey,
  id: inventory.id,
  label: `Inventario #${inventory.id}`,
  startDate: new Date(inventory.startDate),
  active: inventory.active,
})

export default async function getInventories(): Promise<InventorySelect[]> {
  const response = await axiosInstance.get('inventory')
  const data = response.data.data
  const inventories: InventorySelect[] = data.map(parseInventory)
  return inventories
}
