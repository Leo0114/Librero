import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { BookOrderParsed, ComparisonBook } from "../types";
import { Cover } from "./Cover";
import { removeDashesFromString } from "../utils/functions";

interface DataTableProps {
  items: ComparisonBook[] | undefined;
  error: boolean;
  loading: boolean;
}

export function Book({ book }: { book: BookOrderParsed }) {
  const { title, author, classification, copyId, isbn } = book;
  return (
    <main>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <aside className="pr-3">
          <Cover isbn={removeDashesFromString(isbn)} size="small" />
        </aside>
        <section>
          <Typography variant="h6" noWrap className="max-w-sm">
            {title}
          </Typography>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Typography variant="caption">{author ?? "Sin autor"}</Typography>
            <Typography variant="caption" className="pl-2 text-blue-300">
              {classification}
            </Typography>
          </Grid>

          <Typography variant="caption" color="GrayText">
            Id ejemplar: {copyId}
          </Typography>
        </section>
      </Grid>
    </main>
  );
}

function TableRowBook({ item }: { item: ComparisonBook }) {
  const { currentBook, correctBook, position, isCorrect } = item;
  return (
    <TableRow>
      <TableCell>{position}</TableCell>
      <TableCell>
        <Book book={currentBook} />
      </TableCell>
      <TableCell>
        <Book book={correctBook} />
      </TableCell>
      <TableCell>
        {isCorrect ? "Ordenado" : "Desordenado"}
      </TableCell>
    </TableRow>
  );
}

export default function DataTable(props: DataTableProps) {
  const { items } = props;
  if (items === null || items === undefined) return <>No data</>;
  return (
    <TableContainer>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Posición</TableCell>
            <TableCell>Orden actual</TableCell>
            <TableCell>Orden correcto</TableCell>
            <TableCell>Estado</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item) => (
            <TableRowBook item={item} key={item.position} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
