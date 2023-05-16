import { MouseEvent } from 'react'
import { Layout } from 'components'
import { Button } from 'ui-kit'

export const App: React.FC = () => {
	const handleButtonClick = (event: MouseEvent) => {
		console.log('button click event: ', event)
	}

	return (
		<div className='App'>
			<Layout>
				<h2>UI KIT</h2>
				<hr />
				<h2>Button</h2>
				<Button isDisabled={true} onClick={handleButtonClick}>
					Send
				</Button>
			</Layout>
		</div>
	)
}
