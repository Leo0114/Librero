import { Book } from "./DataTable";

const CurrentBookCard = ({ currentBook }) => {
  const parsedBook = {
    title: currentBook.bookDescription.title,
    author: currentBook.bookDescription.author,
    classification: currentBook.classification,
    copyId: currentBook.copyId,
    isbn: currentBook.bookDescription.isbn,
    id: currentBook.copyId,
  };

  return <Book book={parsedBook} />;
};

export default CurrentBookCard;
