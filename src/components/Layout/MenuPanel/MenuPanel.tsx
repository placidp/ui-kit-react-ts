import type { FC } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ERoutes } from 'enums'
import './MenuPanel.scss'

export const MenuPanel: FC = () => {
	const navList = [ERoutes.Button]

	return (
		<nav className='MenuPanel'>
			<div className='MenuPanel-Brand'>
				<div className='MenuPanel-BrandTitle'>
					<Link className='MenuPanel-BrandTitleLink' to={ERoutes.Root}>
						UI
					</Link>
				</div>
				<div className='MenuPanel-BrandVersion'>v1.0</div>
			</div>
			<div className='MenuPanel-Title'>Components</div>
			<div className='MenuPanel-List'>
				{navList.map((item: ERoutes) => (
					<NavLink
						className={({ isActive }) =>
							isActive ? 'MenuPanel-ListItem MenuPanel-ListItem__active' : 'MenuPanel-ListItem'
						}
						key={item}
						to={item}>
						{item}
					</NavLink>
				))}
			</div>
		</nav>
	)
}
