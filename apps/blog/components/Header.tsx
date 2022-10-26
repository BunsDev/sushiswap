import { App } from 'soulswap-ui'
import { AppType } from 'soulswap-ui/app/Header'
import { FC } from 'react'

export const Header: FC = () => {
  return (
    <App.Header appType={AppType.Blog} className="bg-slate-900 border-b border-slate-200/5" nav={<></>}>
      <div className="flex items-center gap-9 whitespace-nowrap"></div>
    </App.Header>
  )
}
