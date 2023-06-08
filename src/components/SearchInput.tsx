import { TextField, Button, Typography } from "@mui/material";
import searchLogo from "../assets/search.png";

const SearchInput = ({ inputValue, setInputValue, onSubmit }) => {
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    onSubmit();
  };

  return (
    <div className="flex flex-col items-center pt-16">
      <Typography variant="h6" gutterBottom className="text-center">
        Buscar libro por número de ejemplar
      </Typography>
      <img src={searchLogo} alt="Imagen" className="w-1/12 m-12" />
      <div className="flex flex-col items-start">
        <div className="flex items-center">
          <TextField
            size="small"
            id="outlined-basic"
            label="Número de ejemplar"
            variant="filled"
            type="text"
            placeholder="Buscar"
            className="mr-2 p-2 border rounded"
            value={inputValue}
            onChange={handleChange}
          />

          <div className="pl-4">
            <Button variant="contained" size="large" onClick={handleSubmit}>
              Buscar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
