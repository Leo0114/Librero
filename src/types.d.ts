export interface BookDescription {
  isbn: string | null
  title: string
  author: string
  publisher: string
}

export interface InventoryBook {
  id: number
  analyst: string
  copyId: string
  acquisitionId: string
  capturedDate: Date
  countedDate: Date
  classification: string
  bookDescription: BookDescription
}

export interface PreviousAndNextBooksResponse {
  prevBooks: InventoryBook[]
  currentBook: InventoryBook
  nextBooks: InventoryBook[]
}

export interface Inventory {
  id: number
  isoKey: string
  analyst: string
  startDate: Date
  endDate: Date
  comments: string
  active: boolean
}

export interface InventorySelect {
  id: number
  isoKey: string
  label: string
  startDate: Date
  active: boolean
}

export interface DataTableItems<T> {
  currentOrder: T[]
  correctOrder: T[]
}

export interface BookOrder {
  id: number
  acquisitionId: string
  analyst: string
  capturedDate: string
  countedDate: string
  copyId: string
  classification: string
  bookDescription: BookDescription
}

export interface BookOrderParsed {
  id: number
  title: string
  author: string | null
  classification: string
  copyId: string
  isbn: string
}

export interface ComparisonBook {
  position: number
  currentBook: BookOrderParsed
  correctBook: BookOrderParsed
  isCorrect: boolean
}

export interface ComparisonData {
  total: number
  totalPages: number
  nextPage: number | null
  data: ComparisonBook[]
}

export interface Summary {
  total: number
  incorrectBooks: number
  correctBooks: number
  data: SummaryPage[]
}

export interface SummaryPage {
  page: number
  incorrectBooks: number
}
