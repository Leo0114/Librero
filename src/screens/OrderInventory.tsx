import { Button, Grid, TablePagination } from '@mui/material'
import { useLocation } from 'wouter'
import DataDisplay from '../components/DataDisplay'
import DataTable from '../components/DataTable'
import useComparison from '../hooks/useComparison'
import useSummary from '../hooks/useSummary'

export function OrderInventory({ id }: { id: string }) {
  const inventory = Number(id)
  const {
    data,
    handleChangePage,
    handleChangeRowsPerPage,
    page,
    sizeOfPage,
    isError,
    isLoading,
  } = useComparison({ inventory })
  const {
    total,
    correctBooks,
    incorrectBooks,
    loading: loadingSummary,
  } = useSummary({
    inventory,
    sizeOfPage,
  })

  const [, setLocation] = useLocation()
  const handleBack = () => {
    setLocation('/ordenar', { replace: true })
  }

  return (
    <Grid padding={2.5} spacing={2} container flexDirection="column">
      <Grid item>
        <Button variant="outlined" onClick={handleBack}>
          Regresar a selección de inventario
        </Button>
      </Grid>
      <Grid item>
        <DataDisplay
          total={total}
          correctBooks={correctBooks}
          incorrectBooks={incorrectBooks}
          loading={loadingSummary}
        />
      </Grid>
      <Grid item>
        <DataTable items={data?.data} error={isError} loading={isLoading} />
      </Grid>
      <Grid container justifyContent="flex-end">
        <TablePagination
          count={data?.total ?? 0}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={sizeOfPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Grid>
    </Grid>
  )
}
