import {
  Button,
  CircularProgress,
  FormControl,
  Grid,
  InputLabel,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { MenuItemInventory } from "../components/MenuItemInventory";
import { FormEvent, useId } from "react";
import bookshelfLogo from "../assets/bookshelf.png";
import { useInventories, useInventory } from "../hooks/inventories";
import { useLocation } from "wouter";

const Loading = () => <CircularProgress size={12} />;

export function SelectInventory() {
  const { inventories, loading, error } = useInventories();
  const { selected, changeSelected } = useInventory({ inventories });
  const [, setLocation] = useLocation();
  const inventoryId = useId();
  const getRenderValue = (value: number | string) =>
    inventories !== null && inventories[Number(value) - 1]?.label;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLocation(`/ordenar/${selected}`);
  };

  const handleChange = (event: SelectChangeEvent<string>) => {
    changeSelected(event.target.value);
  };

  const isDisabled = loading || error || inventories?.length === 0;
  const label = error ? "No se encontró ningún inventario" : "Inventario";

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item>
          <img
            className="pt-10 pb-2 max-w-sm"
            src={bookshelfLogo}
            alt="Bookshelf logo"
          />
        </Grid>

        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item>
            <FormControl error={error}>
              <InputLabel size="small" id={inventoryId}>
                {label}
              </InputLabel>
              <Select
                labelId={inventoryId}
                sx={{ width: 300 }}
                size="small"
                renderValue={loading ? Loading : getRenderValue}
                value={selected}
                onChange={handleChange}
                label="Inventario"
                disabled={isDisabled}
              >
                {inventories?.map((inv) => (
                  <MenuItemInventory
                    key={inv.isoKey}
                    value={inv.id}
                    label={inv.label}
                    startDate={inv.startDate}
                    active={inv.active}
                  />
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <Button variant="outlined" type="submit" disabled={error}>
              Buscar
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
}
