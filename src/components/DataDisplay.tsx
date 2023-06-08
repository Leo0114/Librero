import { Card, Grid, Skeleton, Typography } from "@mui/material";

interface DataCardProps {
  total: number;
  label: string;
  loading: boolean;
}

function DataCard(props: DataCardProps) {
  const { total, label, loading } = props;

  return (
    <Card
      sx={{
        width: "16rem",
        display: "flex",
        flexDirection: "column",
        padding: "1rem",
        filter: "brightness(1.1)",
      }}
    >
      <Typography variant="h4">{loading ? <Skeleton /> : total}</Typography>
      <Typography variant="subtitle2" color="GrayText">
        {loading ? <Skeleton /> : label}
      </Typography>
    </Card>
  );
}

interface Props {
  total?: number;
  correctBooks?: number;
  incorrectBooks?: number;
  loading: boolean;
}

export default function DataDisplay({
  total = 0,
  correctBooks = 0,
  incorrectBooks = 0,
  loading,
}: Props) {
  return (
    <Grid container spacing={2}>
      <Grid item>
        <DataCard total={total} label="Libros totales" loading={loading} />
      </Grid>
      <Grid item>
        <DataCard
          total={correctBooks}
          label="Libros correctos"
          loading={loading}
        />
      </Grid>
      <Grid item>
        <DataCard
          total={incorrectBooks}
          label="Libros incorrectos"
          loading={loading}
        />
      </Grid>
    </Grid>
  );
}
