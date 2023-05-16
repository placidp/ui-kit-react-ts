import type { FC, ReactNode } from 'react'
import { MenuPanel } from './MenuPanel'
import './Layout.scss'
interface ILayoutProps {
	children?: ReactNode
}
export const Layout: FC<ILayoutProps> = ({ children }) => {
	return (
		<div className='Layout'>
			<MenuPanel />
			<div className='Layout-Container'>{children}</div>
		</div>
	)
}
