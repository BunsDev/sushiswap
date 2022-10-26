import { formatUSD } from 'soulswap-format'
import { Typography } from 'soulswap-ui'
import { FC } from 'react'

import { CellProps } from './types'

export const TotalBorrowUSDCell: FC<CellProps> = ({ row }) => {
  return (
    <Typography variant="sm" weight={500} className="truncate text-slate-50">
      {formatUSD(row.totalBorrowUSD)}
    </Typography>
  )
}
