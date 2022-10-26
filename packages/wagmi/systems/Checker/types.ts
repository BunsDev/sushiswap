import { ButtonProps } from 'soulswap-ui'
import { ReactNode } from 'react'

export interface CheckerButton extends ButtonProps<'button'> {
  children: ReactNode
}
