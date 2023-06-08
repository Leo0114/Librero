import { BookOrder, ComparisonData } from '../types'
import { axiosInstance } from './config'

const parseBook = (book: BookOrder) => ({
  id: book.id,
  title: book.bookDescription.title,
  author: book.bookDescription.author,
  classification: book.classification,
  copyId: book.copyId,
  isbn: book.bookDescription.isbn,
})

interface Params {
  inventory: number
  page: number
  sizeOfPage: number
}

export async function getComparison({
  inventory,
  page,
  sizeOfPage,
}: Params): Promise<ComparisonData> {
  const { data: response } = await axiosInstance.get(
    `inventory/comparison/${inventory}`,
    { params: { page: page + 1, sizeOfPage } }
  )
  const { currentOrder, correctOrder } = response.data
  const parsedCurrentOrder = currentOrder.map(parseBook)
  const parsedCorrectOrder = correctOrder.map(parseBook)
  const position = page * sizeOfPage + 1
  const parsedComparison: ComparisonData = {
    ...response,
    data: parsedCurrentOrder.map((book: BookOrder, index: number) => ({
      position: position + index,
      currentBook: book,
      correctBook: parsedCorrectOrder[index],
      isCorrect: parsedCorrectOrder[index].id === parsedCurrentOrder[index].id,
    })),
  }
  return parsedComparison
}
