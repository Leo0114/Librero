import { axiosInstance } from './config'

interface Params {
  inventory: number
  sizeOfPage: number
}

export default async function getSummary({ inventory, sizeOfPage }: Params) {
  const response = await axiosInstance.get(`inventory/summary/${inventory}`, {
    params: { sizeOfPage },
  })
  return response.data
}
