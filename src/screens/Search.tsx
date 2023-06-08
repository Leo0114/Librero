import { useCallback } from "react";
import { getBookPostion } from "../services/getBookPosition";
import { useSearchStore } from "../store/searchStore";
import { Typography } from "@mui/material";
import CurrentBookCard from "../components/CurrentBook";
import SearchInput from "../components/SearchInput";
import BookGroup from "../components/BookGroup";

export const Search = () => {
  const searchStore = useSearchStore();

  const {
    isLoading,
    setIsLoading,
    previousAndNextBooksResponse,
    setPreviousAndNextBooksResponse,
    searchInput,
    setSearchInput,
  } = searchStore;

  const onSearch = useCallback(() => {
    setIsLoading(true);
    getBookPostion(searchInput, "9")
      .then((response) => setPreviousAndNextBooksResponse(response.data))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, [searchInput, setIsLoading, setPreviousAndNextBooksResponse]);

  /*   useEffect(() => {
    console.log("Calling boook postion");

    if (searchInput.length > 0) {
      onSearch();
    }
  }, [onSearch, searchInput.length]); */

  const { prevBooks, currentBook, nextBooks } = previousAndNextBooksResponse;

  return (
    <div>
      <SearchInput
        inputValue={searchInput}
        setInputValue={setSearchInput}
        onSubmit={onSearch}
      />

      {isLoading && <div>Loading...</div>}
      {!isLoading &&
        Object.keys(previousAndNextBooksResponse).length > 0 && ( // This is a way to check if an object is not empty
          <div className="flex justify-between items-center space-x-6 sm:p-8 pb-8">
            <div className="flex-6 hover:-translate-x-2 duration-200">
              <BookGroup title="Antes" books={prevBooks} />
            </div>

            {Boolean(currentBook) && (
              <div className="border-2 border-white rounded-xl p-4">
                <Typography variant="h6" className="text-center pb-4">
                  Actual
                </Typography>
                <CurrentBookCard currentBook={currentBook} />
              </div>
            )}

            <div className="flex-6 hover:translate-x-2 duration-200">
              <BookGroup title="Después" books={nextBooks} />
            </div>
          </div>
        )}
    </div>
  );
};
