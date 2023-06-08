import { Grid, MenuItem, Typography } from '@mui/material'

interface MenuItemInventoryProps {
  startDate: string | Date
  active: boolean
  label: string
  value: number
}

export function MenuItemInventory(props: MenuItemInventoryProps) {
  const { value, label, active, startDate, ...rest } = props
  const localeDate = new Date(startDate)
    .toLocaleString('en-US', { hour12: false })
    .split(',')[0]
  const isActive = active ? ' - Activo' : null
  return (
    <MenuItem value={value} {...rest}>
      <Grid>
        <Typography>{label}</Typography>
        <Typography variant="body2">
          {localeDate}
          {isActive}
        </Typography>
      </Grid>
    </MenuItem>
  )
}
