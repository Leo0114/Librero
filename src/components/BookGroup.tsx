import { Typography } from "@mui/material";
import { Book } from "./DataTable";

interface BookGroupProps {
  title: string;
  books: any[];
}

const BookGroup = ({ title, books }: BookGroupProps) => {
  const hasData = books?.length > 0;
  return (
    <>
      {hasData && (
        <div className="border-2 border-white rounded-xl p-4">
          <Typography variant="h6" className="text-center pb-4">
            {title}
          </Typography>
          <div className="flex flex-cols-2 gap-4">
            {books?.map((currentBook: any) => {
              const parsedBook = {
                title: currentBook.bookDescription.title,
                author: currentBook.bookDescription.author,
                classification: currentBook.classification,
                copyId: currentBook.copyId,
                isbn: currentBook.bookDescription.isbn,
                id: currentBook.copyId,
              };

              return <Book key={parsedBook.id} book={parsedBook} />;
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default BookGroup;
