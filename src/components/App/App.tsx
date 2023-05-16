import { Layout } from 'components'
import { Route, Routes } from 'react-router-dom'
import { ButtonPage } from 'pages'
import { ERoutes } from 'enums'

export const App: React.FC = () => {
	return (
		<div className='App'>
			<Layout>
				<Routes>
					<Route path={ERoutes.Button} element={<ButtonPage />} />
				</Routes>
			</Layout>
		</div>
	)
}
