import type { FC, MouseEvent } from 'react'
import { Button } from 'ui-kit'

export const ButtonPage: FC = (): JSX.Element => {
	const handleButtonClick = (event: MouseEvent) => {
		console.log('button click event', event)
	}

	return (
		<section>
			<h1>Button</h1>
			<Button isDisabled={false} onClick={handleButtonClick}>
				Send
			</Button>
			<hr />
			<h1>Button disabled</h1>
			<Button isDisabled onClick={handleButtonClick}>
				Send
			</Button>
			<hr />
		</section>
	)
}
